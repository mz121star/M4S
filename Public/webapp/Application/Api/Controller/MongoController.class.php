<?php

namespace Api\Controller;
use MongoClient;
use MongoRegex;
use MongoId;
use MongoDate;
use MongoInt64;
use Think\Controller\RestController;

class MongoController extends RestController {

    private $_connection;//db instance

    private $_collection;//table instance

    private $_config;
    
    private $_selects = array();

    private $_wheres = array();

    private $_sorts = array();

    private $_updates = array();

    private $_limit = 999999;

    private $_offset = 0;

    private $_query_log = array();

    private $_query_safety;

    public function __construct($config) {
        if (!extension_loaded('mongo')) {
            die('mongo extension is not loaded.');
        }
        $this->_config = $config;
        $this->_init();
    }

    private function _init() {
        $user = '';
        if ($this->_config['user'] && $this->_config['password']) {
            $user = $this->_config['user'].':'.$this->_config['password'].'@';
        }
        $driver = 'mongodb://'.$user.$this->_config['server'].':'.$this->_config['port'].'/'.$this->_config['dbname'];
        $this->_connection = new MongoClient($driver, $this->_config['options']);
    }

    public function __destruct() {
        $this->close();
    }

    public function close() {
        $this->_connection->close(true);
    }

    public function getDb($dbName) {
        return $this->_connection->selectDB($dbName);
    }

    public function dropDb($dbName) {
        return $this->_connection->dropDB($dbName);
    }

    public function dropCollection($collectionName, $dbName = '') {
        $response = $this->getCollection($collectionName, $dbName)->drop();
        return $response;
    }

    public function getCollection($collectionName, $dbName = '') {
        if (!$dbName) {
            $dbName = $this->_config['dbname'];
        }
        if (!$collectionName) {
            die('Collection name can not empty.');
        }
        $this->_collection = $this->_connection->selectCollection($dbName, $collectionName);
        return $this->_collection;
    }

    public function getCollectionNames($dbName = '') {
        if (!$dbName) {
            $dbName = $this->_config['dbname'];
        }
        return $this->_connection->selectDB($dbName)->getCollectionNames();
    }

    /**
     * $this->mongo->select(array('foo', 'bar'))->get('foobar');
     * 
     * @param array $includes Fields to include in the returned result
     * @param array $excludes Fields to exclude from the returned result
     */
    public function select($includes = array(), $excludes = array()) {
        if (!is_array($includes)) {
            $includes = array();
        }
        if (!is_array($excludes)) {
            $excludes = array();
        }
        if (!empty($includes)) {
            foreach ($includes as $include) {
                $this->_selects[$include] = 1;
            }
        } else {
            foreach ($excludes as $exclude) {
                $this->_selects[$exclude] = 0;
            }
        }
        return $this;
    }

    /**
     * $this->mongo->where(array('foo' => 'bar'))->get('foobar');
     *
     * @param array|string $wheres Array of where conditions. If string, $value must be set
     * @param mixed        $value  Value of $wheres if $wheres is a string
     */
    public function where($wheres = array(), $value = NULL) {
        if (is_array($wheres)) {
            foreach ($wheres as $where => $value) {
                $this->_wheres[$where] = $value;
            }
        } else {
            $this->_wheres[$wheres] = $value;
        }
        return $this;
    }

    /**
     * $this->mongo->where_or(array('foo'=>'bar', 'bar'=>'foo'))->get('foobar');
     *
     * @param array $wheres Array of where conditions
     */
    public function where_or($wheres = array()) {
        if (count($wheres) > 0) {
            if (!isset($this->_wheres['$or']) || !is_array($this->_wheres['$or'])) {
                $this->_wheres['$or'] = array();
            }
            foreach ($wheres as $where => $value) {
                $this->_wheres['$or'][] = array($where => $value);
            }
        }
        return $this;
    }

    /**
     * $this->mongo->where_in('foo', array('bar', 'zoo', 'blah'))->get('foobar');
     *
     * @param string $field     Name of the field
     * @param array  $in_values Array of values that $field could be
     */
    public function where_in($field = '', $in_values = array()) {
        $this->_where_init($field);
        $this->_wheres[$field]['$in'] = $in_values;
        return $this;
    }

    /**
     * $this->mongo->where_in_all('foo', array('bar', 'zoo', 'blah'))->get('foobar');
     *
     * @param string $field     Name of the field
     * @param array  $in_values Array of values that $field must be
     */    
    public function where_in_all($field = '', $in_values = array()) {
        $this->_where_init($field);
        $this->_wheres[$field]['$all'] = $in_values;
        return $this;
    }

