<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class AdvertController extends BaseController {
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
        $url=C('API_ADDRESS')."/Ad/FindAd";
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
        $url=C('API_ADDRESS')."/Ad/DeleteAd?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Ad/DetailAd?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');
        if(empty($param['id'])||$param['id']=='undefined'){
            $param['id']=null;
        }
        if(empty($param['status'])||$param['status']=='undefined'){
            $param['status']=0;
        }
        $url=C('API_ADDRESS')."/Ad/UpdateAd";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function updateareaAction(){
        $param = I('param.');
        if(!empty($param['area'])){
            $param['area']=urlencode(html_entity_decode($param['area']));
        }
        $url=C('API_ADDRESS')."/ad/SetArea";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function updatebrandAction(){
        $param = I('param.');
        if(!empty($param['brand'])){
            $param['brand']=urlencode(html_entity_decode($param['brand']));
        }
        $url=C('API_ADDRESS')."/ad/SetBrand";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }
} 