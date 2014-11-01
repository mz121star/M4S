<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class TaskController extends BaseController {
    public function ListAction(){
        $param = I('param.');
        if(empty($param['type'])||$param['type']=='undifined'){
            $param['type']=null;
        }
        if(empty($param['status'])||$param['status']=='undifined'){
            $param['status']=0;
        }
        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $param['level']=$this->getLevel();
        $url=C('API_ADDRESS')."/Task/FindTask";
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

    public function UpdateAction(){
        $param = I('param.');
        $data['status']=$param['status'];
        $data['id']=$param['id'];
        $url=C('API_ADDRESS')."/Task/UpdateT";
        $result=getPage($url,'POST',$data);
        $this->ajaxReturn ($result,'JSON');
    }
} 