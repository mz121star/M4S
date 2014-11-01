<?php
/**
 * Created by PhpStorm.
 * User: lixu
 * Date: 14-9-26
 * Time: 下午8:01
 */

namespace Api\Controller;

class FunctionController extends BaseController {
    /**
     * 新增/编辑功能  FS008
     * POST方法  api_address http://your-server-name/public/api.php/Function/UpdateFunction
     * @param           string remark         备注 需要(URLENCODE)
     * @param 【必填】  string name           名称 需要(URLENCODE)
     * @param           string title          标题 需要(URLENCODE)
     * @param           string module         模块
     * @param  【必填】 string pid            父ID   Guid();
     * @param           string sort           排序
     * @param  【必填】 string level          等级
     * @param           string id             id 为空是新增，否则为修改
     *  @return Json 类型{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，注册成功时错误信息为空。
     * }
     */
    public function UpdateFunction_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));
        $data['title']=urldecode(I('post.title'));
        $data['module']=I('post.module');
        $data['pid']=I('post.pId');
        $data['sort']=I('post.sort');
        $data['level']=I('post.level');
        $data['id']=I('post.id');
        $data['status']=0; //0 使用中 1 删除
        $model=M('node');
        if(empty($data['id'])||$data['id']==null){
            if(empty($data['pid'])||$data['pid']==null){
                $data['pid']=0;
            }
            $result['id']=$model->data($data)->add();
            $result['isSuccess']='true';
            $result['errorMessage']='创建功能成功';
        }else{
            $count=$model->where("id='".$data['id']."'")->select();
            if(empty($count)){
                $result['isSuccess']='false';
                $result['errorMessage']='该功能不存在不能修改';
            }
            else{
                if(empty($data['pid'])||$data['pid']==null){
                    $data['pid']=0;
                }
                $result['id']=$model->where("id='".$data['id']."'")->save($data);

                $result['isSuccess']='true';
                $result['errorMessage']='修改功能成功';
            }
        }
        $this->response($result,'json');
    }

    /**
     * 删除功能 FS008 如果删除是父节点时连同子节点也一起删除
     * GET方法  api_address http://your-server-name/public/api.php/Function/delete
     * @param 【必填】    string id           id
     * @return Json 类型{<br>
     *      isSuccess：是否操作 成功，true：删除成功；FALSE：删除失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。
     * }
     */
    public function delete_get(){
        $data=array();
        $result=array();
        $model=M('node');
        $data['id']=I('get.id');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $data['status']=1;
            $model->where("id='".$data['id']."'")->save($data);
            $model->where("pid='".$data['pid']."'")->save($data);
            $result['isSuccess']='true';
        }
        $this->response($result,'json');
    }

    /**
     * 查看功能 FS008 根据ID查看
     * Get方法  api_address http://your-server-name/public/api.php/Function/detail
     * @param string id           id
     * @return Json 类型{<br>
     *      detail{<br>
     *          remark         特殊说明<br>
     *          name           名称<br>
     *          title          标题<br>
     *          pid            父节点ID<br>
     *          level         等级<br>
     *          id            ID<br>
     *      }<br>
     * }
     */
    public function detailNode_get(){
        $data=array();
        $result=array();
        $model=M('node');
        $data['id']=I('get.id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("status=0 and id='".$data['id']."'")->select();
            $result['detail']=$r[0];
        }
        $this->response($result,'json');
    }


    /**
     * 查询功能 FS008
     * Get方法  api_address http://your-server-name/public/api.php/Function/find?pid='1'&name='IBM'&module=0
     * &title='asdf'
     * @param string pid             父节点
     * @param string name            名称 需要(URLENCODE)
     * @param string module          模块
     * @param string title           标题 需要(URLENCODE)
     * @return Json 类型{<br>
     *      list[{<br>
     *          remark         特殊说明<br>
     *          name           名称<br>
     *          title          标题<br>
     *          pId            父节点ID<br>
     *          level         等级<br>
     *          id            ID<br>
     *      }]<br>
     * }
     */
    public function find_get(){
        $data=array();
        $result=array();
        $model=M('node');
        $pid=I('get.pid');
        $name=I('get.name');
        $title=I('get.title');
        $module=I('get.module');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');
        if(!empty($pid)){
            $data['pid']=$pid;
        }
        if(!empty($name)){
            $data['name']=$name;
        }
        if(!empty($title)){
            $data['title']=$title;
        }
        if(!empty($module)){
            $data['module']=$module;
        }
        $data['status']=0;
        $r=$model->where($data)->select();
        $result['list']=array();
        foreach($r as $v){
            $k['id']=$v['id'];
            $k['name']=$v['name'];
            $k['module']=$v['module'];
            $k['title']=$v['title'];
            $k['pId']=$v['pid'];
            array_push($result['list'],$k);
        }
        $this->response($result,'json');
    }

    public function findbyRole_get(){
        $data=array();
        $result=array();
        $model=M('access');
        $level=I('get.level');
        $roleid=I('get.role');
        $role=M('role')->where("id='".$roleid."'")->getfield('int_id');
        $r=$model->where('role_id='.$role." and level=".$level)->select();
        //$this->response($model->getlastsql(),'json');
        $result['list']=array();
        foreach($r as $v){
            $k['id']=$v['node_id'];
            array_push($result['list'],$k);
        }
        $this->response($result,'json');
    }
} 