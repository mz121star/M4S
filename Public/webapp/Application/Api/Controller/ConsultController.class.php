<?php
namespace Api\Controller;

//----------------------------------
// ConsultController,咨询列表
//----------------------------------
class ConsultController extends BaseController {

/**
* 新增/编辑咨询分类
* POST方法  api_address http://your-server-name/public/api.php/Consult/UpdateNewsCategory
*  @param          string id           GUID      新增时为空，修改时不为空
*  @param 【必填】 int createuser      创建用户  新增时默认是当前用户
*  @param 【必填】 string creatdate    创建日期  格式：YYYY-MM-DD 新增时默认为当前日期
*  @param          int modifyuser      修改用户  新增时默认是创建用户，修改时候必填
*  @param          string modifydate   修改日期  格式：YYYY-MM-DD 修改是默认是当前日期
*  @param          int    status       0启用，1不启用。 默认为0
*  @param          int    sort         排序字段
*  @param          string remark       标记              需要UrlEnCode
*  @param  【必填】string name         名称              需要UrlEnCode
*  @return Json 返回JSON数据{<br>
*      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
*      errorMessage 错误信息.
* }
*/
public function UpdateNewsCategory_POST(){
    $data=array();
    $result=array();
    $data['id']=I('post.id');
    $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);
    $data['status']=I('post.status');
    $data['sort']=I('post.sort');
    $data['remark']=urldecode(I('post.remark'));
    $data['name']=urldecode(I('post.name'));
    $model=M('news_category');

    //ID为空表示新增
    if(empty($data['id'])||$data['id']==null||$data['id']==0){
    $data['id']=to_guid_string(time());
    $data['sort']=0;
    $model->data($data)->add();
    $result['isSuccess']='true';
    $result['errorMessage']='增加成功';
    }else{
        $count=$model->where("id='".$data['id']."'")->count();
    if($count<=0){
        $result['isSuccess']='false';
        $result['errorMessage']='修改失败，数据库中不存在该条数据';
    }
    else{
        $model->where("id='".$data['id']."'")->save($data);
        $result['isSuccess']='true';
        $result['errorMessage']='修改成功';
    }
    }
    $this->response($result,'json');
}

