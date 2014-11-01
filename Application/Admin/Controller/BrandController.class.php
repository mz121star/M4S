<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class BrandController extends BaseController {
    public function ListAction(){
        $param = I('param.');
        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $url=C('API_ADDRESS')."/Brand/FindBrand";
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
        $url=C('API_ADDRESS')."/Brand/DeleteBrand?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Brand/DetailBrand?id=".$id;
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
        $param['operuser']=session('usertoken');
        $url=C('API_ADDRESS')."/Brand/UpdateBrand";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }


    public function GetBrandFromDropdownListAction(){
        $url=C('API_ADDRESS')."/Brand/GetBrandForDropDownlist";
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function GetBrandAction(){
        $brandlist['list'] = session('brandlist');
        $this->ajaxReturn ($brandlist,'JSON');
    }
} 