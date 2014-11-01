<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class ActivityController extends BaseController {
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
        $url=C('API_ADDRESS')."/Activity/FindActivity";
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
        $url=C('API_ADDRESS')."/Activity/DeleteActivity?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Activity/DetailActivity?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function getJoinAction(){
        $param = I('param.');

        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $url=C('API_ADDRESS')."/Activity/FindActivityJoin";
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
        if(empty($param['id'])||$param['id']=='undifined'){
            $param['id']=null;
        }
        if(empty($param['status'])||$param['status']=='undifined'){
            $param['status']=0;
        }
        if(!empty($param['activity_datetime'])){
            $param['activity_datetime']=date('Y-m-d H:i:s',urldecode($param['activity_datetime']));
            //$this->ajaxReturn ($param['activity_datetime'],'JSON');
        }
        $url=C('API_ADDRESS')."/Activity/UpdateActivity";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateJoinAction(){
        $param = I('param.');
        $param['operuser']=session('usertoken');
        $url=C('API_ADDRESS')."/Activity/UpdateActivityJoin";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function updateareaAction(){
        $param = I('param.');
        if(!empty($param['area'])){
            $param['area']=urlencode(html_entity_decode($param['area']));
        }
        $url=C('API_ADDRESS')."/Activity/SetArea";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function updatebrandAction(){
        $param = I('param.');
        if(!empty($param['brand'])){
            $param['brand']=urlencode(html_entity_decode($param['brand']));
        }
        $url=C('API_ADDRESS')."/Activity/SetBrand";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }
} 