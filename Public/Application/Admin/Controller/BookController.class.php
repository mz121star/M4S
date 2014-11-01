<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class BookController extends BaseController {

    public function ListAction(){
        $param = I('param.');

        if(empty($param['pagenum'])){
            $param['pagenum']=1;
        }
        if(empty($param['pagesize'])){
            $param['pagesize']=C('PAGE_SIZE');
        }
        $url=C('API_ADDRESS')."/Book/findBook";
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
        $param = I('get.id');
        if(empty($param['id'])||$param['id']=='undifined'){
            $param['id']=null;
        }
        if(empty($param['status'])||$param['status']=='undifined'){
            $param['status']=0;
        }
        $url=C('API_ADDRESS')."/Book/handlerBook?id=".$param;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }
} 