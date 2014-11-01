<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// TaskController 任务列表
//----------------------------------
class TaskController extends RestController {
    /**
     * FS026  待办项
     * Get方法  api_address http://your-server-name/public/api.php/Task/FindTask
     * @param string name           名称          需要 URLENCODE
     * @param string status         状态
     * @return Json 返回数据{<br>
     *      list[{<br>
     *          name            名称    <br>
     *          category        分类<br>
     *          brand           品牌     <br>
     *          4s              4S店<br>
     *          tpl_rule        规则      <br>
     *      }]<br>
     * }
     */
    public function FindTask_get(){
        $data=array();
        $result=array();
        $model=M('task');
        $status=I('get.status');
        $name=I('get.name');
		$type=I('get.type');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');
		if(!empty($name)){
			$data['name']=array('like','%$name%');
		}
        if(!empty($status)){
            $data['task_stauts']=$status;
        }
		if(!empty($type)){
            $data['type']=$type;
        }
        $r=$model->where($data)->page($pagenum,$pagesize)->select();

        $result['list']=array();
        if(empty($r)){
            $result['list']=null;
        }else{
            foreach($r as $k=>$v){
                $s['id']=$v['id'];
                $s['name']=$v['task_name'];
                $s['content']=$v['task_content'];
                $s['status']=$v['task_stauts'];
                $s['type']=$v['type'];
                $s['orgn']=$v['task_orgn_id'];
                if($v['task_stauts']==0){
                    $s['statusName']='未完成';
                }elseif($v['task_stauts']==1){
                    $s['statusName']='已完成';
                }
                if($v['type']==1){
                    $s['typeName']='活动';
                }elseif($v['type']==2){
                    $s['typeName']='咨询';
                }elseif($v['type']==3){
                    $s['typeName']='车主认证';
                }elseif($v['type']==4){
                    $s['typeName']='用户反馈';
                }
                $s['link']=$k+1;
                array_push($result['list'],$s);
            }
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
    /**
     * FS026  待办项
     * Get方法  api_address http://your-server-name/public/api.php/Task/UpdateT
     * @param string name           名称          需要 URLENCODE
     * @param string status         状态
     * @return Json 返回数据{<br>
     *      isSuccess:true;
     *      errorMessage 错误信息
     * }
     */
    public function UpdateT_POST(){
        $data=array();
        $result=array();
        $model=M('task');
        $data['id']=I('post.id');
        $data['task_stauts']=I('post.status');
        $model->where("id='".$data['id']."'")->save($data);
        $result['isSuccess']="true";
        $result['errorMessage']="";
        $this->response($result,'json');
    }


    public function getCarInfo_get(){
        $data=array();
        $result=array();
        $model=M('car');
        $id=I('get.id');
        $r=$model->where("id=".$id)->select();
        $result['datail']=$r[0];
        $this->response($result,'json');
    }


    public function UpdateCar_POST(){
        $data=array();
        $result=array();
        $model=M('car');
        $id=I('post.id');
        $data['vin_number']=I('post.vin_number');
        $data['remark']=I('post.remark');
        $data['counsult']=I('post.consult');
        $r=$model->where("id=".$id)->save($data);

        $id=M('task')->where("task_orgn_id=".$id)->getfield('id');
        $d['status']=1;
        M('task')->where("id=".$id)->save($d);
        $result['isSuccess']=0;
        $this->response($result,'json');
    }
}

?>