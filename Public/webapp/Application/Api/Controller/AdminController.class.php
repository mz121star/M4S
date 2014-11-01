<?php
/**
 * Created by PhpStorm.
 * User: lixu
 * Date: 14-9-25
 * Time: 下午8:05
 * Admin管理Controller 包含用例 FS002、FS003
 */

namespace Api\Controller;

class AdminController extends BaseController {

    /**
     * 新增编辑用户  FS002,FS003【修改，新增用户】 ,FS004 <br>
     * POST方法  api_address http://your-server-name/public/api.php/Admin/UpdateAdmin<br>
     *
     * @param  user=>用户名;【必填】;string(20)
     * @param  name=>姓名;【必填】;string(20);需要 URLENCODE
     * @param  department=>部门;int(11)
     * @param  company=> 公司; string(32); Guid
     * @param  telephone=> 电话; string(20)
     * @param  email=>Email ;string(50)
     * @param  remark=> 特殊说明;【  】string(32);需要 URLENCODE
     * @param  password=>密码; 【必填】;string;
     * @param  createuser=>创建者;【必填】;string(32);GUID
     * @param  telephone2=>电话2;string(20)
     * @param  ID=>ID ;string ;新增时有系统自动生成32位，修改时必填
     * @param  role_list=>角色;json;需要URLEncode 格式：{"roleList":[{"role_id":ID},{"role_id":ID}]}
     *
     *  @return Json 类型{<br>
     *      isSuccess：是否操作 成功，true：操作成功；FALSE：操作失败，<br>
     *      errorMessage 错误信息，注册成功时错误信息为空。<br>
     * }
     */
    public function UpdateAdmin_POST(){
        $data=array();
        $result=array();

        $data['id']=I('post.id'); //ID为空新增用户,ID不为空修改用户
        $data=$this->handlerOperInfo(I('post.operuser'),$data['id']);

        $data['status']=0; //0 使用中 1 删除
        $data['remark']=urldecode(I('post.remark'));
        $data['name']=urldecode(I('post.name'));

        $data['department_id']=I('post.department');
        $data['company']=urlencode(I('post.company'));
        $data['telephone']=I('post.telephone');
        $data['email']=I('post.email');
        $data['telephone2']=I('post.telephone2');

        $data['user_name']=I('post.user');
        $data['officephone']=I('post.officephone');
        $data['officephone2']=I('post.officephone2');
        $role=urldecode(I('post.role'));

        $model=M('admin');
        if(!empty($company)){
            $data['company']=M('4s')->where("id='".$data['company']."'")->getField('int_id');
        }

        if(empty($data['id'])||$data['id']==null){
            $count=$model->where("status=0 and user_name='".$data['user_name']."'")->select();

            if(!empty($count)){
                $result['isSuccess']='1';
                $result['errorMessage']='用户名已存在';
            }
            else{
                $data['id']=to_guid_string(time());
                $data['password']=substr(md5('wk'.trim('123456').'cms'),0,20);
                $int_id=$model->data($data)->add();
                $model=M("role_user");
                $role_user['role_id']=M('role')->where("id='".$role."'")->getField('int_id');
                $role_user['user_id']=$int_id;
                $model->data($role_user)->add();
                $result['isSuccess']='0';
            }
        }else{
            $count=$model->where("status=0 and id='".$data['id']."'")->count();
            if($count<=0){
                $result['isSuccess']='1';
                $result['errorMessage']='该用户不存在';
            }
            else{
                $model->where("id='".$data['id']."'")->save($data);
                $int_id=$model->where("id='".$data['id']."'")->getField("int_id");
                $model=M("role_user");
                $model->where("user_id=".$int_id)->delete();
                $role_user['role_id']=M('role')->where("id='".$role."'")->getField('int_id');
                $role_user['user_id']=$int_id;
                $model->data($role_user)->add();
                $result['isSuccess']='0';
            }
        }
        $this->response($result,'json');
    }

    /**
     * 修改密码,重置密码  FS002,FS003【修改，新增用户】 ,FS004 <br>
     * POST方法  api_address http://your-server-name/public/api.php/Admin/UpdateAdmin<br>
     **/
    public function UpdatePassword_POST(){
        $data['password']=I('post.password');
        $data['id']=I('post.id'); //ID为空新增用户,ID不为空修改用户
        $model=M('admin');

        $data['password']=substr(md5('wk'.trim($data['password']).'cms'),0,20);

        $model->where("id='".$data['id']."'")->save($data);
        $result['isSuccess']='true';
        $result['errorMessage']='创建用户成功';
		$this->response($result,'json');
    }

