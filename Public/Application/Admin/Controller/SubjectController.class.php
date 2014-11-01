<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class SubjectController extends BaseController {
    public function ListAction(){
        $param = I('param.');
        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $url=C('API_ADDRESS')."/Shared/findSubject";
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

    public function DeleteAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Subject/Delete?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');
        $param['createid']=session('usertoken');
        if(empty($param['id'])||$param['id']=='undifined'){
            $param['id']=null;
        }
        $url=C('API_ADDRESS')."/Shared/UpdateSubject";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }
} 