<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class FunctionController extends BaseController {
    public function listAction(){
        $param = I('param.');
        $url=C('API_ADDRESS')."/Function/find";
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
        $url=C('API_ADDRESS')."/Function/delete?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function findbyRoleAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Function/findbyRole?role=".$id."&level=2";
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public  function  detailNodeAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Function/detailNode?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');
        $param['operuser']=session('usertoken');
        $url=C('API_ADDRESS')."/Function/UpdateFunction";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }
} 