<?php
namespace Admin\Controller;

use Think\Controller;

class BaseController extends Controller {

    protected $userInfo = array();

    public function __construct(){
        $this->userInfo = session('userinfo');
        if(empty($this->userInfo)){
            $this->display('Index:login');
            exit;
        }
        $this->assign('current_c', MODULE_NAME);
        $this->assign('current_a', ACTION_NAME);
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
}