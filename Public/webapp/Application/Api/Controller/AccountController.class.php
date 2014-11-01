<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// AccountController 账户Controller
//----------------------------------
class AccountController extends RestController {

        public function JoinBlacklist_POST(){
            $id = I('post.id');
            $reason = I('post.reason');
            $model=M('owner');
            $data['isblack']=1;
            $data['remark']=$reason;
            //更新用户状态
            $model->where("id='".$id."'")->save($data);
            $result['isSuccess']='true';
            $this->response($result, 'json');
        }

    public function FindOwner_get(){
        $data=array();
        $result=array();
        $model=M('owner');
        $status=I('get.status');
        $pagesize = I('get.pagesize');
        $pagenum=I('get.pagenum');
        if(empty($status)){
            $data['status']=0;
        }
        $r=$model->where($data)->page(intval($pagenum),intval($pagesize))->select();
        $result['list']=array();
        foreach($r as $k=>$v){
            $kk['id']=$v['id'];
            $kk['name']=$v['name'];
            $kk['telephone']=$v['telephone'];
            $kk['nickname']=$v['nickname'];
            $kk['line']=$k+1;
            $kk['status']=$v['status'];
            $kk['isblack']=$v['isblack'];
            array_push($result['list'],$kk);
        }

        $result['pagenum']=$pagenum;
        $count=$model->where($data)->count();
        if(intval($count)%intval($pagesize)!=0){
            $result['pagecount']=floor((intval($count)/intval($pagesize)))+1;
        }else{
            $result['pagecount']=floor((intval($count)/intval($pagesize)));
        }
        $this->response($result,'json');
    }

        public function cancelBlackList_POST(){
            $id = I('post.id');
            $reason = I('post.reason');
            $model=M('owner');
            $data['isblack']=0;
            $data['remark']=$reason;
            //更新用户状态
            $model->where("id='".$id."'")->save($data);
            $result['isSuccess']='true';
            $this->response($result, 'json');
        }
}
?>