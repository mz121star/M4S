<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class RoleController extends BaseController {
    public function listAction(){

        $param = I('param.');
        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $param['level']=$this->getLevel();
        $param['userid']=$this->getUserId();
        $url=C('API_ADDRESS')."/Role/find";
        if(REQUEST_METHOD=='GET'||REQUEST_METHOD=='get'){
            $url=$url."?";
            foreach ($param as  $k=>$val){
                $url=$url."&";
                $url=($url.$k."=".$val);
            }
        }
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function deleteAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Role/delete?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Role/detail?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');
        $param['create_user']=session('usertoken');
        $url=C('API_ADDRESS')."/Role/UpdateRole";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function updatefunctionAction(){
        $param = I('param.');
        if(!empty($param['nodelist'])){
            $param['nodelist']=urlencode(html_entity_decode($param['nodelist']));
        }
        $url=C('API_ADDRESS')."/Role/UpdateAccess";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function RolesForDropdownlistAction(){

        $param['role']=session('roleid');
        $url=C('API_ADDRESS')."/Role/RolesForDropdownlist?role=".$param['role'];
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }
} 