    /**
     * $this->mongo->where_not_in('foo', array('bar', 'zoo', 'blah'))->get('foobar');
     *
     * @param string $field     Name of the field
     * @param array  $in_values Array of values that $field isnt
     */ 
    public function where_not_in($field = '', $in_values = array()) {
        $this->_where_init($field);
        $this->_wheres[$field]['$nin'] = $in_values;
        return $this;
    }

    /**
     * $this->mongo->where_gt('foo', 20);
     *
     * @param string $field Name of the field
     * @param mixed  $value Value that $field is greater than
     */
    public function where_gt($field = '', $value = NULL) {
        $this->_where_init($field);
        $this->_wheres[$field]['$gt'] = $value;
        return $this;
    }

    /**
     * $this->mongo->where_gte('foo', 20);
     *
     * @param string $field Name of the field
     * @param mixed  $value Value that $field is greater than or equal to
     */
    public function where_gte($field = '', $value = NULL) {
        $this->_where_init($field);
        $this->_wheres[$field]['$gte'] = $value;
        return $this;
    }

    /**
     * $this->mongo->where_lt('foo', 20);
     *
     * @param string $field Name of the field
     * @param mixed  $value Value that $field is less than
     */
    public function where_lt($field = '', $value = NULL) {
        $this->_where_init($field);
        $this->_wheres[$field]['$lt'] = $value;
        return $this;
    }

    /**
     * $this->mongo->where_lte('foo', 20);
     *
     * @param string $field Name of the field
     * @param mixed  $value Value that $field is less than or equal to
     */
    public function where_lte($field = '', $value = NULL) {
        $this->_where_init($field);
        $this->_wheres[$field]['$lte'] = $value;
        return $this;
    }
    
    /**
     * $this->mongo->where_between('foo', 20, 30);
     *
     * @param string $field   Name of the field
     * @param int    $value_x Value that $field is greater than or equal to
     * @param int    $value_y Value that $field is less than or equal to
     */
    public function where_between($field = '', $value_x = 0, $value_y = 0) {
        $this->_where_init($field);
        $this->_wheres[$field]['$gte'] = $value_x;
        $this->_wheres[$field]['$lte'] = $value_y;
        return $this;
    }
    
    /**
     * $this->mongo->where_between_ne('foo', 20, 30);
     *
     * @param string $field   Name of the field
     * @param int    $value_x Value that $field is greater than or equal to
     * @param int    $value_y Value that $field is less than or equal to
     */
    public function where_between_ne($field = '', $value_x, $value_y) {
        $this->_where_init($field);
        $this->_wheres[$field]['$gt'] = $value_x;
        $this->_wheres[$field]['$lt'] = $value_y;
        return $this;
    }

    /**
     * $this->mongo->where_ne('foo', 1)->get('foobar');
     *
     * @param string $field Name of the field
     * @param mixed  $value Value that $field is not equal to
     */
    public function where_ne($field = '', $value) {
        $this->_where_init($field);
        $this->_wheres[$field]['$ne'] = $value;
        return $this;
    }

    /**
     * $this->mongo->where_near('foo', array('50','50'))->get('foobar');
     *
     * @param string  $field     Name of the field
     * @param array   $coords    Array of coordinates
     * @param integer $distance  Value of the maximum distance to search
     * @param boolean $spherical Treat the Earth as spherical instead of flat (useful when searching over large distances)
     */
    function where_near($field = '', $coords = array(), $distance = NULL, $spherical = FALSE) {
        $this->_where_init($field);
        if ($spherical) {
            $this->_wheres[$field]['$nearSphere'] = $coords;
        } else {
            $this->_wheres[$field]['$near'] = $coords;
        }
        if ($distance !== NULL) {
            $this->_wheres[$field]['$maxDistance'] = $distance;
        }
        return $this;
    }

