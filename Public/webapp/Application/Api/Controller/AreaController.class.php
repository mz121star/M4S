<?php
/**
 * Created by PhpStorm.
 * User: lixu
 * Date: 14-9-26
 * Time: 下午8:01
 */

namespace Api\Controller;


class AreaController extends BaseController {
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
    public function UpdateArea_POST(){
        $result=array();
        $data=array();

        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);
        $data['id']=I('post.id');
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));
        $data['parent_id']=I('post.pId');
        $data['parent_guid']=I('post.pId');
        $data['sort']=I('post.sort');
        $data['level']=I('post.level');
        $data['status']=0; //0 使用中 1 删除

        $model=M('area');
        if(!empty($data['parent_id'])){
            $res=$model->where("id='".$data['parent_id']."'")->find();
        }
        if(empty($data['id'])||$data['id']==null){
            if(empty($data['parent_id'])||$data['parent_id']==null){
                $data['parent_id']=0;
            }
            $data['id']=to_guid_string(time());
            if($res){
                $data['id_line']=$res['id_line'].'.'.$res['int_id'];
            }else{
                $data['id_line']=1;
            }

            $result['id']=$model->data($data)->add();
            $result['isSuccess']='0';
        }else{
            $count=$model->where("id='".$data['id']."'")->select();
            if(empty($count)){
                $result['isSuccess']='1';
            }
            else{
                if(empty($data['parent_id'])||$data['parent_id']==null){
                    $data['parent_id']=0;
                }
                $result['id']=$model->where("id='".$data['id']."'")->save($data);
                $result['isSuccess']='0';
            }
        }
        $result["id"]=$data['id'];
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
    public function DeleteArea_get(){
        $data=array();
        $result=array();
        $model=M('Area');
        $data['id']=I('get.id');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $d_data['deleted']=1;
            $res=$model->where("int_id='".$data['id']."'")->find();
            $model->where("int_id='".$data['id']."'")->save($d_data);
            $children_line=$res['id_line'].'.'.$res['int_id'];
            $where['id_line']=array('like',$children_line.'%');
            $model->where($where)->save($d_data);
//            $model->where("parent_id='".$data['pid']."'")->save($data);
            $data1['isleaf']=1;
            $model->where("int_id=".$data['pid'])->save($data1);
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
    public function DetailArea_get(){
        $data=array();
        $result=array();
        $model=M('Area');
        $data['id']=I('get.id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("int_id='".$data['id']."'")->select();
            S('1',$r);
            $result['detail']=$r[0];
            $result['detail']['pId']=$r[0]['parent_id'];
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
    public function FindArea_get(){
        $data=array();
        $result=array();
        $model=M('Area');
        $pid=I('get.pid');
        $name=I('get.name');
        $title=I('get.title');
        $module=I('get.module');
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
        $data['deleted']=0;
        $r=$model->where($data)->select();

        $result['list']=array();
        foreach($r as $v){
            $k['id']=$v['int_id'];
            $k['name']=$v['name'];
            $k['pId']=$v['parent_id'];
            array_push($result['list'],$k);
        }
        $this->response($result,'json');
    }
} 