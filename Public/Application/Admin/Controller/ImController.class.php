<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class ImController extends BaseController {
    public function ListAction(){
        $param=I('param.');
        $url=C('API_ADDRESS')."/Message/findSession";
        $result=getPage($url,'GET',$param);
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $param=I('get.session');
        $url=C('API_ADDRESS')."/Message/detailSession?session=".$param;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }
} 