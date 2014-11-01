<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class ShareController extends BaseController {
    public function ListAction(){
        $param=I('param.');
        $url=C('API_ADDRESS')."/Shared/findShare";
        $result=getPage($url,'GET',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function DeleteAction(){
        $param=I('get.num');
        $url=C('API_ADDRESS')."/Shared/deleteShare?num=".$param;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }
} 