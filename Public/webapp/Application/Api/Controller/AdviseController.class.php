<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// AdviseController 意见信息Controller
//----------------------------------
class AdviseController extends RestController {

    /**
     * 新增/编辑模板     FS013/FS013 模板管理【新增/编辑】反馈
     * POST方法  api_address http://your-server-name/public/api.php/Template/UpdateTemplate
     *  @param          string id           GUID      新增时为空，修改时不为空
     *  @param 【必填】 int createuser      创建用户  新增时默认是当前用户
     *  @param 【必填】 string creatdate    创建日期  格式：YYYY-MM-DD 新增时默认为当前日期
     *  @param          int modifyuser      修改用户  新增时默认是创建用户，修改时候必填
     *  @param          string modifydate   修改日期  格式：YYYY-MM-DD 修改是默认是当前日期
     *  @param          int    status       0启用，1不启用。 默认为0
     *  @param          int    sort         排序字段
     *  @param          string content      内容              需要UrlEnCode
     *  @param  【必填】string remark       标记              需要UrlEnCode
     *  @param  【必填】string name         名称              需要UrlEnCode
     *  @param            int  category     分类
     *  @param            int  brand     品牌              需要UrlEnCode
     *  @param            int  4s        4S店
     *  @param          string tpl_rule     规则            需要UrlEnCode
     *  @return Json 返回JSON数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息.
     * }
     */
    public function Update_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $data['status']=I('post.status');
        $model=M('advise');
        $count=$model->where("id='".$data['id']."'")->count();
        //$this->response($model->getlastSql(),'json');
        if($count<=0){
            $result['isSuccess']='false';
            $result['errorMessage']='修改失败，数据库中不存在该条数据';
        }
        else{
            $model->where(" id='".$data['id']."'")->save($data);
            $result['isSuccess']='true';
            $result['errorMessage']='修改成功';
        }

        $this->response($result,'json');
    }


    /**
     * FS013反馈管理
     * Get方法  api_address http://your-server-name/public/api.php/Template/FindTemplate?name='test'&status=0&type='IBM'
     * &barnd=1&4s=1
     * @param string name           名称          需要 URLENCODE
     * @param string type        分类
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
    public function FindAdvise_get(){
        $data=array();
        $result=array();
        $model=M('advise');

        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');
        $status=I('get.status');
		if(!empty($status)){
			$data['status']=$status;
		}
		$r=$model->where($data)->page($pagenum,$pagesize)->select();

        $result['list']=array();
        if(empty($r)){
            $result['list']=null;
        }else{
            foreach($r as $k=>$v){
                $s['id']=$v['id'];
                $s['line']=$k+1;
                $s['customer']=$v['customer'];
                $s['content']=$v['content'];
                $s['status']=$v['status'];
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

}



?>