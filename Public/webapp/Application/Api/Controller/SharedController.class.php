<?php
/**
 * Created by PhpStorm.
 * User: lixu
 * Date: 14-9-27
 * Time: 下午9:04
 */

namespace Api\Controller;

use Think\Controller\RestController;

class SharedController extends RestController {

    protected $mongodb = array();

    public function __construct(){
        parent::__construct();
        $mongoconfig = C('DB_CONFIG');
        $this->mongodb = new MongoController($mongoconfig);
    }
    /**
     * 新增     INF028
     * POST方法  api_address http://your-server-name/public/index.php/home/Shared/UpdateShared
     *  @param          string userid       用户ID
     *  @param          string phoneno      电话号码
     *  @param          string shareTitle   分享主题
     *  @param          string shareSubject 所属主题
     *  @param          string location     分享地址
     *  @param          int    image        图片
     *  @return Json 返回JSON数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息.
     * }
     */
    public function UpdateShared_POST(){
        $userid=I('post.userid');
        $subjectid=I('post.shareSubject');
        $shareTite=I('post.shareTitle');
        $shareLoaction=I('post.location');
        $shareimage=I('post.image');
        $shareContent=I('post.content');
        //用户名
        $ShareUser=M('owner')->where("id='".$userid."'")->get('name');
        //分享名称
        $subjectresult=$this->mongodb->where(array('id'=>$subjectid))->select(array('name'))->get('qiche_subject');
        if(empty($subjectresult)){

        }else{
            $Subject=$subjectresult[0]['name'];
        }
        $this->mongo->insert(array(
            'id'=>to_guid_string(time()),
            'ShareDate'=>date('Y-m-d h:i:s',time()),
            'Prise'=>0,
            'HOT'=>0,
            'ShareUser'=>$ShareUser,
            'ShareUserId'=>$userid,
            'subjectid'=>$subjectid,
            'Subject'=>$Subject,
            'Title'=>$shareTite,
            'Location'=>$shareLoaction,
            'ImageUrl'=>$shareimage,
            'Content'=>$shareContent,
            'ClickCount'=>0), 'qiche_share');
        $result['isSuccess']='true';
        $result['errorMessage']='修改成功';
        $this->response($result,'json');
    }

    /**
     * 分享详情  INF026
     * GET方法  api_address http://your-server-name/public/index.php/home/Shared/DetailShared
     * @param       string   sharedid           id
     * @param       string   userid             userid
     * @param       string   phoneno            电话号码
     * @return Json 返回数据{<br>
     *     分享详情 shareDetail {<br>
     *                  ID，string <br>
                        ShareDate        分享日期       <br>
                        Prise,           获得点赞数量   <br>
                        Hot              热度           <br>
                        Title            分享标题       <br>
                        subject          所属主题       <br>
                        Location         分享地址       <br>
                        ImageUrl         分享图片地址   <br>
                        ClickCount       阅读量       <br>
                        Content          内容   <br>
     *     }
     * }
     */
    public function DetailShared_get(){
        $data=array();
        $result=array();
        $ID=I('param.sharedid');
        $result=$this->mongodb->where(array('id'=>$ID))->select(array('id','ShareDate','Prise','Hot','Title','subject','Location','ImageUrl','ClickCount','Content'))->get("qiche_share");
        $num=$result[0]['ClickCount']+1;
        $this->mongo->where(array('id'=>$ID))->inc(array('ClickCount' => $num))->update('qiche_share');
        foreach($result as $k=>$v){
            $result['datail']['id']=$v['id'];
            $result['datail']['ShareDate']=$v['ShareDate'];
            $result['datail']['Prise']=$v['Prise'];
            $result['datail']['subject']=$v['Subject'];
            $result['datail']['Prise']=$v['Prise'];
            $result['datail']['Location']=$v['Location'];
            $result['datail']['ImageUrl']=$v['ImageUrl'];
            $result['datail']['ClickCount']=$v['ClickCount'];
            $result['datail']['Content']=$v['Content'];
            $result['datail']['Hot']=$v['Hot'];
        }
        $this->response($result,'json');
    }

