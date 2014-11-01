<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class UserController extends BaseController {
    public function listAction(){
        $param = I('param.');

        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $url=C('API_ADDRESS')."/admin/find";
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
        $id=I('get.ID');
        $url=C('API_ADDRESS')."/Admin/delete?ID=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');
        $url=C('API_ADDRESS')."/Admin/UpdateAdmin";
        if(!empty($param['role_list'])){
            $param['role_list']=urlencode(html_entity_decode($param['role_list']));
        }
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdatePasswordAction(){
        $param = I('param.');
        $url=C('API_ADDRESS')."/Admin/UpdatePassword";
        $data=array();
        $data['password']=$param["password"];
        $data["ID"] = session('usertoken');
        $result=getPage($url,'POST',$data);
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $param = I('param.');
        $url=C('API_ADDRESS')."/Admin/Detail?ID=".$param['ID'];

        $result=getPage($url,'Get',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function updatefunctionAction(){
        $param = I('param.');
        if(!empty($param['nodelist'])){
            $param['nodelist']=urlencode(html_entity_decode($param['nodelist']));
        }
        $url=C('API_ADDRESS')."/Role/UpdateAccess";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function getMenuAction(){
        $param["userid"] = session('usertoken');
        $url=C('API_ADDRESS')."/Role/GetUserMenu";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }
} 