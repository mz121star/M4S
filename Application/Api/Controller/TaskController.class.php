<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// TaskController 任务列表
//----------------------------------
class TaskController extends RestController {

    /**
     *  任务列表接口 INF036
     * GET方法 api_address http://your-server-name/public/index.php/Home/Task/TaskList?
     * userId=1&pageszie=1&pagenum=2&pagecount=23$isComplete=0
     *  uerID / string
     * @return  /json <br>
     * {<br>
     *   TaskList[{<br>
     *          id:ID，<br>
     *          title:任务名称<br>
     *      }]<br>
     * }<br>
     */
    public function TaskList_get(){
        $userId = I('get.userId');
        $isComplete = I('get.isComplete');
		$pagesize= I('get.pageszie');
		$pagenum= I('get.pagenum');
		$pagecount= I('get.pagecount');
        if($isComplete==null){
            $list=M('task')->select();
        }else{
            $list=M('task')->where("task_stauts='".$isComplete."'")->select();
        }
        foreach($list as $k=>$v){
            $result->TaskList[$k]['ID']=$v['id'];
            $result->TaskList[$k]['Title']=$v['task_name'];
        }
        $this->response($result, 'json');
    }

    /**
     *  任务详情接口 INF037
     *  GET方法 api_address http://your-server-name/public/index.php/Home/Task/TaskDetail?userId=1&taskid=1
     *  uerID / string
     * @return  /json<br>
     * {<br>
     *   TaskDetail{<br>
     *          id:ID，<br>
     *          title:任务名称,<br>
     *          isComplete:是否完成,<br>
     *          Description：任务描述,<br>
     *          RemindTime: 提醒时间,<br>
     *          RemindCycle:提醒周期,<br>
     *      }<br>
     * }<br>
     */
    public function TaskDetail_get(){
        $userId = I('get.userId');
        $taskid = I('get.taskid');

        $list=M('task')->where("id='".$taskid."'")->select();
        foreach($list as $k=>$v){
            $result->TaskDetail[$k]['ID']=$v['id'];
            $result->TaskDetail[$k]['Title']=$v['task_name'];
            $result->TaskDetail[$k]['isComplete']=$v['task_stauts'];
            $result->TaskDetail[$k]['Description']=$v['task_content'];
            $result->TaskDetail[$k]['RemindTime']='2014-09-18';
            $result->TaskDetail[$k]['RemindCycle']='20';
        }
        $this->response($result, 'json');
    }

    /**
     *  创建/编辑༭任务列表 INF038
     *  POST方法 api_address http://your-server-name/public/index.php/Home/Task/UpdateTask
     *  uerID / string
     * @return Json 类型{<br>
     *      isSuccess：是否注册成功，true：注册成功；FALSE：注册失败，<br>
     *      ErrorMessage 错误信息，注册成功时错误信息为空。
     * }
     */
    public function UpdateTask_POST(){
        $userID= I('post.userId');
        $taskID=I('post.taskID');
        $taskDetail= I('post.TaskDetail');

        $data['userID']=$userID;
        $data['taskID']=$taskID;
        $data['TaskDetail']=$taskDetail;

        if(!empty($taskID)){
            M('task')->Where("taskID='".$taskID."'")->Save($data);
            $result->isSuccess="true";
        }else{
            M('task')->data($data)->add();
            $result->isSuccess="true";
        }
        $this->response($result, 'json');
    }


}

?>