<?php
namespace Api\Controller;

use Org\Util\String;

//----------------------------------
// 4SAction
//----------------------------------
class FoursController extends BaseController {

    /**
     * 4S店列表接口
     * GET方法 api_address http://your-server-name/api.php/Home/fours/list?pagesize=2&pagenum=2
     * @param   string  pagesize
     * @param   string  pagenum
     * @return json
     */
    public function list_get(){
        $pagesize = I('get.pagesize');
        $pagenum=I('get.pagenum');
        $result=array();
        $data['deleted']=0;
        $data['status']=0;
        $type=I('get.type');
        if($type==1){
            $model=M('4s_group');
        }else{
            $model=M('4s');
        }
        if(empty($pagesize)||empty($pagenum)){
            $r=$model->where($data)->select();
        }else{
            $r=$model->where($data)->page(intval($pagenum),intval($pagesize))->select();
        }
        $result['list']=array();
        foreach($r as $v){
            $s['id']=$v['id'];
            if($type==1){
                $s['type']=1;
                $s['typeName']='4S店集团';
            }
            else{
                $s['type']=0;
                $s['typeName']='4S店';
            }
            $s['address']=$v['addres'];
            $s['name']=$v['name'];
            $s['servicebegintime']=$v['servicebegintime'];
            $s['serviceendtime']=$v['serviceendtime'];
            array_push($result['list'],$s);
        }
        $result['pagenum']=$pagenum;
        $count=$model->where($data)->count();
        if(intval($count)%intval($pagesize)!=0){
            $result['pagecount']=floor((intval($count)/intval($pagesize)))+1;
        }else{
            $result['pagecount']=floor((intval($count)/intval($pagesize)));
        }
        $this->response($result, 'json');
    }
    /**
     * 4S店下拉列表列表接口
     * GET方法 api_address http://your-server-name/api.php/fours/CompaniesForDropdownlist
     * @param   string  pagesize
     * @param   string  pagenum
     * @return json
     */
    public function CompaniesForDropdownlist_get(){
        $model = M('4s');
        $result=array();
        $level=I('get.level');
        $userid=I('get.userid');
        $pcompany=I('get.company');
        $company=M('Admin')->where("ID='".$userid."'")->getfield('company');

        if($level==2){
            $data['company']=$company;
        }
        if($level==1){
            $data['id']=$company;
        }
        if(!empty($pcompany)){
            $data['company']=$pcompany;
        }
        if(empty($pagesize)||empty($pagenum)){
            $r=$model->where($data)->select();
        }
        $result['list']=array();
        foreach($r as $v){
            $k['id']=$v['id'];
            $k['name']=$v['name'];
            array_push($result['list'],$k);
        }

        $this->response($result, 'json');
    }

    /**
     * 4S店集团下拉列表列表接口
     * GET方法 api_address http://your-server-name/api.php/fours/GroupsForDropdownlist
     * @param   string  pagesize
     * @param   string  pagenum
     * @return json
     */
    public function GroupsForDropdownlist_get(){
        $level=I('get.level');
        $userid=I('get.userid');

        $company=M('Admin')->where("ID='".$userid."'")->getfield('company');

        if($level==2){
            $data['id']=$company;
        }
        if($level==1){
            $data['id']=M('4s')->where("id='".$company."'")->getField('company');
        }
        $date['deleted']=0;
        $data['status']=0;
        $model = M('4s_group');
        $result=array();
        if(empty($pagesize)||empty($pagenum)){
            $r=$model->where($data)->select();
        }
        $result['list']=array();
        foreach($r as $v){
            $k['id']=$v['id'];
            $k['name']=$v['name'];
            array_push($result['list'],$k);
        }

        $this->response($result, 'json');
    }