    /**
     * $this->mongo->like('foo', 'bar', 'im', FALSE, TRUE);
     *
     * @param string  $field      The field
     * @param string  $value      The value to match against
     * @param string  $flags      Allows for the typical regular expression flags:i = case insensitive
     *                                                                            m = multiline
     *                                                                            x = can contain comments
     *                                                                            l = locale
     *                                                                            s = dotall
     *                                                                            u = match unicode, 
     *                                                                            "." matches everything, including newlines
     * @param boolean $enable_start_wildcard    If set to anything other than TRUE, a starting line character "^" will be prepended to the search value, representing only searching for a value at the start of a new line.
     * @param boolean $enable_end_wildcard      If set to anything other than TRUE, an ending line character "$" will be appended to the search value, representing only searching for a value at the end of a line.
     * @param boolean $not         if set to true, it's mean not like.
     */
    public function like($field = '', $value = '', $flags = 'i', $enable_start_wildcard = TRUE, $enable_end_wildcard = TRUE, $not = false) {
        $field = (string)trim($field);
        $this->_where_init($field);
        $value = (string)trim($value);
        $value = quotemeta($value);

        if ($enable_start_wildcard !== TRUE) {
            $value = '^'.$value;
        }
        if ($enable_end_wildcard !== TRUE) {
            $value .= '$';
        }

        $regex = '/'.$value.'/'.$flags;
        if ($not) {
            $this->_wheres[$field]['$nin'] = array(new MongoRegex($regex));
        } else {
            $this->_wheres[$field] = new MongoRegex($regex);
        }
        return $this;
    }

    public function not_like($field = '', $value = '', $flags = 'i', $enable_start_wildcard = TRUE, $enable_end_wildcard = TRUE) {
        return $this->like($field, $value, $flags, $enable_start_wildcard, $enable_end_wildcard, true);
    }

    /**
     * $this->mongo->order_by(array('foo' => 'ASC'))->get('foobar');
     *
     * @param array $fields Array of fields with their sort type (asc or desc)
     */
    public function order_by($fields = array()) {
        foreach ($fields as $field => $order) {
            if ($order === -1 || $order === FALSE || strtolower($order) === 'desc') {
                $this->_sorts[$field] = -1; 
            } else {
                $this->_sorts[$field] = 1;
            }
        }
        return $this;
    }

    /**
     * $this->mongo->limit($x);
     *
     * @param int $limit The maximum number of documents that will be returned
     */
    public function limit($limit = 99999) {
        if ($limit !== NULL && is_numeric($limit) && $limit >= 1) {
            $this->_limit = (int)$limit;
        }
        return $this;
    }
    
    /**
     * $this->mongo->offset($x);
     *
     * @param int $offset The number of documents to offset the search by
     */
    public function offset($offset = 0) {
        if ($offset !== NULL && is_numeric($offset) && $offset >= 1) {
            $this->_offset = (int)$offset;
        }
        return $this;
    }

    /**
     * $this->mongo->get_where('foo', array('bar' => 'something'));
     *
     * @param string $collection Name of the collection
     * @param array  $where      Array of where conditions
     */
    public function get_where($collection = '', $where = array()) {
        return $this->where($where)->get($collection);
    }

    /**
     * $this->mongo->get('foo');
     *
     * @param string $collection    Name of the collection
     * @param bool   $return_cursor Return the native document cursor
     */
    public function get($collection = '', $return_cursor = FALSE) {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        $cursor = $this->_collection->find($this->_wheres, $this->_selects)->limit($this->_limit)->skip($this->_offset)->sort($this->_sorts);
        $this->_clear($this->_collection->getName(), 'get');

        // Return the raw cursor if wanted
        if ($return_cursor === TRUE) {
            return $cursor;
        }
        $documents = array();
        while ($cursor->hasNext()) {
            try {
                $documents[] = $cursor->getNext();
            } catch (MongoCursorException $exception) {
                throw new Exception($exception->getMessage());
            }
        }
        return $documents;
    }

