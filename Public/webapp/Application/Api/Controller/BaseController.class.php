<?php
namespace Api\Controller;

use Think\Controller\RestController;

class BaseController extends RestController {

    protected $userInfo = array();
    public function __construct(){
        parent::__construct();
        $this->assign('current_c', MODULE_NAME);
        $this->assign('current_a', ACTION_NAME);
    }

    public  function handlerOperInfo($operuser=null,$id=null){
        $param=array();
        $opertime=intval(time());
        $operuser=M('Admin')->where("id='".$operuser."'")->getfield("int_id");
        if(empty($operuser)){
            $operuser=1;
        }
        $param['modify_user']=$operuser;
        $param['modify_datetime']=$opertime;
        if(empty($id)){
            $param['create_user']=$operuser;
            $param['create_datetime']=$opertime;
        }
        $param['deleted']=0;
        return $param;
    }
}
