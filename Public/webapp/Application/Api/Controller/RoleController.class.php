<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-26
 * Time: 9:31
 */

namespace Api\Controller;

class RoleController extends BaseController {
    /**
     * 新增/编辑角色  FS007/FS006角色管理【新增/编辑】角色
     * POST方法  api_address http://your-server-name/public/api.php/Role/CreateRole
     * @param           string(128)；     remark;         标记;       需要(URLENCODE)
     * @param           string(100)；     name;           名称;       需要(URLENCODE)
     * @param 【必填】  string(32)；      createuser;     创建者;
     * @param 【必填】  string(32)；      modify_user;    修改者;     新增时候和创建者相同
     * @param           string(32)；      id;             ID;
     * @param           int(11)；         sort;           排序;        默认为0
     * @param           int(1)；          status;         状态;  0 有效 1无效
     * @param           string(32)；      company;        所属4S店
     * @param           string(32)        group           所属集团
     * @param 【必填】  int               rolelevel      优先级        创建角色时需要增加角色的等级
     *  @return Json 返回JSON数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息.
     * }
     */
    public function UpdateRole_POST(){
        $data=array();
        $result=array();

        $data['id']=I('post.id'); //ID为空表表示新增
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);
        $data['status']=I('post.status');
        $data['sort']=I('post.sort');
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));
        $data['deleted']=0;//0 ʹ使用中 1 删除
        $data['company']=I('post.company');
        $data['group']=I('post.group');
        $data['role_level']=I('post.role_level');

        $model=M('role');
        if(empty($data['status'])){
            $data['status']=0;
        }
        if(empty($data['sort'])){
            $data['sort']=0;
        }
        if(!empty($data['group'])){
            $data['group']=M('4s_group')->where("id='".$data['group']."'")->getfield("int_id");
        }
        if(!empty($data['company'])){
            $data['company']=M('4s')->where("id='".$data['company']."'")->getfield("int_id");
        }
        //ID为空表示新增
        if(empty($data['id'])){
            $data['id']=to_guid_string(time());
            $result['isSuccess']=M('role')->data($data)->add();
            if($result['isSuccess']>0){
                $result['isSuccess']='0';
            }
            $result['errorMessage']='';
        }else{
            $count=$model->where("deleted=0  and id='".$data['id']."'")->count();
            if($count<=0){
                $result['isSuccess']='1';
                $result['errorMessage']='修改失败，数据库中不存在该条数据';
            }
            else{
                $model->where("deleted=0 and id='".$data['id']."'")->save($data);
                $result['isSuccess']='0';
                $result['errorMessage']='';
            }
        }
        $this->response($result,'json');
    }



    /**
     * FS006删除角色 ,同时也删除该角色关联的功能权限
     * GET方法  api_address http://your-server-name/public/api.php/Role/delete
     * @param  【必填】      string id           ID
     * @return Json 返回数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。
     * }
     * }
     */
    public function delete_get(){
        $data=array();
        $result=array();
        $model=M('role');
        $data['id']=I('get.id');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $int_id=$model->where("id='".$data['id']."'")->getfield("int_id");
            $data['deleted']=1;
            $model->where("id='".$data['id']."'")->save($data);
            M("access")->where("role_id=".$int_id)->delete();
            $result['isSuccess']='true';
        }
        $this->response($result,'json');
    }

    /**
     * FS006角色管理【查看角色明细】鿴
     * Get方法  api_address http://your-server-name/public/api.php/Role/detail
     * @param string ID           ID
     * @return Json 返回数据{<br>
     *      detail{<br>
     *          remark         标记<br>
     *          name           名称<br>
     *          ID             ID<br>
     *          company        4s店<br>
     *          group          集团<br>
     *          role_level     优先级<br>
     *      }<br>
     * }
     */
    public function detail_get(){
        $data=array();
        $result=array();
        $model=M('role');
        $data['id']=I('get.id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='1';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("deleted=0 and id='".$data['id']."'")->select();
            $result['detail']['id']=$r[0]['id'];
            $result['detail']['name']=$r[0]['name'];
            $result['detail']['remark']=$r[0]['remark'];
            if(!empty($r[0]['company'])&&intval($r[0]['company'])>0){

                $company=getcompanyid($r[0]['company']);
                foreach($company as $vv){
                    $result['detail']['company']=$vv['id'];
                }
            }
            if(!empty($r[0]['group'])&&intval($r[0]['group']>0)){
                $group=getgroupid($r[0]['group']);
                foreach($group as $vv){
                    $result['detail']['group']=$vv['id'];
                }
            }
            $result['detail']['role_level']=$r[0]['role_level'];
            $result['detail']['status']=$r[0]['status'];
        }
        $this->response($result,'json');
    }


    /**
     * FS006角色管理 【查找角色】
     * Get方法  api_address http://your-server-name/public/api.php/Role/find?name='test'&status=0&company='IBM'&level=100
     * &pagesize=20&pagenum=20
     * @param string name           名称          需要 URLENCODE
     * @param string company        所属客户
     * @param string status         状态
     * @param int    level          优先级
     * @param int    pagesize
     * @param int    pagenum
     * @return Json 返回数据{<br>
     *      list[{<br>
     *          Company         所属客户˾<br>
     *          name            名称<br>
     *          ID              ID<br>
     *          Status          状态<br>
     *          Group           所属集团<br>
     *          role_level      优先级<br>
     *      }]<br>
     * }
     */
    public function find_get(){
        $data=array();
        $result=array();
        $model=M('role');
        $company=I('get.company');
        $name=urldecode(I('get.name'));
        $status=I('get.status');
        $level=I('get.level');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');
        if(!empty($company)){
            $data['company']=$company;
        }
        if(!empty($user)){
            $data['name']=array('like','%$name%');
        }
        if(!empty($status)){
            $data['status']=$status;
        }
		$data['deleted']=0;
		$r=$model->where($data)->order('int_id desc')->page(intval($pagenum),intval($pagesize))->select();
        $result['list']=array();
        foreach($r as $v){
            $k['id']=$v['id'];
            $k['name']=$v['name'];
            $k['remark']=$v['remark'];
            $k['company']=$v['company'];
            $k['group']=$v['group'];
            $k['companyName']='';
            if(!empty($v['company'])&&intval($v['company'])>=1){
                $company=getcompanyid($v['company']);
                foreach($company as $vv){
                    $k['companyName']=$vv['name'];
                }
            }
            $k['groupName']='';
            if(!empty($k['group'])&&intval($k['group']>=1)){
                $group=getgroupid($v['group']);
                foreach($group as $vv){
                    $k['groupName']=$vv['name'];
                }
            }
            $k['role_level']=$v['role_level'];
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



    /**
     * 新增/修改角色权限
     * POST方法  api_address http://your-server-name/public/api.php/Role/UpdateAccess
     * @param string role_id           角色内码
     * @param nodelist       Node list 格式 {"list":[{"node_id":"2","level":"0","module":"role"},{"node_id":"3","level":"0","module":"role"}]} 需要 urlencode
     * @return Json 返回数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。<br>
     * }
     */
    public function UpdateAccess_POST(){
        $data=array();
        $result=array();
        $model=M('access');
        $role_id=I('post.role_id');
        $nodelist=urldecode(I('post.nodelist'));
        if(empty($role_id)){
            $result['isSuccess']='1';
            $result['errorMessage']='角色ID不能为空';
        }else{
            $role_id=M('role')->where("id='".$role_id."'")->getfield("int_id");
            $model->where("role_id=".intval($role_id))->delete();
            $r=json_decode($nodelist,'true');
            $list=$r['list'];
            foreach($list as $v){
                $level=M('node')->where("id=".$v['node_id'])->select();
                $data['node_id']=intval($v['node_id']);
                $data['role_id']=intval($role_id);
                $data['level']=intval($level[0]['level']);
                $data['module']=$level[0]['module'];
                $model->data($data)->add();
            }
            $result['isSuccess']='0';
        }
        $this->response($result,'json');
    }

    /**
     * 角色下拉列表列表接口
     * GET方法 api_address http://your-server-name/api.php/role/RolesForDropdownlist
     * @param   string  pagesize
     * @param   string  pagenum
     * @return json
     */
    public function RolesForDropdownlist_get(){
        $role_level=I('get.role');
        $model = M('role');
        $role_level=$model->where("id='".$role_level."'")->getfield('role_level');
        $result=array();
        $data['deleted']=0;
        $data['status']=0;
        $data['role_level']=array("ELT",$role_level);
        $r=$model->where($data)->select();
       // $this->response($model->getlastsql(), 'json');
        $result['list']=array();
        foreach($r as $v){
            $k['id']=$v['id'];
            $k['name']=$v['name'];
            array_push($result['list'],$k);
        }
        $this->response($result, 'json');
    }

    public function GetUserMenu_POST(){
        $userid=I('post.userid');
        $result=array();
        if(empty($userid)){
            $result['isSuccess']=false;
            $this->response($result, 'json');
        }else{
            $userid=M('admin')->where("ID='".$userid."'")->getfield("Int_ID");

            $role=M('role_user')->where("user_id=".$userid)->getfield("role_id");

            $menuid=M('access')->where('role_id='.$role." and level=1")->select();
            //$this->response($menuid, 'json');
            $result['list']=array();
            foreach($menuid as $v){
                $k['id']=$v['node_id'];
                $function=M('node')->where("id=".$v['node_id'])->find();
                $k['name']=$function['name'];
                $k['subnav']=array();
                $submenu=M('access a')->join('t_node n ON a.node_id = n.id')->where('n.status=0 and n.pid='.$k['id'].' and a.role_id='.$role)->select();{
                    foreach($submenu as $v){
                        $kk['id']=$v['id'];
                        $kk['name']=$v['name'];
                        $kk['url']='#/'.$v['module'];
                        array_push($k['subnav'],$kk);
                    }
                }
                array_push($result['list'],$k);
            }
            $this->response($result, 'json');
        }

    }

} 