    /**
     * $this->mongo->getPaginator(1, 20, 'foo');
     *
     * @param int $page             Number of the page
     * @param int $itemsPerPage     Number of the item per page
     * @param string $collection    Name of the collection
     * @param bool   $return_array  Return the native document data and page info
     */
    public function getPaginator($page = 1, $itemsPerPage = 10, $collection = '') {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        if ($page) {
            $totleRecord = $this->_collection->find($this->_wheres)->count();
            $totalPage = ceil($totleRecord / $itemsPerPage);
            $offset = ($page-1) * $itemsPerPage;
            $pageBlock = 10;
            $prev = intval(($page - 1) / $pageBlock) * $pageBlock;
            $num = $totalPage - $prev;
            if ($num > $pageBlock) {
                $num = $pageBlock;
            }
            $pagesInRange = array();
            $startPageRange = ($page > 5) ? $page - 5 : 1;
            $endPageRange = ($startPageRange + $pageBlock - 1 >= $totalPage) ? $totalPage : $startPageRange + $pageBlock - 1;
            for ($i=$startPageRange;$i<=$endPageRange;$i++) {
                $pagesInRange[] = $i;
            }

            $rowsData = array();
            $cursor = $this->_collection->find($this->_wheres, $this->_selects)->limit($itemsPerPage)->skip($offset)->sort($this->_sorts);
            $this->_clear($this->_collection->getName(), 'getPaginator');
            while ($cursor->hasNext()) {
                try {
                    $rowsData[] = $cursor->getNext();
                } catch (MongoCursorException $exception) {
                    throw new Exception($exception->getMessage());
                }
            }

            $pageInfo = array('current'=>$page, 'first'=>1, 'last'=>$totalPage, 'pageCount'=>$totalPage, 'pagesInRange'=>$pagesInRange, 'totalItemCount'=>$totleRecord);
            if ($page > 1) {
                $pageInfo['previous'] = $page - 1;
            }
            if ($page + 1 <= $totalPage) {
                $pageInfo['next'] = $page + 1;
            }
            if (count($_GET)) {
                $getparam = array();
                foreach ($_GET as $key => $value) {
                    if ($key == '_URL_' || $key == 'page') {
                        continue;
                    }
                    $getparam[] = $key.'='.$value;
                }
                $pageInfo['param'] = implode('&', $getparam);
            }
            return array('data'=>$rowsData, 'pageinfo'=>$pageInfo);
        } else {
            $rowsData = $this->get($collection);
            return $rowsData;
        }
    }

    /**
     * $this->mongo->index(array('application_name'=>1, 'push_time'=>1));
     *
     * @param array $index create index on some columns
     * @param array $options index options
     * @param string $collection Name of the collection
     */
    public function index($index, $options = array(), $collection = '') {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        $isSuccess = $this->_collection->ensureIndex($index, $options);
        $this->_clear($this->_collection->getName(), 'index');
        return $isSuccess;
    }

    /**
     * $this->mongo->count('foo');
     *
     * @param string $collection Name of the collection
     */
    public function count($collection = '') {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        $count = $this->_collection->find($this->_wheres)->count();//->limit($this->_limit)->skip($this->_offset)
        $this->_clear($this->_collection->getName(), 'count');
        return $count;
    }

    /**
     * $this->mongo->insert(array('foo'=>'bar'), 'foo');
     *
     * @param array  $insert     The document to be inserted
     * @param string $collection Name of the collection
     * @param array  $options    Array of options
     */
    public function insert($insert = array(), $collection = '', $options = array()) {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        if (count($insert) === 0 || !is_array($insert)) {
            throw new Exception('Nothing to insert into Mongo collection or insert is not an array');
        }
        $options = array_merge(array($this->_query_safety => TRUE), $options);
        try {
            $this->_collection->insert($insert, $options);
            if (isset($insert['_id'])) {
                return $insert['_id'];
            } else {
                return FALSE;
            }
        } catch (MongoCursorException $exception) {
            throw new Exception('Insert of data into MongoDB failed: '.$exception->getMessage());
        }
    }

    /**
     * $this->mongo->insert(array('foo'=>'bar'), 'foo');
     *
     * @param array  $insert     The document to be inserted
     * @param string $collection Name of the collection
     * @param array  $options    Array of options
     */
    public function batch_insert($insert = array(), $collection = '', $options = array()) {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        if (count($insert) === 0 || !is_array($insert)) {
            throw new Exception('Nothing to insert into Mongo collection or insert is not an array');
        }
        $options = array_merge(array($this->_query_safety => TRUE), $options);
        try {
            return $this->_collection->batchInsert($insert, $options);
        } catch (MongoCursorException $exception) {
            throw new Exception('Insert of data into MongoDB failed: '.$exception->getMessage());
        }
    }

    /**
     * $this->mongo->update('foo');
     *
     * @param string $collection Name of the collection
     * @param array  $options    Array of update options
     */
    public function update($collection = '', $options = array()) {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        if (count($this->_updates) === 0) {
            throw new Exception('Nothing to update in Mongo collection or update is not an array');
        }
        try {
            $options = array_merge(array($this->_query_safety => TRUE, 'multiple' => FALSE), $options);
            $result = $this->_collection->update($this->_wheres, $this->_updates, $options);
            $this->_clear($this->_collection->getName(), 'update');
            if ($result['updatedExisting'] > 0) {
                return $result['updatedExisting'];
            }
            return FALSE;
        } catch (MongoCursorException $exception) {
            throw new Exception('Update of data into MongoDB failed: '.$exception->getMessage());
        }
    }

