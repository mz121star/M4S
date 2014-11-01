<?php
/**
 * Created by PhpStorm.
 * User: lixu
 * Date: 14-9-27
 * Time: 下午9:04
 */

namespace Api\Controller;

class TemplateController extends BaseController {

    /**
     * 新增/编辑模板     FS013/FS013 模板管理【新增/编辑】模板
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
    public function UpdateTemplate_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);
        $data['status']=I('post.status');
        $data['sort']=I('post.sort');
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));
        $data['content']=urldecode(I('post.content'));
        $data['category']=urldecode(I('post.category'));
        $data['barnd_id']=urldecode(I('post.brand'));
        $data['4s_id']=urldecode(I('post.company'));
        $model=M('template');
        //ID为空表示新增
        if(empty($data['id'])||$data['id']==null){
            $data['id']=to_guid_string(time());
            if(empty($data['status'])){
                $data['status']=0;
            }
            $data['deleted']=0;
            $model->data($data)->add();
            $result['isSuccess']='true';
            $result['errorMessage']='增加成功';
        }else{
            $count=$model->where("id='".$data['id']."'")->count();
            //$this->response($model->getlastSql(),'json');
            if($count<=0){
                $result['isSuccess']='false';
                $result['errorMessage']='修改失败，数据库中不存在该条数据';
            }
            else{
                $model->where(" id='".$data['ID']."'")->save($data);
                $result['isSuccess']='true';
                $result['errorMessage']='修改成功';
            }
        }

        $this->response($result,'json');
    }

    /**
     * FS012 模板管理【删除模板】
     * GET方法  api_address http://your-server-name/public/api.php/Template/DeleteTemplate
     * @param  【必填】      string id           id
     * @return Json 返回数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。
     * }
     * }
     */
    public function DeleteTemplate_get(){
        $data=array();
        $result=array();
        $model=M('template');
        $data['id']=I('get.id');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $data['deleted']=1;
            $model->where("id='".$data['id']."'")->save($data);
            $result['isSuccess']='true';
        }
        $this->response($result,'json');
    }

    /**
     * FS012 模板管理【查看模板明细】鿴
     * Get方法  api_address http://your-server-name/public/api.php/Template/DetailTemplate
     * @param string id           id
     * @return Json 返回数据{<br>
     *      detail{<br>
     *          status          <br>
     *          sort            排序字段<br>
     *          content         内容     <br>
     *          remark          标记     <br>
     *          name            名称    <br>
     *          category        分类<br>
     *          brand           品牌     <br>
     *          4s              4S店<br>
     *          tpl_rule        规则      <br>
     *          id             id<br>
     *      }<br>
     * }
     */
    public function DetailTemplate_get(){
        $data=array();
        $result=array();
        $model=M('template');
        $data['id']=I('get.id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("deleted=0 and id='".$data['id']."'")->find();
            $result['detail']['id']=$r['ID'];
            $result['detail']['name']=$r['name'];
            $result['detail']['content']=$r['content'];
            $result['detail']['remark']=$r['remark'];
            $result['detail']['company']=$r['4s_id'];
            $result['detail']['brand']=$r['barnd_id'];
            $result['detail']['type']=$r['category'];
            $result['detail']['status']=$r['status'];
        }
        $this->response($result,'json');
    }


    /**
     * FS013模板管理
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
    public function FindTemplate_get(){
        $data=array();
        $result=array();
        $model=M('template');
        $name=I('get.name');
        $status=I('get.status');
        $s4=I('get.type');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');

        if(!empty($name)){
            $data['name']=array('like','%'.$name.'%');
        }
        if(!empty($s4)){
            $data['4s_id']=$s4;
        }
        $data['deleted']=0;
        $r=$model->where($data)->page($pagenum,$pagesize)->select();
        $result['list']=array();
        if(empty($r)){
            $result['list']=null;
        }else{
            foreach($r as $v){
                $s['id']=$v['id'];
                $s['name']=$v['name'];
                $s['category']=$v['category'];
                $s['brand']=$v['brand'];
                $s['4s_id']=$v['4s_id'];
                $s['tpl_rule']=$v['tpl_rule'];
                $s['status']=$v['status'];
                $company=getcompanyid($v['4s_id']);
                foreach($company as $vv){
                    $s['companyName']=$vv['name'];
                }
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