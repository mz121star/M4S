<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class CompanyController extends BaseController {
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
        $url=C('API_ADDRESS')."/Fours/list";
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
        $type=I('get.type');
        $url=C('API_ADDRESS')."/Fours/delete?id=".$id."&type=".$type;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $id=I('get.id');
        $type=I('get.type');
        $url=C('API_ADDRESS')."/Fours/Detail?id=".$id."&type=".$type;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');
        $param['address']=urlencode($param['address']);
        $param['level']=$this->getLevel();
        $param['userid']=$this->getUserId();
        $param['operuser']=session('usertoken');
        $url=C('API_ADDRESS')."/Fours/Update4s";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function CompaniesForDropdownlistAction(){
    $param=I('param.');
    $param['level']=$this->getLevel();
    $param['userid']=$this->getUserId();
    $url=C('API_ADDRESS')."/Fours/CompaniesForDropdownlist";
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

    public  function GroupsForDropdownlistAction(){
        $param['level']=$this->getLevel();
        $param['userid']=$this->getUserId();
        $url=C('API_ADDRESS')."/Fours/GroupsForDropdownlist";
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

    public  function AllForDropdownlistAction(){
        $param['level']=$this->getLevel();
        $param['userid']=$this->getUserId();

        $url=C('API_ADDRESS')."/Fours/GroupsForDropdownlist";
        if(REQUEST_METHOD=='GET'||REQUEST_METHOD=='get'){
            $url=$url."?";
            foreach ($param as  $k=>$val){
                $url=$url."&";
                $url=($url.$k."=".$val);
            }
        }

        $resultr['list']=array();
        $result=getPage($url,'GET');
        $r=json_decode($result);

        foreach($r->list as $t){
            array_push($resultr['list'],$t);
        }
        $url=C('API_ADDRESS')."/Fours/CompaniesForDropdownlist";
        if(REQUEST_METHOD=='GET'||REQUEST_METHOD=='get'){
            $url=$url."?";
            foreach ($param as  $k=>$val){
                $url=$url."&";
                $url=($url.$k."=".$val);
            }
        }
        $result=getPage($url,'GET');
        $r=json_decode($result);
        foreach($r->list as $t){
            array_push($resultr['list'],$t);
        }

        $this->ajaxReturn ($resultr,'JSON');
    }

    public  function AllForDropdownlistForuserAction(){
        $param['level']=$this->getLevel();
        $param['userid']=$this->getUserId();
        $resultr['list']=array();
        if(intval($param['level'])!=1){
            $url=C('API_ADDRESS')."/Fours/GroupsForDropdownlist";
            if(REQUEST_METHOD=='GET'||REQUEST_METHOD=='get'){
                $url=$url."?";
                foreach ($param as  $k=>$val){
                    $url=$url."&";
                    $url=($url.$k."=".$val);
                }
            }
            $result=getPage($url,'GET');
            $r=json_decode($result);

            foreach($r->list as $t){
                array_push($resultr['list'],$t);
            }
        }
        $url=C('API_ADDRESS')."/Fours/CompaniesForDropdownlist";
        if(REQUEST_METHOD=='GET'||REQUEST_METHOD=='get'){
            $url=$url."?";
            foreach ($param as  $k=>$val){
                $url=$url."&";
                $url=($url.$k."=".$val);
            }
        }
        $result=getPage($url,'GET');
        $r=json_decode($result);
        foreach($r->list as $t){
            array_push($resultr['list'],$t);
        }

        $this->ajaxReturn ($resultr,'JSON');
    }

    public  function updateareaAction(){
        $param = I('param.');
        if(!empty($param['area'])){
            $param['area']=urlencode(html_entity_decode($param['area']));
        }
        $url=C('API_ADDRESS')."/Fours/SetArea";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function updatebrandAction(){
        $param = I('param.');
        if(!empty($param['brand'])){
            $param['brand']=urlencode(html_entity_decode($param['brand']));
        }
        $url=C('API_ADDRESS')."/Fours/SetBrand";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public  function findbynodeAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Fours/findbynode?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }
} 