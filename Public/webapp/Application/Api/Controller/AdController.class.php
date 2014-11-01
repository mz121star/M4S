<?php
/**
 * Created by PhpStorm.
 * User: lixu
 * Date: 14-9-27
 * Time: 下午9:04
 */

namespace Api\Controller;

class AdController extends BaseController {


    /**
     * 新增/编辑广告    FS020
     * POST方法  api_address http://your-server-name/public/api.php/Ad/UpdateAd
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
     *  @return Json 返回JSON数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息.
     * }
     */
    public function UpdateAd_POST(){
        $data=array();
        $result=array();
        $data['num']=I('post.num');
        $data['id']=I('post.id');
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);

        $data['status']=I('post.status');
        $data['sort']=I('post.sort');
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));
        $data['ad_category']=urldecode(I('post.ad_category'));
        $data['ad_content']=urldecode(I('post.content'));
        $data['ad_category_id']=urldecode(I('post.ad_category_id'));
        $data['view_count']=urldecode(I('post.view_count'));
        $data['begin_datetime']=I('post.begintime');
        $data['end_datetime']=I('post.endtime');
        $data['desc']=I('post.desc');

        $data['validatetime']=I('post.validatetime');
        $data['groups']=I('post.groups');
        $data['company']=I('post.company');
        $model=M('ad');

        if(empty($data['status'])){
            $data['status']=0;
        }
        //$this->response($data,'json');

        //ID为空表示新增
        if(empty($data['id'])||$data['id']==null){
            $num='ADV'.strval(date('Ym',time())).str_pad(strval($model->count()),4,'0',STR_PAD_LEFT);
            $data['num']=$num;
            $data['id']=to_guid_string(time());


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

        $this->response($result,'json');
    }

    /**
     * FS020 广告管理【删除广告】
     * GET方法  api_address http://your-server-name/public/api.php/Ad/DeleteAd
     * @param  【必填】      string id           id
     * @return Json 返回数据{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。
     * }
     * }
     */
    public function DeleteAd_get(){
        $data=array();
        $result=array();
        $model=M('ad');
        $data['id']=I('get.id');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $data['deleted']=1;
            $model->where("id='".$data['id']."'")->save($data);
            $this->response($model->getlastsql(),'json');
            $result['isSuccess']='true';
        }
        $this->response($result,'json');
    }

    /**
     * FS020 广告管理【查看广告明细】鿴
     * Get方法  api_address http://your-server-name/public/api.php/ad/Detailad
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
    public function DetailAd_get(){
        $data=array();
        $result=array();
        $model=M('ad');
        $data['id']=I('get.id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("deleted=0 and id='".$data['id']."'")->find();
            $result['detail']['id']=$r['id'];
            $result['detail']['name']=$r['name'];
            $result['detail']['remark']=$r['remark'];
            $result['detail']['status']=$r['status'];
            $result['detail']['sort']=$r['sort'];
            $result['detail']['content']=$r['AD_content'];
            $result['detail']['ad_category']=$r['AD_category'];
            $result['detail']['ad_category_id']=$r['AD_category_ID'];

            $result['detail']['view_count']=$r['view_count'];
            $result['detail']['begintime']=$r['begin_datetime'];
            $result['detail']['endtime']=$r['end_datetime'];
            $result['detail']['desc']=$r['desc'];
            $result['detail']['validatetime']=$r['validatetime'];

            $result['detail']['groups']=$r['groups'];
            $result['detail']['company']=$r['company'];
        }
        $this->response($result,'json');
    }


    /**
     * FS013模板管理
     * Get方法  api_address http://your-server-name/public/api.php/Role/FindTemplate?name='test'&status=0&category='IBM'
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
    public function FindAd_get(){
        $data=array();
        $result=array();
        $model=M('Ad');
        $category=I('get.category');
        $name=urldecode(I('get.name'));
        $status=I('get.status');
        $brand=I('get.brand');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');
        $level=I('get.level');
        $userid=I('get.userid');
        $company=M('Admin')->where("ID='".$userid."'")->getfield('company');

        //集团客户能看4S店和集团的新闻
        if($level==2){
            $data['groups']=$company;
        }
        //4S店能看4S店的新闻
        if($level==1){
            $data['$company']=$company;
        }
        if(!empty($category)){
            $data['category']=$category;
        }
        if(!empty($name)){
            $data['name']=array('like','%'.$name.'%');
        }
		$data['deleted']=0;
        if(!empty($status)){
            $data['status']=intval($status);
        }
         $r=$model->where($data)->page($pagenum,$pagesize)->select();

        $result['list']=array();
        if(empty($r)){
            $result['list']=null;
        }else{
            foreach($r as $k=>$v){
                $s['id']=$v['id'];
                $s['name']=$v['name'];
                $s['num']=$v['num'];
                $s['begintime']=$v['begin_datetime'];
                $s['endtime']=$v['end_datetime'];
                $s['company']=$v['company'];
                $s['companyName']=M('4s')->where("id='".$v['company']."'")->getfield("name");
                $s['groups']=$v['groups'];
                $s['groupsname']=M('4s_group')->where("id='".$v['groups']."'")->getfield("name");
                $s['line']=$k+1;
                $s['status']=$v['status'];
                $s['validatetime']=$v['validatetime'];
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

    public function SetArea_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $area=urldecode(I('post.area'));
        $model=M('ad');
        $tt=json_decode($area);
        $id_arr=array();
        $m_data=array();
        foreach($tt->list as $k){
            $id_arr[]=$k->id;
            $arr=array();
            $arr['ad_id']=$data['id'];
            $arr['area_id']=$k->id;
            $m_data[]=$arr;
        }
        $ids=implode(',',$id_arr);
        $data['area']=$ids;
        insertMiddleTable('ad_id',$m_data,'ad_area','ad_id','area_id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $model->where("id='".$data['id']."'")->save($data);
        }
        $this->response($result,'json');
    }

    public function SetBrand_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $brand=urldecode(I('post.brand'));
        $model=M('ad');
        $tt=json_decode($brand);
        $id_arr=array();
        $m_data=array();
        foreach($tt->list as $k){
            $id_arr[]=$k->id;
            $arr=array();
            $arr['ad_id']=$data['id'];
            $arr['brand_id']=$k->id;
            $m_data[]=$arr;
        }
        $ids=implode(',',$id_arr);
        $data['brand']=$ids;
        insertMiddleTable('ad_id',$m_data,'ad_brand','ad_id','brand_id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $model->where("id='".$data['id']."'")->save($data);
        }
        $this->response($result,'json');
    }

    public function finderea_get(){
        $result=array();
        $model=M('ad');
        $id=I('get.id');
        $r=$model->where("id='".$id."'")->getfield("area");
        $result['list']=explode(',',$r);
        $this->response($result,'json');
    }

    public function findbrand_get(){
        $result=array();
        $model=M('ad');
        $id=I('get.id');
        $r=$model->where("id='".$id."'")->getfield("barand");
        $result['list']=explode(',',$r);
        $this->response($result,'json');
    }
} 