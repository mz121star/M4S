<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class AccountController extends BaseController {

    public function ListAction(){
        $param = I('param.');
        $this->ajaxReturn ($param,'JSON');
        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $url=C('API_ADDRESS')."/Account/FindOwner";
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

    public function joinBlackListAction(){
        $param = I('param.');
        if(empty($param['id'])||$param['id']=='undifined'){
            $param['id']=null;
        }
        if(empty($param['status'])||$param['status']=='undifined'){
            $param['status']=0;
        }
        $url=C('API_ADDRESS')."/Account/joinBlackList";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function cancelBlackListAction(){
        $param = I('param.');
        if(empty($param['id'])||$param['id']=='undifined'){
            $param['id']=null;
        }
        if(empty($param['status'])||$param['status']=='undifined'){
            $param['status']=0;
        }
        $url=C('API_ADDRESS')."/Account/cancelBlackList";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function DeleteAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Account/DeleteTemplate?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $id=I('get.ID');
        $url=C('API_ADDRESS')."/Account/DetailTemplate?ID=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');
        if(empty($param['id'])||$param['id']=='undifined'){
            $param['id']=null;
        }
        if(empty($param['status'])||$param['status']=='undifined'){
            $param['status']=0;
        }
        $url=C('API_ADDRESS')."/Account/UpdateTemplate";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function TestAction(){

        if (!empty($_FILES)) {
           $this->ajaxReturn ($_FILES ,'JSON');
        }
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize   =     3145728 ;// 设置附件上传大小
        $upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
        $upload->rootPath  =     APP_PATH.'upload/'; // 设置附件上传根目录
        $upload->savePath  =     ''; // 设置附件上传（子）目录
        $upload->saveRule = '';
        // 上传文件
        $info   =   $upload->upload();

        $this->ajaxReturn ($info,'JSON');

    }
} 