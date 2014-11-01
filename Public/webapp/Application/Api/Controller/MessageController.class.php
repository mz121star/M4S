<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// MessageController 消息信息Controller
//----------------------------------
class MessageController extends RestController {
    protected $mongodb = array();

    public function __construct(){
        parent::__construct();
        $mongoconfig = C('DB_CONFIG');
        $this->mongodb = new MongoController($mongoconfig);
    }
    /**
     *   INF040 消息更新接口（20140924）
     *   GET方法 api_address http://your-server-name/public/index.php/Home/Message/updatemessage
     *  @param string chatmessagelist  [{"id":1},{"id":5},{"id":4},{"id":3},{"id":2}]  消息列表
     *  @return Json 类型{<br>
     *      isSuccess：，0：成功；1：失败，<br>
     *      ErrorMessage 错误信息。
     * }
     */
    public function updatemessage_get(){
        $result->isSuccess='true';
        $result->errorMessage='';
        $this->response($result, 'json');
    }

    public function updateSession_POST(){
        $param=I('param.');
        if(empty($param['id'])){
            $param['id']=to_guid_string(time());
            $this->mongodb->insert($param,'qiche_message');
        }else{
            $this->mongodb->where(array('id'=>$param['id']))->update($param,'qiche_message');
        }
    }

    /**
     *  INF039 消息推送接口（20140924）
     *  POST方法 api_address http://your-server-name/public/Index.php/Home/message/pushmessage
        @param senderid / string
        @param receiverid / string
        @param messagetype / int
        @param message string
     * @return  /json<br>
     *  {<br>
     *      list[{<br>
     *          Id:Id,
     *          TypeName:名称
     *      }]<br>
     * }<br>
     */
    public function pushmessage_POST(){
        $param=I('param.');
        if(empty($param['id'])){
            $param['id']=to_guid_string(time());
            $this->mongodb->insert($param,'qiche_messagedetail');
        }else{
            $this->mongodb->where(array('id'=>$param['id']))->update($param,'qiche_messagedetail');
        }
    }



    //查找回话
    public function findSession_get(){
        $param=I('param.');
        $result=$this->mongodb->where($param)->getPaginator(1,3,"qiche_message");

        $this->response($result,'json');
    }

    //会话详情
    public function detailSession_get(){
        $param=I('get.session');
        $pageindex=I('get.pageindex');
        $pagesize=I('get.pagesize');
        $result=$this->mongodb->where(array("session"=>intval($param)))->getPaginator($pageindex,$pagesize,"qiche_messagedetail");

        $this->response($result,'json');
    }

    public  function receiveContect_Get(){

    }

}



?>