   /**
    * 验证用户名密码是否正确 FS001<br>
    * POST方法  api_address http://your-server-name/public/api.php/Admin/valid<br>
    *
    * @param user=>用户名;【必填】;string
    * @param password=>密码;【必填】;string
    *
    * @return Json 类型{<br>
    *      isSuccess：是否操作 成功，true：用户名密码匹配；FALSE：用户名密码不匹配，<br>
    *      errorMessage 错误信息，注册成功时错误信息为空。                          <br>
    *      user     用户名                                                          <br>
    *      id       返回GUID                                                        <br>
    * }
    */
    public function valid_POST(){
        $data=array();
        $result=array();
        $data['user_name']=I('post.user_id');
        $data['password']=I('post.user_pw');
        $model=M('admin');
        if(empty($data['user_name'])||$data['user_name']==null||empty($data['password'])||$data['password']==null){
            $result['isSuccess']='false';
            $result['errorMessage']="用户名或者密码为空";
        }else{
            $data['password']=substr(md5('wk'.trim($data['password']).'cms'),0,20);

            $count=$model->where("status=0 and user_name='".$data['user_name']."' and password='".$data['password']."'")->select();
            if(!empty($count)){
                $result['isSuccess']='true';
                $result['user']=$count[0]["user_name"];
                $result['id']=$count[0]["id"];
                $model=M('role_user');
                $role_id=$model->where("user_id=".$count[0]["int_id"])->getfield('role_id');
                $role_guid=M('Role')->where("int_id=".$role_id)->getfield('id');
                $result['role_guid']=$role_guid;
                $result['authzs']=array();
                $model=M('access');
                $r=$model->where("role_id=".$role_id)->select();
                foreach($r as $k){
                    if(!empty($k['module'])){
                        array_push($result['authzs'],$k['module']);
                    }
                }
                $model=M('4s');
                $companyid=$model->where("int_id=".$count[0]['company'])->select();
                if(empty($companyid)){
                    $companyid=M('4s_group')->where("int_id=".$count[0]['company'])->select();
                    $condition ['id']=array('in',$companyid[0]['brand']);
                    $brand=M('brand_cartype')->where($condition)->select();
                    $result['brandlist']=array();
                    foreach($brand as $v){
                        $s['id']=$v['int_id'];
                        $s['name']=$v['name'];
                        $s['remark']=$v['remark'];
                        $s['pId']=$v['parent_id'];
                        array_push($result['brandlist'],$s);
                    }
                    $condition['id']=array('in',$companyid[0]['area']);
                    $area=M('area')->where($condition)->select();
                    $result['arealist']=array();
                    foreach($area as $v){
                        $s['id']=$v['int_id'];
                        $s['name']=$v['name'];
                        $s['pId']=$v['parent_id'];
                        array_push($result['arealist'],$s);
                    }
                }else{
                    $condition ['id']=array('in',$companyid[0]['brand']);
                    $brand=M('brand_cartype')->where($condition)->select();
                    $result['brandlist']=array();
                    foreach($brand as $v){
                        $s['id']=$v['int_id'];
                        $s['name']=$v['name'];
                        $s['remark']=$v['remark'];
                        $s['pId']=$v['parent_id'];
                        array_push($result['brandlist'],$s);
                    }
                    $condition['id']=array('in',$companyid[0]['area']);
                    $area=M('area')->where($condition)->select();
                    $result['arealist']=array();
                    foreach($area as $v){
                        $s['id']=$v['int_id'];
                        $s['name']=$v['name'];
                        $s['remark']=$v['remark'];
                        $s['pId']=$v['parent_id'];
                        array_push($result['arealist'],$s);
                    }
                }
            }else{
                $result['isSuccess']='false';
                $result['errorMessage']="密码错误";
            }
        }
        $this->response($result,'json');
    }

    /**
     * 用户管理【删除用户】 FS003<br>
     * GET方法  api_address http://your-server-name/public/api.php/Admin/delete<br>
     *
     * @param ID=>ID;【必填】;string
     *
     * @return Json 类型{<br>
     *      isSuccess：是否操作 成功，true：删除成功；FALSE：删除失败，<br>
     *      errorMessage 错误信息，删除成功时错误信息为空。<br>
     * }
     */
    public function delete_get(){
        $data=array();
        $result=array();
        $model=M('admin');
        $data['ID']=I('get.ID');
        if(empty($data['ID'])){
            $result['isSuccess']='1';
            $result['errorMessage']='ID不能为空';
        }else{
            $data['deleted']=1;
            $model->where("ID='".$data['ID']."'")->save($data);
            $result['isSuccess']='0';
        }
        $this->response($result,'json');
    }

