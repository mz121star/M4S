<?php
/**
 * Created by PhpStorm.
 * User: P0017359
 * Date: 14-9-30
 * Time: ����2:03
 */

namespace Admin\Controller;


class AreaController extends BaseController {
    public function ListAction(){
        $param = I('param.');
        $url=C('API_ADDRESS')."/Area/FindArea";
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function DeleteAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Area/DeleteArea?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function DetailAction(){
        $id=I('get.id');
        $url=C('API_ADDRESS')."/Area/DetailArea?id=".$id;
        $result=getPage($url,'GET');
        $this->ajaxReturn ($result,'JSON');
    }

    public function GetUserAreaAction(){
        $arealist['list'] = session('arealist');
        $this->ajaxReturn ($arealist,'JSON');
    }

    public function UpdateAction(){
        $param = I('param.');

        if(empty($param['id'])||$param['id']=='undifined'){
            $param['id']=null;
        }
        if(empty($param['status'])||$param['status']=='undifined'){
            $param['status']=0;
        }
        $url=C('API_ADDRESS')."/Area/UpdateArea";
        $result=getPage($url,'POST',$param);
        $this->ajaxReturn ($result,'JSON');
    }

} 