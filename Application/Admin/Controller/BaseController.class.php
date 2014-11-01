<?php
namespace Admin\Controller;

use Think\Controller;

class BaseController extends Controller {

    protected $userInfo = array();

    public function __construct(){
        parent::__construct();

        $this->userInfo = session('usertoken');
        if(empty($this->userInfo)){
            $this->display('Index:login');
            exit;
        }
        $this->assign('current_c', MODULE_NAME);
        $this->assign('current_a', ACTION_NAME);

        //Vendor('RMongo');
        /*$authzs=session('authzs');
        if(empty($authzs[MODULE_NAME."/".ACTION_NAME])){
            $this->error("用户没有访问权限");
        }*/
    }

    protected function filterAllParam($type = 'get') {
        $param = array();
        if ($type == 'get') {
            foreach ($_GET as $key => $value) {
                $param[$key] = I('get.'.$key);
            }
        } elseif ($type == 'post') {
            foreach ($_POST as $key => $value) {
                $param[$key] = I('post.'.$key);
            }
        } else {
            foreach ($_REQUEST as $key => $value) {
                $param[$key] = I('param.'.$key);
            }
        }
        return $param;
    }

    function getLevel(){
        $userInfo = session('roleid');
        if(empty($userInfo)){
            $this->display('Index:login');
            exit;
        }
        $level=0;
        if($userInfo==C('Platfomr')){
            $level=3;
        }elseif($userInfo==C('Group')){
            $level=2;
        }elseif($userInfo==C('Company')){
            $level=1;
        }
        return $level;
    }

    public function  getUserId(){
        $this->userInfo = session('usertoken');
        if(empty($this->userInfo)){
            $this->display('Index:login');
            exit;
        }
        return $this->userInfo;
    }
}
