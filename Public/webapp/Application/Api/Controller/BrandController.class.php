<?php
/**
 * Created by PhpStorm.
 * User: lixu
 * Date: 14-9-27
 * Time: 下午9:04
 */

namespace Api\Controller;


class BrandController extends BaseController {

    /**
     * 新增/编辑车型
     * POST方法  api_address http://your-server-name/public/api.php/Template/UpdateBrand
     *  @param          string id           GUID      新增时为空，修改时不为空
     *  @param 【必填】 int createuser      创建用户  新增时默认是当前用户
     *  @param 【必填】 string creatdate    创建日期  格式：YYYY-MM-DD 新增时默认为当前日期
     *  @param          int modifyuser      修改用户  新增时默认是创建用户，修改时候必填
     *  @param          string modifydate   修改日期  格式：YYYY-MM-DD 修改是默认是当前日期
     *  @param          int    status       0启用，1不启用。 默认为0
     *  @param          int    sort         排序字段
     *  @param  【必填】string remark       标记              需要UrlEnCode
     *  @param  【必填】string name         名称              需要UrlEnCode
     *  @param            int  category     分类
     *  @param            byte[]  img     品牌              需要UrlEnCode
     *  @return Json 返回JSON数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息.
     * }
     */
    public function UpdateBrand_POST(){
        $data=array();
        $result=array();
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);
        $data['id']=I('post.id');
        $data['status']=I('post.status');
        $data['sort']=I('post.sort');
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));
        $data['parent_id']=I('post.pId');
        $data['parent_guid']=I('post.pId');
        $model=M('brand_cartype');
        if(empty($data['id'])||$data['id']==null){
            $data['id']=to_guid_string(time());

            if(empty($data['status'])){
                $data['status']=0;
            }
            $data['deleted']=0;
            $data['isleaf']=0;
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
                $model->where(" id='".$data['id']."'")->save($data);
                $result['isSuccess']='true';
                $result['errorMessage']='修改成功';
            }
        }
        $result["id"]=$data['id'];
        $this->response($result,'json');
    }

    /**
     * 删除车型
     * GET方法  api_address http://your-server-name/public/api.php/Template/DeleteBrand
     * @param  【必填】      string id           id
     * @return Json 返回数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。
     * }
     * }
     */
    public function DeleteBrand_get(){
        $data=array();
        $result=array();
        $model=M('brand_cartype');
        $data['id']=I('get.id');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $data['deleted']=1;
            $model->where("id='".$data['id']."'")->save($data);
            $data1['isleaf']=0;
            $model->where("int_id=".$data['pid'])->save($data1);
            $result['isSuccess']='true';
        }
        $this->response($result,'json');
    }

    /**
     * 查看车型明细
     * Get方法  api_address http://your-server-name/public/api.php/Template/DetailBrand
     * @param string id           id
     * @return Json 返回数据{<br>
     *      detail{<br>
     *          remark          标记     <br>
     *          name            名称    <br>
     *          id             id<br>
     *      }<br>
     * }
     */
    public function DetailBrand_get(){
        $data=array();
        $result=array();
        $model=M('brand_cartype');
        $data['id']=I('get.id');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("deleted=0 and id='".$data['id']."'")->find();
            $result['detail']['id']=$r['id'];
            $result['detail']['name']=$r['name'];
            $result['detail']['content']=$r['content'];
            $result['detail']['remark']=$r['remark'];
            $result['detail']['company']=$r['4s_id'];
            $result['detail']['brand']=$r['brand_id'];
            $result['detail']['pId']=$r['parent_guid'];
        }
        $this->response($result,'json');
    }


    /**
     * 查看模板
     * Get方法  api_address http://your-server-name/public/api.php/Role/FindBrand?name='test'&status=0&category='IBM'
     * &barnd=1&4s=1
     * @param string name           名称          需要 URLENCODE
     * @param string category        分类
     * @param string status         状态
     * @param string brand         品牌
     * @param string 4S            4S
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
    public function FindBrand_get(){
        $data=array();
        $result=array();
        $model=M('brand_cartype');
        if(empty($status)||$status==null||$status=='0'){
            $data['deleted']=0;
        }
        $r=$model->where($data)->select();
        $result['list']=array();
        if(empty($r)){
            $result['list']=null;
        }else{
            foreach($r as $v){
                $s['id']=$v['id'];
                $s['name']=$v['name'];
                $s['remark']=$v['remark'];
                $s['pId']=$v['parent_guid'];
                array_push($result['list'],$s);
            }
        }
        $this->response($result,'json');
    }


    public function GetBrandForDropDownlist_get(){
        $data=array();
        $result=array();
        $model=M('brand_cartype');
        if(empty($status)||$status==null||$status=='0'){
            $data['deleted']=0;
            $data['status']=0;
            $r=$model->where($data)->select();
        }
        $result['list']=array();
        if(empty($r)){
            $result['list']=null;
        }else{
            foreach($r as $v){
                $s['id']=$v['id'];
                $s['name']=$v['name'];
                array_push($result['list'],$s);
            }
        }
        $this->response($result,'json');
    }
} 