<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// AccountController 账户Controller
//----------------------------------
class AccountController extends RestController {
        /**
         *   用户注册 INF004
         *  POST方法 api_address http://your-server-name/public/index.php/Home/Account/Register
         *  @param string phoneNo          电话号码
         *  @param string phoneSerialNo    电话序列号
         *  @param string nickname         昵称
         *  @param string password         密码
         *  @return Json 类型{<br>
         *      isSuccess：是否注册成功，true：注册成功；FALSE：注册失败，<br>
         *      ErrorMessage 错误信息，注册成功时错误信息为空。
         * }
         */
    	public function register_POST(){
    		$phoneNo = I('post.phoneno');
            $phoneSerialNo= I('post.phoneserialno');
    		$nickname= I('post.nickname');
    		$password= I('post.password');
            $mode=M('owner');
            $data["nickname"]=$nickname;
            $data["name"]=$nickname;
            $data["password"]= md5('wk'.trim($password).'cms');
            $data["id"]=to_guid_string(time());
            $data["create_datetime"]=date('Y-m-d h:i:s',time());
            $mode->data($data)->add();
            $result->isSuccess='true';
            $result->errorMessage='';
            $this->response($result, 'json');
    	}


        /**
         *  用户验证 INF002
         *  POST方法 api_address http://your-server-name/public/index.php/Home/Account/Validate

         *  @param string account   用户昵称
         *  @param string password  用户密码
         *  @param string userType  用户类型 1：车主；2:顾问
         *  @return   /json<br>
         *  {<br>
         *      isSuccess:是否成功,'ture':成功；'false'：失败,<br>
         *      errorMessage:错误原因，<br>
         *      Account 账户信息{<br>
         *          'userId':ID,<br>
         *          'name':'姓名',<br>
         *          'nickname':'昵称',<br>
         *          'HeadPortrait':'头像Url',<br>
         *          'Phone':'电话号码'<br>
         *      }<br>
         *  }<br>
         */
        public function validate_POST(){
            $account = I('post.account');
            $Password = I('post.password');
            $userType= I('post.usertype');
            if(intval($userType)==1){
                $count=M('owner')->where('nickname='."'".$account."' and password='".substr(md5('wk'.trim($Password).'cms'),0,20)."'")->count();
                if($count>0){
                    $Owner=M('owner')->where('nickname='."'".$account."' and password='".substr(md5('wk'.trim($Password) .'cms'),0,20)."'")->select();
                    $result->isSuccess='true';
                    $result->Account->userId=$Owner[0]['id'];
                    $result->Account->name=$Owner[0]['name'];
                    $result->Account->nickname=$Owner[0]['nickname'];
                    $result->Account->HeadPortrait='HeadPortrait';
                    $result->Account->PhoneNo='15897611123';
                }else{
                    $result->isSuccess='false';
                    $result->errorMessage='failed';
                }
                $this->response($result, 'json');
            }else if(intval($userType)==2){
                $count=M('consultant')->where('nickname='."'".$account."' and password='".substr(md5('wk' . trim($password) . 'cms'),0,20)."'")->count();
                if($count>0){
                    $Owner=M('consultant')->where('nickname='."'".$account."' and password='".substr(md5('wk' . trim($password) . 'cms'),0,20)."'")->select();
                    $result->isSuccess='true';
                    $result->Account->userId=$Owner[0]['id'];
                    $result->Account->name=$Owner[0]['name'];
                    $result->Account->nickname=$Owner[0]['nickname'];
                    $result->Account->HeadPortrait='HeadPortrait';
                    $result->Account->PhoneNo='15897611123';
                }else{
                    $result->isSuccess='false';
                    $result->errorMessage='failed';
                }
                $this->response($result, 'json');
            }
        }


}
?>