    /**
     * $this->mongo->where(array('blog_id'=>123))->inc(array('num_comments' => 1))->update('blog_posts');
     *
     * @param array|string $fields Array of field names (or a single string field name) to be incremented
     * @param int          $value  Value that the field(s) should be incremented by
     */    
    public function inc($fields = array(), $value = 0) {
        $this->_update_init('$inc');
        if (is_string($fields)) {
            $this->_updates['$inc'][$fields] = $value;
        } elseif (is_array($fields)) {
            foreach ($fields as $field => $value) {
                $this->_updates['$inc'][$field] = $value;
            }
        }
        return $this;
    }

    /**
     * $this->mongo->where(array('blog_id'=>123))->dec(array('num_comments' => 1))->update('blog_posts');
     *
     * @param array|string $fields Array of field names (or a single string field name) to be decremented
     * @param int          $value  Value that the field(s) should be decremented by
     */    
    public function dec($fields = array(), $value = 0) {
        $this->_update_init('$inc');
        if (is_string($fields)) {
            $this->_updates['$inc'][$fields] = -$value;
        } elseif (is_array($fields)) {
            foreach ($fields as $field => $value) {
                $this->_updates['$inc'][$field] = -$value;
            }
        }
        return $this;
    }

    /**
     * $this->mongo->where(array('blog_id'=>123))->set('posted', 1)->update('blog_posts');
     * $this->mongo->where(array('blog_id'=>123))->set(array('posted' => 1, 'time' => time()))->update('blog_posts');
     *
     * @param array|string $fields Array of field names (or a single string field name)
     * @param mixed        $value  Value that the field(s) should be set to 
     */
    public function set($fields, $value = NULL) {
        $this->_update_init('$set');
        if (is_string($fields)) {
            $this->_updates['$set'][$fields] = $value;
        } elseif (is_array($fields)) {
            foreach ($fields as $field => $value) {
                $this->_updates['$set'][$field] = $value;
            }
        }
        return $this;
    }

    /**
     * $this->mongo->where(array('blog_id'=>123))->unset('posted')->update('blog_posts');
     * $this->mongo->where(array('blog_id'=>123))->set(array('posted','time'))->update('blog_posts');
     * 
     * @param array|string $fields Array of field names (or a single string field name) to be unset
     */
    public function unset_field($fields) {
        $this->_update_init('$unset');
        if (is_string($fields)) {
            $this->_updates['$unset'][$fields] = 1;
        } elseif (is_array($fields)) {
            foreach ($fields as $field) {
                $this->_updates['$unset'][$field] = 1;
            }
        }
        return $this;
    }

    /**
     * $this->mongo->where(array('blog_id'=>123))->addtoset('tags', 'php')->update('blog_posts');
     * $this->mongo->where(array('blog_id'=>123))->addtoset('tags', array('php', 'codeigniter', 'mongodb'))->update('blog_posts');
     *
     * @param string       $field  Name of the field
     * @param string|array $values Value of the field(s)
     */
    public function addtoset($field, $values) {
        $this->_update_init('$addToSet');
        if (is_string($values)) {
            $this->_updates['$addToSet'][$field] = $values;
        } elseif (is_array($values)) {
            $this->_updates['$addToSet'][$field] = array('$each' => $values);
        }
        return $this;
    }

    /**
     * $this->mongo->where(array('blog_id'=>123))->push('comments', array('text'=>'Hello world'))->update('blog_posts');
     * $this->mongo->where(array('blog_id'=>123))->push(array('comments' => array('text'=>'Hello world')), 'viewed_by' => array('Alex')->update('blog_posts');
     *
     * @param array|string $fields Array of field names (or a single string field name)
     * @param mixed        $value  Value of the field(s) to be pushed into an array or object
     */
    public function push($fields, $value = array()) {
        $this->_update_init('$push');
        if (is_string($fields)) {
            $this->_updates['$push'][$fields] = $value;
        } elseif (is_array($fields)) {
            foreach ($fields as $field => $value) {
                $this->_updates['$push'][$field] = $value;
            }
        }
        return $this;
    }