/**
*  咨询分类【删除咨询分类】
* GET方法  api_address http://your-server-name/public/api.php/Consult/deleteNewsCategory
* @param  【必填】      string id           id
* @return Json 返回数据{<br>
*      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
*      errorMessage 错误信息，删除成功时错误信息为空。
* }
* }
*/
public function deleteNewsCategory_get(){
    $data=array();
    $result=array();
    $model=M('news_category');
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
* 咨询分类列表
* Get方法  api_address http://your-server-name/public/api.php/Consult/findNewsCategoryList?status=0
* @return Json 返回数据{<br>
*      list[{<br>
*          id              id      <br>
*          name            名称    <br>
*      }]<br>
* }
*/
public function findNewsCategoryList_get(){
    $data=array();
    $result=array();
    $model=M('news_category');
    $status=I('get.status');
    $name=strval(I('get.name'));
    $pagesize = I('get.pagesize');
    $pagenum=I('get.pagenum');
    if(!empty($name)){
        $data['name']=array('like','%'.$name.'%');
    }
    if(!empty($status)){
        $data['status']=$status;
    }
    $data['deleted']=0;
    $r=$model->where($data)->page($pagenum,$pagesize)->select();
    $result['list']=array();

    foreach($r as $v){
        $i['id']=$v['id'];
        $i['name']=$v['name'];
        $i['status']=$v['status'];
        $i['remark']=$v['remark'];
        array_push($result['list'],$i);
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

public function NewsCategoryForDorpdownList_get(){
    $data=array();
    $result=array();
    $model=M('news_category');
    $status=I('get.status');
    if(empty($status)||$status==null||$status=='0'){
        $data['deleted']=0;
        $r=$model->where($data)->select();
    }
    $result['list']=array();

    foreach($r as $v){
        $i['id']=$v['id'];
        $i['name']=$v['name'];
    array_push($result['list'],$i);
    }
    $this->response($result,'json');
}

/**
* 新增/编辑/审核资讯     FS017
* POST方法  api_address http://your-server-name/public/api.php/Consult/UpdateNews
*  @param          string id           GUID      新增时为空，修改时不为空
*  @param 【必填】 int createuser      创建用户  新增时默认是当前用户
*  @param 【必填】 string creatdate    创建日期  格式：YYYY-MM-DD 新增时默认为当前日期
*  @param          int modifyuser      修改用户  新增时默认是创建用户，修改时候必填
*  @param          string modifydate   修改日期  格式：YYYY-MM-DD 修改是默认是当前日期
*  @param          int    status       0启用，1不启用。 默认为1
*  @param          int    sort         排序字段
*  @param          string content      内容              需要UrlEnCode
*  @param  【必填】string remark       标记              需要UrlEnCode
*  @param  【必填】string name         名称              需要UrlEnCode
*  @param  【必填】int  category       分类              需要UrlEnCode
*  @param  【必填】string  desc        简介              需要UrlEnCode
*  @return Json 返回JSON数据{<br>
*      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
*      errorMessage 错误信息.
* }
*/
public function UpdateNews_POST(){
    $data=array();
    $result=array();
    $data['id']=I('post.id');
    $data['num']=I('post.num');
    $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);

    $data['status']=I('post.status');
    $data['sort']=I('post.sort');
    $data['note']=urldecode(I('post.note'));
    $data['name']=urldecode(I('post.name'));
    $data['desc']=urldecode(I('post.desc'));
    $data['content']=urldecode(I('content'));
    $data['news_category_id']=urldecode(I('post.category'));
    $data['view_count']=I('post.view_count');

    $data['groups']=I('post.groups');
    $data['company']=I('post.company');
    $data['validateTime']=I('post.validateTime');

    $model=M('news');
    if(empty($data['status'])){
        $data['status']=0;
    }

    if(!empty($data['news_category_id'])){
        $data['news_category_id']=M('news_category')->where("id='".$data['news_category_id']."'")->getfield("int_id");
    }

    //ID为空表示新增
    if(empty($data['id'])||$data['id']==null){
        $num='INF'.strval(date('Ym',time())).str_pad(strval($model->count()),4,'0',STR_PAD_LEFT);
        $data['num']=$num;
        $data['id']=to_guid_string(time());
        $model->data($data)->add();

        $result['isSuccess']='true';
        $result['errorMessage']='增加成功';
    }else{
        $count=$model->where("id='".$data['id']."'")->count();
//$this->response($model->getlastSql(),'json');
        if($count<=0){
            $result['isSuccess']='false';
            $result['errorMessage']='修改失败，数据库中不存在该条数据';
        }
        else{
            $model->where("id='".$data['id']."'")->save($data);
            $result['isSuccess']='true';
            $result['errorMessage']='修改成功';
        }
    }
    $this->response($result,'json');
}

/**
* FS017 资讯管理【删除咨询】
* GET方法  api_address http://your-server-name/public/api.php/Consult/deleteConsult
* @param  【必填】      string id           id
* @return Json 返回数据{<br>
*      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
*      errorMessage 错误信息，删除成功时错误信息为空。
* }
* }
*/
public function DeleteNews_get(){
    $data=array();
    $result=array();
    $model=M('news');
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
* FS017 咨询管理【查看咨询明细】
* Get方法  api_address http://your-server-name/public/api.php/Consult/detailNews
* @param string id           id
* @return Json 返回数据{<br>
*      detail{<br>
*          status          <br>
*          sort            排序字段<br>
*          content         内容     <br>
*          remark          标记     <br>
*          name            名称    <br>
*          category        分类<br>
*          desc            简介     <br>
*          view_count      浏览次数<br>
*      }<br>
* }
*/
public function DetailNews_get(){
    $data=array();
    $result=array();
    $model=M('news');
    $data['id']=I('get.id');

    if(empty($data['id'])||$data['id']==null){
        $result['isSuccess']='false';
        $result['errorMessage']='ID不能为空';
    }else{
        $r=$model->where("id='".$data['id']."'")->select();

        $result['detail']["num"]=$r[0]["num"];
        $result['detail']["id"]=$r[0]["id"];

        $result['detail']["status"]=$r[0]["status"];
        $result['detail']["note"]=$r[0]["note"];
        $result['detail']["name"]=$r[0]["name"];
        $result['detail']["desc"]=$r[0]["desc"];
        $result['detail']["content"]=$r[0]["content"];
        $result['detail']["category"]=M('news_category')->where("int_id=".$r[0]["news_category_id"])->getfield("id");

        $result['detail']["groups"]=$r[0]["groups"];
        $result['detail']["company"]=$r[0]["company"];

        $result['detail']["category"]=M('news_category')->where("int_id=".$r[0]["news_category_id"])->getfield("id");
        $result['detail']["validateTime"]=$r[0]["validateTime"];
    }
    $this->response($result,'json');
}

public function SetArea_POST(){
$data=array();
$result=array();
$data['id']=I('post.id');
$area=urldecode(I('post.area'));
$model=M('news');
$tt=json_decode($area);
$id_arr=array();
$m_data=array();
foreach($tt->list as $k){
$id_arr[]=$k->id;
$arr=array();
$arr['news_id']=$data['id'];
$arr['area_id']=$k->id;
$m_data[]=$arr;
}
$ids=implode(',',$id_arr);
$data['area']=$ids;
insertMiddleTable('news_id',$m_data,'news_area','news_id','area_id');

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
$model=M('news');
$tt=json_decode($brand);
$id_arr=array();
$m_data=array();
foreach($tt->list as $k){
$id_arr[]=$k->id;
$arr=array();
$arr['news_id']=$data['id'];
$arr['brand_id']=$k->id;
$m_data[]=$arr;
}
$ids=implode(',',$id_arr);
$data['brand']=$ids;
insertMiddleTable('news_id',$m_data,'news_brand','news_id','brand_id');

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
$model=M('news');
$id=I('get.id');
$r=$model->where("id='".$id."'")->getfield("area");
$result['list']=explode(',',$r);
$this->response($result,'json');
}

public function findbrand_get(){
$result=array();
$model=M('news');
$id=I('get.id');
$r=$model->where("id='".$id."'")->getfield("barand");
$result['list']=explode(',',$r);
$this->response($result,'json');
}


/**
* FS017 资讯管理【查找咨询】
* Get方法  api_address http://your-server-name/public/api.php/Consult/FindNews?name='test'&status=0&category='IBM'
* @param string name           名称          需要 URLENCODE
* @param string category        分类
* @param string status         状态
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
public function FindNews_get(){
$data=array();
$result=array();
$model=M('news');
$category=I('get.category');
$name=urldecode(I('get.name'));
$status=I('get.status');
$pagesize = I('get.pagesize');
$pagenum=I('get.pagenum');
$s4=I('get.type');
if(!empty($category)){
$data['news_category_id']=M('news_category')->where("id='".$category."'")->getfield('int_id');
}
if(!empty($name)){
$data['name']=array('like','%'.$name.'%');
}
if(!empty($status)){
$data['status']=$status;
}else{
$data['status']=0;
}
$data['deleted']=0;

$r=$model->where($data)->page($pagenum,$pagesize)->select();
$result['list']=array();
foreach($r as $t=>$v){
$k['id']=$v['id'];
$k['name']=$v['name'];
$k['category']=M('news_category')->where("int_id=".$v['news_category_id'])->getfield("id");
$k['categoryName']=M('news_category')->where("int_id=".$v['news_category_id'])->getfield("name");
if($v['status']==0){
$k['statusName']='未发布';
}elseif($v['status']==1){
$k['statusName']='已发布';
}elseif($v['status']==2){
$k['statusName']='拒绝';
}elseif($v['status']==3){
$k['statusName']='撤销';
}
$k['validateTime']=$v['validateTime'];
$k['desc']=$v['desc'];
$k['num']=$v['num'];
$k['view_count']=$v['view_count'];
$k['line']=$t+1;
array_push($result['list'],$k);
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

}
?>