    /**
     *  分享列表 INF025鿴
     * Get方法  api_address http://your-server-name/public/index.php/home/Shared/ListShared
     * @param string phoneno      电话号码
     * @param string userid       用户id
     * @param int    pagesize
     * @param int    pagenum
     * @param  int   pagecount
     * @param Subject
     * @param Orderby  (可根据1 是ShareDate, 2 HOT 排序)
     * @return Json 返回数据{<br>
     *      errorMessage  <br>
     *      list{<br>
                    ID，         string   <br>
                    ShareDate,   date     <br>
                    Prise        获得点赞数量     <br>
                    Hot         热度           <br>
                    Title       分享标题        <br>
     *              Subject     分享主题           <br>
                    ShareUser   分享用户        <br>
     *      }<br>
     * }
     */
    public function ListShared_get(){
        $param=I('param.');
        $where=array();
        if(!empty($param['Subject'])){
            $where['Subject']=$param['Subject'];
        }
        if(!empty($param['pagesize'])){
            $pagesize=$param['pagesize'];
        }
        if(!empty($param['pagenum'])){
            $pagenum=$param['pagenum'];
        }

        if(!empty($pagesize)&&!empty($pagenum)&&(!empty($where))){
            if(empty($param['order'])){
                $result=$this->mongodb->where($param)->select(array('id', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->getPaginator($pagenum,$pagesize,"qiche_share");
            }else if($param['order']==1){
                $result=$this->mongodb->where($param)->order_by(array('ShareDate'=>'DESC'))->select(array('ID', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->getPaginator($pagenum,$pagesize,"qiche_share");
            }else{
                $result=$this->mongodb->where($param)->order_by(array('Hot'=>'DESC'))->select(array('ID', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->getPaginator($pagenum,$pagesize,"qiche_share");
            }
        }else if(empty($pagesize)||!empty($pagenum)){
            if(empty($param['order'])){
                $result=$this->mongodb->where($param)->select(array('id', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->get("qiche_share");
            }else if($param['order']==1){
                $result=$this->mongodb->where($param)->order_by(array('ShareDate'=>'DESC'))->select(array('ID', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->get("qiche_share");
            }else{
                $result=$this->mongodb->where($param)->order_by(array('Hot'=>'DESC'))->select(array('ID', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->get("qiche_share");
            }
        }else{
            if(empty($param['order'])){
                $result=$this->mongodb->select(array('id', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->get("qiche_share");
            }else if($param['order']==1){
                $result=$this->mongodb->order_by(array('ShareDate'=>'DESC'))->select(array('id', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->get("qiche_share");
            }else {
                $result=$this->mongodb->order_by(array('Hot'=>'DESC'))->select(array('id', 'ShareDate','Prise','Hot','Title','Subject','ShareUser'))->get("qiche_share");
            }
        }
        $this->response($result,'json');
    }

    /**
     * 点赞   INF042
     * Get方法  api_address http://your-server-name/public/api.php/home/share/prise
     * @param string userid           用户ID
     * @param string sharedid         分项名称
     * @return Json 返回数据{<br>
            isSuccess   0成功 1失败  <br>
     *      errorMessage <br>
     * }
     */
    public function prise_get(){
        $ID=I('param.sharedid');
        $userid=I('param.sharuseridedid');
        $result=$this->mongodb->where(array('id'=>$ID))->select(array('id','ShareDate','Prise','Hot','Title','subject','Location','ImageUrl','ClickCount','Content'))->get("qiche_share");
        $num=$result[0]['Prise']+1;
        $this->mongo->where(array('id'=>$ID))->inc(array('ClickCount' => $num))->update('qiche_share');
        $this->mongo->insert(array(
            'id'=>to_guid_string(time()),
            'PriseDate'=>date('Y-m-d h:i:s',time()),
            'PriseUserId'=>$userid,
            'ShareId'=>$ID,), 'qiche_share_prise');
        $result1['isSuccess']=0;
        $this->response($result1,'json');
    }


    public  function  UpdateSubject_Post(){

        $id=I('post.id');
        $content=I('post.content');
        $name=I('post.name');
        $createid=I('post.createid');
        $createname=M('admin')->where("id='".$createid)->getfield('user_name');
        $result=array();
        if(empty($id)){
            $id=to_guid_string(time());
            $createtime=date('Y-m-d h:i:s',time());
            $num='INF'.strval(date('Ym',time())).str_pad(strval($this->mongodb->count('qiche_subject')),4,'0',STR_PAD_LEFT);
            $this->mongodb->insert(array(
                'id'=>$id,
                'name'=>$name,
                'content'=>$content,
                'createtime'=>$createtime,
                'createid'=>$createid,
                'createname'=>$createname,
                'num'=>$num
            ),'qiche_subject');
        }else{
            $this->mongodb->where(array('id'=>$id))->update(array(
                'id'=>$id,
                'name'=>$name,
                'content'=>$content
            ),'qiche_subject');
        }
        $this->response($result,'json');
    }

    public function findSubject_get(){
        $name=I('param.name');
        $pageindex=I('param.pagenum');
        $pagesize=I('param.pagesize');
        $data=array();
        if(!empty($name)){
            $data->name=$name;
        }
        $result=$this->mongodb->where($data)->getPaginator($pageindex,$pagesize,"qiche_subject");

        $this->response($result,'json');
    }

    public function deleteSubject_get(){
        $param=I('get.id');
        $result=$this->mongodb->where(array('id'=>$param))->delete("qiche_subject");

        $this->response($result,'json');
    }

    public function findShare_get(){
        $param=I('param.');
        $pageindex=1;
        
        $result=$this->mongodb->where($param)->getPaginator($pageindex,3,"qiche_share");

        $this->response($result,'json');
    }

    public function deleteShare_get(){
        $param=I('get.num');
        $result=$this->mongodb->where(array('num'=>$param))->delete("qiche_share");

        $this->response($result,'json');
    }
} 