    /**
     * $this->mongo->where(array('blog_id'=>123))->pop('comments')->update('blog_posts');
     * $this->mongo->where(array('blog_id'=>123))->pop(array('comments', 'viewed_by'))->update('blog_posts');
     *
     * @param string $field Name of the field to be popped
     */
    public function pop($field) {
        $this->_update_init('$pop');
        if (is_string($field)) {
            $this->_updates['$pop'][$field] = -1;
        } elseif (is_array($field)) {
            foreach ($field as $pop_field) {
                $this->_updates['$pop'][$pop_field] = -1;
            }
        }
        return $this;
    }

    /**
     * $this->mongo->pull('comments', array('comment_id'=>123))->update('blog_posts');
     *
     * @param string $field Name of the field
     * @param array  $value Array of identifiers to remove $field
     */
    public function pull($field = '', $value = array()) {
        $this->_update_init('$pull');
        $this->_updates['$pull'] = array($field => $value);
        return $this;
    }

    /**
     * $this->mongo->where(array('blog_id'=>123))->rename_field('posted_by', 'author')->update('blog_posts');
     *
     * @param string $old_name Name of the field to be renamed
     * @param string $new_name New name for $old_name
     */    
    public function rename_field($old_name, $new_name) {
        $this->_update_init('$rename');
        $this->_updates['$rename'][] = array($old_name => $new_name);
        return $this;
    }

    /**
     * $this->mongo->where(array('foo'=>'aaa'))->delete('foo');
     *
     * @param string $collection Name of the collection
     */
    public function delete($collection = '') {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        try {
            $this->_collection->remove($this->_wheres, array($this->_query_safety => TRUE, 'justOne' => TRUE));
            $this->_clear($this->_collection->getName(), 'delete');
            return TRUE;
        } catch (MongoCursorException $exception) {
            throw new Exception('Delete of data into MongoDB failed: '.$exception->getMessage());
        }
    }

    /**
     * $this->mongo->where(array('foo'=>'aaa'))->delete_all('foo');
     *
     * @param string $collection Name of the collection
     */    
    public function delete_all($collection = '') {
        if (!empty($collection)) {
            $this->getCollection($collection);
        }
        if (isset($this->_wheres['_id']) && !($this->_wheres['_id'] instanceof MongoId)) {
            $this->_wheres['_id'] = new MongoId($this->_wheres['_id']);
        }
        try {
            $this->_collection->remove($this->_wheres, array($this->_query_safety => TRUE, 'justOne' => FALSE));
            $this->_clear($this->_collection->getName(), 'delete_all');
            return TRUE;
        } catch (MongoCursorException $exception) {
            throw new Exception('Delete of data into MongoDB failed: ' . $exception->getMessage());
        }
    }

    /**
     * $this->mongo->date($timestamp);
     *
     * @param int|null $timestamp A unix timestamp (or NULL to return a MongoDate relative to time()
     */    
    public function date($timestamp = NULL) {
        if ($timestamp === NULL) {
            return new MongoDate();
        }
        return new MongoDate($timestamp);
    }

    /**
     * $this->mongo->int64($number);
     *
     * @param int|null $number
     */    
    public function int64($number = NULL) {
        if ($number === NULL) {
            return new MongoInt64();
        }
        return new MongoInt64($number);
    }

    /**
     * $this->mongo->id($id);
     *
     * @param MongoId|null|string $id MongoId _id
     */
    public function id($id = NULL) {
        if (!($id instanceof MongoId)) {
            return new MongoId($id);
        }
        return $id;
    }

    /**
     * Reset the class variables to default settings.
     * 
     * @access private
     * @return void
     */
    private function _clear($collection, $action) {
        $this->_query_log = array(
                                  'collection'  => $collection,
                                  'action'      => $action,
                                  'wheres'      => $this->_wheres,
                                  'updates'     => $this->_updates,
                                  'selects'     => $this->_selects,
                                  'limit'       => $this->_limit,
                                  'offset'      => $this->_offset,
                                  'sorts'       => $this->_sorts
                                );
        $this->_selects = array();
        $this->_updates = array();
        $this->_wheres = array();
        $this->_limit = 999999;
        $this->_offset = 0;
        $this->_sorts = array();
    }

    private function _where_init($field) {
        if (!isset($this->_wheres[$field])) {
            $this->_wheres[$field] = array();
        }
    }

    private function _update_init($field = '') {
        if (!isset($this->_updates[$field])) {
            $this->_updates[$field] = array();
        }
    }
}