    /**
     * 用户管理【查看用户】 FS003<br>
     * Get方法  api_address http://your-server-name/public/api.php/Admin/detail<br>
     *
     * @param ID=>ID;string
     *
     * @return Json 类型{<br>
     *      detail{<br>
     *          remark         特殊说明<br>
     *          name           用户名<br>
     *          department_ID     部门<br>
     *          company        公司<br>
     *          telephone      电话<br>
     *          email          Email<br>
     *          user_name      用户名<br>
     *          password       密码<br>
     *          create_user     创建者<br>
     *          create_datetime 创建时间<br>
     *          telephone2     电话2<br>
     *          ID              ID<br>
     *      }<br>
     * }
     *
     * 例如：<br>
     * 输入：http://your-server-name/public/api.php/Admin/detail<br>
     * 输出：{"detail":{"remark":"test","name":"lixu","department_id":"guid()","company":"guid()","telephone":"123123","email":"te@so.com","user_name":"test","telephone2":"123123"}}<br>
     */
    public function detail_get(){
        $data=array();
        $result=array();
        $model=M('admin');
        $data['id']=I('get.id');

        if(empty($data['id'])||$data['id']==null){
            $result['isSuccess']='1';
            $result['errorMessage']='ID不能为空';
        }else{
            $r=$model->where("status=0 and id='".$data['id']."'")->select();
            $result['detail']['id']=$r[0]['id'];
            $role_id=M('role_user')->where("user_id=".$r[0]['int_id'])->getfield("role_id");
            $result['detail']['role']=M('role')->where("int_id=".$role_id)->getfield("id");

            $result['detail']['status']=$r[0]['status'];
            $result['detail']['name']=$r[0]['name'];
            $result['detail']['remark']=$r[0]['remark'];
            $result['detail']['departmentid']=$r[0]['department_id'];
            $result['detail']['company']=$r[0]['company'];

            $result['detail']['telephone']=$r[0]['telephone'];
            $result['detail']['telephone2']=$r[0]['telephone2'];
            $result['detail']['email']=$r[0]['email'];

            $result['detail']['user']=$r[0]['user_name'];
            $result['detail']['officephone']=$r[0]['officephone'];
            $result['detail']['officephone2']=$r[0]['officephone2'];

        }
        $this->response($result,'json');
    }


    /**
     * 用户管理【查找用户】 FS003 <br>
     * Get方法  api_address http://your-server-name/public/api.php/Admin/find?user='felix'&company='IBM'&status=0&pagesize=20<br>
     * &pagenum=1
     *
     * @param string user           用户名
     * @param string company        所属客户
     * @param string status         是否包含历史数据 0：不包含；1：包含
     * @param int    pagesize
     * @param int    pagenum
     *
     * @return Json 类型{<br>
     *      list[{<br>
     *          Company         公司<br>
     *          user           用户名<br>
     *          name           姓名<br>
     *          ID              ID<br>
     *          Status          是否被删除<br>
     *      }]<br>
     * }
     *
     * 例如：<br>
     * 输入：http://your-server-name/public/api.php/Admin/find?user='felix'&company='IBM'&status=0&pagesize=20<br>
     * 输出：{"list":[{"company":"test","user":"lixu","name":"felix","id":"asd","Status":"0"}]}<br>
     */
    public function find_get(){
        $data=array();
        $result=array();
        $model=M('admin');
        $company=I('get.company');
        $user=I('get.user');
        $status=I('get.status');
        $pagesize = I('get.pagesize');
        $pagenum=I('get.pagenum');
        if(!empty($company)){
            $data['company']=$company;
        }
        if(!empty($user)){
            $data['user_name']=array('like','%'.$user.'%');
        }
		if(!empty($status)){
			$data['status']=$status;
		}

        $data['deleted']=0;
        $r=$model->where($data)->order('int_id desc')->page(intval($pagenum),intval($pagesize))->select();
        $result['list']=array();
        foreach($r as $k=>$v){
            $kk['id']=$v['id'];
            $kk['name']=$v['name'];
            $kk['user']=$v['user_name'];
            $kk['company']=$v['company'];
            $kk['line']=$k+1;
            $kk['companyName']=M('4s')->where("id='".$v['company']."'")->getfield("name");
            if(empty($kk['companyName'])){
                $kk['companyName']=M('4s_group')->where("id='".$v['company']."'")->getfield("name");
            }
            array_push($result['list'],$kk);
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