    /**
     *  创建4S店接口 FS010
     *  POST方法   api_address http://your-server-name/api.php/Fours/Update4s
     *  @param          int num          客户编码
     *  @param          string id           GUID      新增时为空，修改时不为空
     *  @param 【必填】 int createuser      创建用户  新增时默认是当前用户
     *  @param 【必填】 string creatdate    创建日期  格式：YYYY-MM-DD 新增时默认为当前日期
     *  @param          int modifyuser      修改用户  新增时默认是创建用户，修改时候必填
     *  @param          string modifydate   修改日期  格式：YYYY-MM-DD 修改是默认是当前日期
     *  @param          int    status       0启用，1不启用。 默认为0
     *  @param          int    sort         排序字段
     *  @param          string remark       备注              需要UrlEnCode
     *  @param  【必填】string name         名称              需要UrlEnCode
     *  @param  【必填】string telephone    客服电话
     *  @param  【必填】string address      地址              需要UrlEnCode
     *  @param          int    consultant   顾问
     *  @param          string contactuser  联系人            需要UrlEnCode
     *  @param          string contactphone 联系人电话
     *  @param  【必填】   int type         类型  (0:4S店；1：4S店集团）默认为0
     *  @return Json 类型{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，注册成功时错误信息为空。
     * }
     *
     */
    public function Update4s(){
        $type=I('post.type');
        $data=array();
        $data['id']=I('post.id');
        $data['num']=I('post.num');
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);
        $data['status']=I('post.status');
        $data['sort']=I('post.sort');
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));
        $telephone=I('post.telephone');
        $data['addres']=urldecode(I('post.address'));
        $consultant=I('post.consultant');
        $data['contact_user']=urldecode(I('post.contactuser'));
        $data['num']=I('post.num');

        $data['email']=urldecode(I('post.email'));
        $data['servicebegintime']=urldecode(I('post.servicebegintime'));
        $data['serviceendtime']=urldecode(I('post.serviceendtime'));

        $contacttelephone=I('post.contactphone');
        if($type==1){
            $model=M('4s_group');
            $data['contact_telephone']=$contacttelephone;
        }else{
            $model=M('4s');
            $data['telephone']=$telephone;
            $data['company']=urldecode(I('post.parentCustomer'));
            $data['default_consultant']=$consultant;
            $data['contant_telephone']=$contacttelephone;
        }

        if(empty($data['id'])){
            $data['deleted']=0;
            $data['status']=0;
            $data['id']=to_guid_string(time());
            $model->data($data)->add();
        }else{
            $model->where("id='".$data['id']."'")->save($data);
        }
        $result['isSuccess']='0';
        $this->response($result,'json');
    }


    /**
     * 客户管理【删除客户】 FS009
     * GET方法  api_address http://your-server-name/public/api.php/Fours/delete
     * @param   【必填】  string id           id
     * @param  【必填】   int type         类型  (0:4S店；1：4S店集团）默认为0
     * @return Json 类型{<br>
     *      isSuccess：是否操作 成功，true：删除成功；FALSE：删除失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。
     * }
     */
    public function delete_get(){
        $data=array();
        $result=array();
        $data['id']=I('get.id');
        $type=I('get.type');
        if($type==1){
            $model=M('4s_group');
        }else{
            $model=M('4s');
        }
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='id不能为空';
        }else{
            $data['status']=1;
            $data['deleted']=1;
            $model->where("id='".$data['id']."'")->save($data);
            //$this->response($model->getlastsql(),'json');
            $result['isSuccess']='true';
        }
        $this->response($result,'json');
    }

    /**
     * 客户管理【查看客户】 FS009
     * Get方法  api_address http://your-server-name/public/api.php/Fours/detail
     * @param   【必填】  string id           id
     * @param  【必填】   int type         类型  (0:4S店；1：4S店集团）默认为0
     * @return Json 类型{<br>
     *      detail{<br>
     *           num          客户编码          <br>
     *          id           GUID               <br>
     *          status       0启用，1不启用     <br>
     *          sort         排序字段           <br>
     *          remark       备注               <br>
     *          name         名称               <br>
     *          telephone    客服电话           <br>
     *          address      地址               <br>
     *          default_consultant   顾问               <br>
     *          contact_user  联系人             <br>
     *          contact_phone 联系人电话
     *      }<br>
     * }
     */
    public function detail_get(){
        $data=array();
        $result=array();
        $data['id']=I('get.id');
        $type=I('get.type');
        if($type==1){
            $model=M('4s_group');
        }else{
            $model=M('4s');
        }
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("id='".$data['id']."'")->select();
            $result['detail']=$r[0];
            $result['detail']['type']=$type==1?1:0;
            $result['detail']['parentCustomer']=$r[0]['company'];

        }
        $this->response($result,'json');
    }

    public function SetArea_POST(){



        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $area=urldecode(I('post.area'));
        $type=I('post.type');
        if($type==1){
            $model=M('4s_group');
        }else{
            $model=M('4s');
        }
        $tt=json_decode($area);

        $area1="";
        //$this->response($tt['list'],'json');
        /*foreach($tt->list as $k){
            $area1=$area1.$k->id.",";
        }*/
        $id_arr=array();
        $m_data=array();
        foreach($tt->list as $k){
            $id_arr[]=$k->id;
            $arr=array();
            $arr['group_id']=$data['id'];
            $arr['area_id']=$k->id;
            $m_data[]=$arr;
        }
        $ids=implode(',',$id_arr);

        $data['area']=$ids;
        if($type==1){
            insertMiddleTable('group_id',$m_data,'group_area','group_id','area_id');
        }else{
            insertMiddleTable('group_id',$m_data,'4s_area','4s_id','area_id');
        }
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $model->where("id='".$data['id']."'")->save($data);
            //$this->response($model->getlastsql(),'json');
        }

        $this->response($result,'json');
    }

    public function findbynode_get(){
        $result=array();

        $id=I('get.id');
        $type=I('get.type');
        if($type==1){
            $model=M('4s_group');
        }else{
            $model=M('4s');
        }
        $r=$model->where("id='".$id."'")->getfield("area");
        $result['list']=explode(',',$r);
        $this->response($result,'json');
    }

    public function SetBrand_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $brand=urldecode(I('post.brand'));
        $type=I('post.type');
        if($type==1){
            $model=M('4s_group');
        }else{
            $model=M('4s');
        }
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
            $arr['group_id']=$data['id'];
            $arr['brand_id']=$k->id;
            $m_data[]=$arr;
        }
        $ids=implode(',',$id_arr);

        $data['brand']=$ids;
        if($type==1){
            insertMiddleTable('group_id',$m_data,'group_brand','group_id','brand_id');
        }else{
            insertMiddleTable('group_id',$m_data,'4s_brand','4s_id','brand_id');
        }
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $model->where("id='".$data['id']."'")->save($data);
        }
        $this->response($result,'json');
    }

    public function findbrand_get(){
        $result=array();

        $id=I('get.id');
        $type=I('get.type');
        if($type==1){
            $model=M('4s_group');
        }else{
            $model=M('4s');
        }
        $r=$model->where("id='".$id."'")->getfield("brand");
        $result['list']=explode(',',$r);
        $this->response($result,'json');
    }
}