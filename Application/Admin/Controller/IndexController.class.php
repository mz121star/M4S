<?php
namespace Admin\Controller;

use Think\Controller;
class IndexController extends Controller {

    public function indexAction(){

        $userInfo = session('usertoken');
        if(empty($userInfo)  ){
            //$this->display();
            $this->redirect('Index/login');
        } else {
            $this->display();
        }

    }

    public function loginAction() {

        $userInfo = session('usertoken');
        if(empty($userInfo)  ){
            $this->display();
        } else {
            $this->redirect('Index/index');
        }

    }
    public function createadminAction(){
        $url=C('API_ADDRESS')."/Admin/CreateAdmin";
        $result=getPage($url,'POST',$_POST);
    }
    public function dologinAction(){
        $param = I('param.');
        $url=C('API_ADDRESS')."/Admin/valid";
        $result=getPage($url,'POST',$param);
        $r=json_decode($result);

        if($r->isSuccess=='false'||empty($r)){
            $this->redirect('Index/login');
        }else{

            session('usertoken', $r->id);
            session('uname',$r->user);

            session('authzs',$r->authzs);
            session('brandlist',$r->brandlist);
            session('arealist',$r->arealist);
            session('roleid',$r->role_guid);
            $this->redirect('Index/index');
        }
    }

    public function logoutAction() {
        $userInfo = session('usertoken');
        if(!empty($userInfo)){
            session('usertoken', null);
        }
        $this->redirect('Index/login');
    }
}