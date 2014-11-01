<?php
namespace Api\Controller;

//----------------------------------
// CarHealthyController 车健康Controller
//----------------------------------
class CarHealthyController extends BaseController {
    /**
     * FS014 车健康指标管理【查询】
     * GET方法 api_address http://your-server-name/api.php/carhealthy/list_component?name="123"&status=0&brand=12&id=12;
     * @param       name    名称                      需要UrlEnCode;
     * @param       status  是否包含历史数据
     * @param       brand   商标
     * @param       id      id
     * @return json{ <br>
     *      list[{  <br>
     *          id           GUID               <br>
     *          name         名称               <br>
     *          rated_frequency     周期           <br>
     *          brand_id      商标               <br>
     *      }]      <br>
     * }<br>
     */
    public function FindComponent_get(){
        $data=array();
        $name=urldecode(I('get.name'));
        $status=I('get.status');
		$brand=I('get.brand');
        $model = M('component');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');
        $data['deleted']=0;
		if(!empty($name)){
			$data['name']=array('like','%'.$name.'%');
		}
		if(!empty($status)){
			$data['satuts']=$status;
		}
		if(!empty($brand)){
			$data['brand']=$brand;
		}
        $r=$model->where($data)->page($pagenum,$pagesize)->select();
        $result['list'] = array();
        foreach($r as $v){
            $company=getbrandid($v['brand_id']);
            $t['id']=$v['id'];
            $t['name']=$v['name'];
            $t['remark']=$v['remark'];
            $t['rated_frequency']=$v['rated_frequency'];
            $t['TypeName']="";
            $t['brand']=$v['brand_id'];
            $t['status']=$v['status'];
            $t['brandName']=M('brand_cartype')->where("int_id=".$v['brand_id'])->getfield("name");
            foreach($company as $vv){
                $t['TypeName']=$vv['name'];
            }
            array_push($result['list'],$t);
        }
        $result['pagenum']=$pagenum;
        $count=$model->where($data)->count();
        if(intval($count)%intval($pagesize)!=0){
            $result['pagecount']=floor((intval($count)/intval($pagesize)))+1;
        }else{
            $result['pagecount']=floor((intval($count)/intval($pagesize)));
        }
        $this->response($result, 'json');
    }

    /**
     *  创建/修改 车健康指标 FS015
     *  POST方法   api_address http://your-server-name/api.php/CarHealthy/UpdateComponent
     *  @param          string id           GUID      新增时为空，修改时不为空
     *  @param 【必填】 int createuser      创建用户  新增时默认是当前用户
     *  @param 【必填】 string creatdate    创建日期  格式：YYYY-MM-DD 新增时默认为当前日期
     *  @param          int modifyuser      修改用户  新增时默认是创建用户，修改时候必填
     *  @param          string modifydate   修改日期  格式：YYYY-MM-DD 修改是默认是当前日期
     *  @param          int    status       0启用，1不启用。 默认为0
     *  @param          int    sort         排序字段
     *  @param          string remark       备注              需要UrlEnCode
     *  @param  【必填】string name         名称              需要UrlEnCode
     *  @param  【必填】int    brand        商标
     *  @param  【必填】int    rated_frequency    额定周期（天）
     *  @return Json 类型{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，注册成功时错误信息为空。
     * }
     *
     */
    public function UpdateComponent_POST(){
        $model=M('component');
        $data=array();
        $data['id']=I('post.id');
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);
        $data['status']=I('post.status');
        $data['sort']=I('post.sort');
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));

        $data['groups']=I('post.groups');
        $data['company']=I('post.company');
        $data['rated_frequency']=I('post.rated_frequency');
        $data['deleted']=0;
        if(!empty($data['brand_id'])){
            $data['brand_id']=M('brand_cartype')->where("id='".$data['brand_id']."'")->getfield("int_id");
        }
        if(empty($data['id'])){
            $data['id']=to_guid_string(time());
            $model->data($data)->add();
        }else{
            $model->where("id='".$data['id']."'")->save($data);
        }
        $result['isSuccess']='true';
        $result['errorMessage']='创建客户成功';
        $this->response($result,'json');
    }


    /**
     * 车健康指标【删除车健康指标】 FS014
     * GET方法  api_address http://your-server-name/public/api.php/CarHealthy/deleteComponent
     * @param   【必填】  string id           id
     * @return Json 类型{<br>
     *      isSuccess：是否操作 成功，true：删除成功；FALSE：删除失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。
     * }
     */
    public function DeleteComponent_get(){
        $data=array();
        $result=array();
        $data['id']=I('get.id');
        $model=M('component');
        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='id不能为空';
        }else{
            $data['deleted']=1;
            $model->where("id='".$data['id']."'")->save($data);
            $result['isSuccess']='true';
        }
        $this->response($result,'json');
    }

    public function DetailComponent_get(){
        $data=array();
        $data['id']=I('get.id');
        $model = M('component');

        $r=$model->where($data)->select();
        $result['detail']['id']=$r[0]['id'];
        $result['detail']['name']=$r[0]['name'];
        $result['detail']['remark']=$r[0]['remark'];
        $result['detail']['rated_frequency']=$r[0]['rated_frequency'];
        $result['detail']['groups']=$r[0]['groups'];
        $result['detail']['company']=$r[0]['company'];
        //$result['detail']['brand']=M('brand_cartype')->where("int_id=".$r[0]['brand_id'])->getfield("id");
        $result['detail']['status']=$r[0]['status'];
        $this->response($result,'json');
    }

    public function SetBrand_POST(){
        $data=array();
        $result=array();
        $data['id']=I('post.id');
        $brand=urldecode(I('post.brand'));
        $model=M('component');
        $tt=json_decode($brand);
        $id_arr=array();
        $m_data=array();
        foreach($tt->list as $k){
            $id_arr[]=$k->id;
            $arr=array();
            $arr['component_id']=$data['id'];
            $arr['brand_id']=$k->id;
            $m_data[]=$arr;
        }
        $ids=implode(',',$id_arr);
        $data['brand']=$ids;
        insertMiddleTable('component_id',$m_data,'component_brand','component_id','brand_id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='false';
            $result['errorMessage']='ID不能为空';
        }else{
            $model->where("id='".$data['id']."'")->save($data);
        }
        $this->response($result,'json');
    }

    public function findbrand_get(){
        $result=array();
        $model=M('component');
        $id=I('get.id');
        $r=$model->where("id='".$id."'")->getfield("barand");
        $result['list']=explode(',',$r);
        $this->response($result,'json');
    }

    public function UpdateRepair_POST(){
        $carLicenseNo= I('post.car_number');

        $serviceDate= I('post.datetime');
        $parts= I('post.component');
        $description= I('post.description');

        $car=M('car');
        $carid=$car->where('car_number='."'".UrlDeCode($carLicenseNo)."'")->getField('id');


        $date['modify_datetime']=$serviceDate;
        $date['remark']=$description;
        $date['car_id']=$carid;
        $date['component_id']=$parts;

        M('health_fix_detail')->data($date)->add();
        $result->isSuccess='true';

        $this->response($result, 'json');
    }

    public function DetailRepair_get(){
        $data=array();
        $result=array();
        $model=M('health_fix');
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
        }
        $this->response($result,'json');
    }
}
?>