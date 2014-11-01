<?php
namespace Api\Controller;

/**
 * @Category PHP
 * @Package  API/Controller
 * Created by PhpStorm.
 * @author: felix
 * Date: 14-9-26
 * 用来提供与活动相关的接口
 */
class ActivityController extends BaseController {


    /**
     * 新增/编辑活动
     * POST方法  api_address http://your-server-name/public/api.php/Activity/UpdateActivity
     *  @param          string id           GUID      新增时为空，修改时不为空
     *  @param 【必填】 int createuser      创建用户  新增时默认是当前用户
     *  @param 【必填】 string creatdate    创建日期  格式：YYYY-MM-DD 新增时默认为当前日期
     *  @param          int modifyuser      修改用户  新增时默认是创建用户，修改时候必填
     *  @param          string modifydate   修改日期  格式：YYYY-MM-DD 修改是默认是当前日期
     *  @param          int    status       0启用，1不启用。 默认为0
     *  @param          int    sort         排序字段
     *  @param          string content      内容              需要UrlEnCode
     *  @param  【必填】string remark       标记              需要UrlEnCode
     *  @param  【必填】string name         名称              需要UrlEnCode
     *  @param            int  category     分类
     *  @param            int  brand     品牌              需要UrlEnCode
     *  @param            int  4s        4S店
     *  @param          string tpl_rule     规则            需要UrlEnCode
     *  @return Json 返回JSON数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息.
     * }
     */
    public function UpdateActivity_POST(){
        $data=array();
        $result=array();
        $data['num']=I('post.num');
        $data['id']=I('post.id');
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);

