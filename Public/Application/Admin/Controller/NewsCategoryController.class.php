<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class NewsCategoryController extends BaseController {
    public function listAction(){
        $param = I('param.');
        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $url=C('API_ADDRESS')."/Consult/findNewsCategoryList";
        if(REQUEST_METHOD=='GET'||REQUEST_METHOD=='get'){
            $url=$url."?";
            foreach ($param as  $k=>$val){
                $url=$url."&";
                $url=($url.$k."=".strval($val));
            }
        }
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function deleteAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Consult/DeleteNewsCategory?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');
        $url=C('API_ADDRESS')."/Consult/UpdateNewsCategory";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $id=I('get.ID');
        $url=C('API_ADDRESS')."/Consult/DetailTemplate?ID=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function CagegoryForDropdownlistAction(){
        $url=C('API_ADDRESS')."/Consult/NewsCategoryForDorpdownList";
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }
} 