        $data['status']=I('post.status');
        $data['sort']=I('post.sort');
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));
        $data['desc']=urldecode(I('post.desc'));
        $data['activity_datetime']=I('post.activity_datetime');
        $data['begin_datetime']=I('post.begintime');
        $data['end_datetime']=I('post.endtime');
        $data['upper_num']=I('post.upper_num');
        $data['lower_num']=I('post.lower_num');
        $data['activity_category_ID']=I('post.activity_category_id');
        $data['content']=urldecode(I('post.content'));

        $data['groups']=I('post.groups');
        $data['company']=I('post.company');
        $data['validatetime']=I('post.validatetime');
        $model=M('actitiy_category');
        if(empty($data['status'])){
            $data['status']=0;
        }
        //ID为空表示新增
        if(empty($data['id'])||$data['id']==null){
            $num='ACT'.strval(date('Ym',time())).str_pad(strval($model->count()),4,'0',STR_PAD_LEFT);
            $data['num']=$num;
            $data['id']=to_guid_string(time());
            $model->data($data)->add();
            $result['isSuccess']='true';
            $result['errorMessage']='增加成功';
            $this->response($model->getlastsql(),'json');
        }else{
            $count=$model->where("id='".$data['id']."'")->count();
            //$this->response($model->getlastSql(),'json');
            if($count<=0){
                $result['isSuccess']='false';
                $result['errorMessage']='修改失败，数据库中不存在该条数据';
            }
            else{
                $model->where(" id='".$data['id']."'")->save($data);
                $this->response($model->getlastsql(),'json');
                $result['isSuccess']='true';
                $result['errorMessage']='修改成功';
            }
        }

        $this->response($result,'json');
    }

    /**
     * FS018 活动管理【删除活动】
     * GET方法  api_address http://your-server-name/public/api.php/Activity/DeleteActivity
     * @param  【必填】      string id           id
     * @return Json 返回数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。
     * }
     * }
     */
    public function DeleteActivity_get(){
        $data=array();
        $result=array();
        $model=M('actitiy_category');
        $data['id']=I('get.id');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $data['deleted']=1;
            $model->where("id='".$data['id']."'")->save($data);

            $result['isSuccess']='true';
        }
        $this->response($result,'json');
    }

    /**
     * FS018 活动管理【查看活动明细】鿴
     * Get方法  api_address http://your-server-name/public/api.php/Activity/DetailActivity
     * @param string id           id
     * @return Json 返回数据{<br>
     *      detail{<br>
     *          status          <br>
     *          sort            排序字段<br>
     *          content         内容     <br>
     *          remark          标记     <br>
     *          name            名称    <br>
     *          category        分类<br>
     *          brand           品牌     <br>
     *          4s              4S店<br>
     *          tpl_rule        规则      <br>
     *          id             id<br>
     *      }<br>
     * }
     */
    public function DetailActivity_get(){
        $data=array();
        $result=array();
        $model=M('actitiy_category');
        $data['id']=I('get.id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("id='".$data['id']."'")->select();
            $result['detail']["num"]=$r[0]['num'];
            $result['detail']["id"]=$r[0]['id'];
            $result['detail']["status"]=$r[0]['status'];
            $result['detail']['remark']=$r[0]['remark'];
            $result['detail']["name"]=$r[0]['name'];
            $result['detail']["desc"]=$r[0]['desc'];
            $result['detail']["activity_datetime"]=$r[0]['activity_datetime'];
            $result['detail']['begintime']=$r[0]['begin_datetime'];
            $result['detail']['endtime']=$r[0]['end_datetime'];
            $result['detail']['upper_num']=$r[0]['upper_num'];
            $result['detail']['lower_num']=$r[0]['lower_num'];
            $result['detail']['view_count']=$r[0]['view_count'];
            $result['detail']['activity_category_ID']=$r[0]['activity_category_id'];
            $result['detail']["content"]=$r[0]['content'];
            $result['detail']['groups']=$r[0]['groups'];
            $result['detail']['company']=$r[0]['company'];
            $result['detail']['validatetime']=$r[0]['validatetime'];

        }
        $this->response($result,'json');
    }


    /**
     * FS018活动 【查找活动】
     * Get方法  api_address http://your-server-name/public/api.php/Activity/FindActivity?name='test'&status=0&category='IBM'
     * &barnd=1&4s=1
     * @param string name           名称          需要 URLENCODE
     * @param string category        分类
     * @param string status         状态
     * @param string brand         品牌
     * @param string 4S            4S
     * @return Json 返回数据{<br>
     *      list[{<br>
     *          name            名称    <br>
     *          category        分类<br>
     *          brand           品牌     <br>
     *          4s              4S店<br>
     *          tpl_rule        规则      <br>
     *      }]<br>
     * }
     */
    public function FindActivity_get(){
        $data=array();
        $result=array();
        $model=M('actitiy_category');
        $category=I('get.category');
        $name=urldecode(I('get.name'));
        $status=I('get.status');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');
        if(!empty($category)){
            $data['category']=$category;
        }
        if(!empty($name)){
            $data['name']=$name;
        }
        if(!empty($name)){
            $data['name']=array('like','%'.$name.'%');
        }
        if(!empty($status)){
            $data['status']=$status;
        }
        $data['deleted']=0;
        $level=I('get.level');
        $userid=I('get.userid');
        $company=M('Admin')->where("ID='".$userid."'")->getfield('company');

        //集团客户能看4S店和集团的新闻
        if($level==2){
            $data['groups']=$company;
        }
        //4S店能看4S店的新闻
        if($level==1){
            $data['$company']=$company;
        }
        $rr=$model->where($data)->page($pagenum,$pagesize)->select();
        //$this->response($model->getlastsql(),'json');
        $result['list']=array();
        foreach($rr as $k=>$v){
            $s['id']=$v['id'];
            $s['num']=$v['num'];
            $s['name']=$v['name'];
            $s['begintime']=$v['begin_datetime'];
            $s['end']=$v['end_datetime'];
            $s['company']=$v['company'];
            $s['companyName']=M('4s')->where("id='".$v['company']."'")->getfield("name");
            $s['groups']=$v['groups'];
            $s['groupsname']=M('4s_group')->where("id='".$v['groups']."'")->getfield("name");
            $s['line']=$k+1;
            $s['status']=$v['status'];
            array_push($result['list'],$s);
        }
        $result['pagenum']=$pagenum;
        $count=$model->where($data)->count();
        if(intval($count)%intval($pagesize)!=0){
            $result['pagecount']=floor((intval($count)/intval($pagesize)))+1;
        }else{
            $result['pagecount']=floor((intval($count)/intval($pagesize)));
        }
        $this->response($result,'json');
    }

    public function SetArea_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $area=urldecode(I('post.area'));
        $model=M('actitiy_category');
        $tt=json_decode($area);

        $id_arr=array();
        $m_data=array();
        foreach($tt->list as $k){
            $id_arr[]=$k->id;
            $arr=array();
            $arr['activity_id']=$data['id'];
            $arr['area_id']=$k->id;
            $m_data[]=$arr;
        }
        $ids=implode(',',$id_arr);
        $data['area']=$ids;
        insertMiddleTable('activity_id',$m_data,'activity_area','activity_id','area_id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $model->where("id='".$data['id']."'")->save($data);
        }
        $this->response($result,'json');
    }

    public function SetBrand_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $brand=urldecode(I('post.brand'));
        $model=M('actitiy_category');
        $tt=json_decode($brand);
        /*$brand1="";

        foreach($tt->list as $k){
            $brand1=$brand1.$k->id.",";
        }
        $data['brand']=$brand1;*/
        $id_arr=array();
        $m_data=array();
        foreach($tt->list as $k){
            $id_arr[]=$k->id;
            $arr=array();
            $arr['activity_id']=$data['id'];
            $arr['brand_id']=$k->id;
            $m_data[]=$arr;
        }
        $ids=implode(',',$id_arr);
        $data['brand']=$ids;
        insertMiddleTable('activity_id',$m_data,'activity_brand','activity_id','brand_id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $model->where("id='".$data['id']."'")->save($data);
        }
        $this->response($result,'json');
    }

    public function finderea_get(){
        $result=array();
        $model=M('actitiy_category');
        $id=I('get.id');
        $r=$model->where("id='".$id."'")->getfield("area");
        $result['list']=explode(',',$r);
        $this->response($result,'json');
    }

    public function findbrand_get(){
        $result=array();
        $model=M('actitiy_category');
        $id=I('get.id');
        $r=$model->where("id='".$id."'")->getfield("barand");
        $result['list']=explode(',',$r);
        $this->response($result,'json');
    }


    public function FindActivityJoin_get(){
        $data=array();
        $result=array();
        $model=M('activity_enroll');
        $category=I('get.id');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');
        if(!empty($category)){
            $data['activity_id']=M('actitiy_category')->where("id='".$category."'")->getfield("int_id");
        }
        $rr=$model->where($data)->page($pagenum,$pagesize)->select();
        //$this->response($model->getlastsql(),'json');
        $result['list']=array();
        foreach($rr as $k=>$v){
            $s['activity_id']=$v['activity_id'];
            $s['car_id']=$v['car_id'];
            $s['carNum']=M('car')->where("id=".$v['car_id'])->getfield("car_number");
            $s['line']=$k+1;
            $s['status']=$v['status'];
            array_push($result['list'],$s);
        }
        $result['pagenum']=$pagenum;
        $count=$model->where($data)->count();
        if(intval($count)%intval($pagesize)!=0){
            $result['pagecount']=floor((intval($count)/intval($pagesize)))+1;
        }else{
            $result['pagecount']=floor((intval($count)/intval($pagesize)));
        }
        $this->response($result,'json');
    }

    public function  UpdateActivityJoin_POST(){
        $result=array();
        $model=M('activity_enroll');
        $data['car_id']=I('post.car_id');
        $data['activity_id']=I('post.activity_id');
        $data['status']=I('post.status');
        $model->where("activity_id=".$data['activity_id']." and car_id=".$data['car_id'])->save($data);
        $result['isSuccess']='success';
        $this->response($result,'json');
    }

}
?>