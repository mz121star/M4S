<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// CarHealthyController 车健康Controller
//----------------------------------
class CarHealthyController extends RestController {
        /**
         * 车健康部件接口 INF008
         * GET方法 api_address http://your-server-name/public/index.php/Home/CarHealthy/carPartsList?phoneNo=12&carLicenseNo=%E8%BE%BDB6666
         *  @param string phoneNo 电话号码
         *  @param string carLicenseNo  车牌号
         *  @return  /json<br>
         *  {<br>
         *      carpartlist[{<br>
         *          Img:图片URL,
         *          Name:名称,
         *          rated_frequency：可定周期,
         *          weight:权重
         *      }]<br>
         * }<br>
         */
    	public function carPartsList_get(){
            $phoneNo= I('get.phoneNo');
    		$carLicenseNo= I('get.carLicenseNo');
            $car=M('car');
            $brand=$car->where('car_number='."'".UrlDeCode($carLicenseNo)."'")->getField('brand');

            if(intval($brand)>0){
                $list=M('component')->where("brand_id=".$brand."")->select();
                foreach($list as $k=>$v){
                    $result->carpartlist[$k]['Img']='';
                    $result->carpartlist[$k]['name']=$v[0];
                    $result->carpartlist[$k]['rated_frequency']=$v[1];
                    $result->carpartlist[$k]['weight']=20;
                }
            }
            $this->response($result, 'json');
    	}


        /**
         * 车健康维修记录 INF009
         * GET方法 api_address http://your-server-name/public/index.php/Home/CarHealthy/carRepairList?phoneNo=123&
         * phoneSerialNo=12&carLicenseNo=%E8%BE%BDB6666&pagesize=10&pagenum=2&pagecount=20
         *  @param string phoneSerialNo 手机序列号
         *  @param string phoneNo   手机号
         *  @param string carLicenseNo  车牌号
         *  @param string pageSize
         *  @param string pageNum
         *  @param string pageNum
         * @return  /json <br>
         *  {<br>
         *      carRepairList[{<br>
         *          RepairTime:维修时间,
         *          Name:名称
         *      }]<br>
         * }<br>
         */
    	public function carRepairList_get(){
            $phoneSerialNo= I('get.phoneSerialNo');
    		$carLicenseNo= I('get.carLicenseNo');
		    $pagesize= I('get.pageszie');
		    $pagenum= I('get.pagenum');
		    $pagecount= I('get.pagecount');
            $phoneNo=I('get.phonNo');

            $car=M('car');
            $carid=$car->where('car_number='."'".UrlDeCode($carLicenseNo)."'")->getField('id');
            if(!empty($carid)){
                $list=M('health_fix')->where("car_id='".$carid."'")->getField('name,create_datetime');
                foreach($list as $k=>$v){
                    $result->carRepairList[$k]['RepairTime']=$v['modify_time'];
                    $result->carRepairList[$k]['name']=$v['name'];
                }
            }
            $this->response($result, 'json');
    	}

        /**
         *  新增/编辑车健康维修记录接口޼INF010
         *  POST方法 api_address http://your-server-name/public/index.php/Home/CarHealthy/UpdateCarRepair
         *  string phoneSerialNo 序列号
         *  string carLicenseNo  车牌号
         *  serviceID / string   维修记录ID
         *  serviceDate / date   维修日期
         *  parts / string       车部件
         *  description / string 描述
         *  @return Json 类型{<br>
         *      isSuccess：是否注册成功，true：注册成功；FALSE：注册失败，<br>
         *      ErrorMessage 错误信息，注册成功时错误信息为空。
         * }
         */
    	public function UpdateCarRepair_POST(){
            $phoneSerialNo= I('post.phoneSerialNo');
    		$carLicenseNo= I('post.carLicenseNo');
		    $serviceID= I('post.serviceID');
		    $serviceDate= I('post.serviceDate');
		    $parts= I('post.parts');
		    $description= I('post.description');

            $car=M('car');
            $carid=$car->where('car_number='."'".UrlDeCode($carLicenseNo)."'")->getField('id');

            $date['id']=$serviceID;
            $date['modify_datetime']=$serviceDate;
            $date['remark']=$description;
            $date['car_id']=$carid;

            if(!empty($carid)){
                if(!empty($carid)){
                    M('health_fix')->data($date)->add();
                    $result->isSuccess='true';
                }else{
                    M('health_fix')->where("id='".$serviceID."'")->save($data);
                    $result->isSuccess='true';
                    $this->response(M('health_fix')->getLastSql(), 'json');
                }
            }
            $this->response(M('health_fix')->getLastSql(), 'json');
    	}


        /**
         *  车维修记录详情接口 INF011
         * GET方法 api_address http://your-server-name/public/index.php/Home/CarHealthy/CarRepairDetail
         * ?phoneNo=123$serviceID=1&userID=1
         *  string phoneNo 电话号码
         *  serviceID / string 维修记录ID
         *  uerID / string 用户ID
         * @return  /json<br>
         *  {<br>
         *      detail{<br>
         *          ServerID:id
         *          ServerDate:维修时间,
         *          Name:名称,
         *          Img:图片
         *      }<br>
         * }<br>
         */
    	public function CarRepairDetail_get(){
            $phoneNo= I('get.phoneNo');
    		$uerID= I('get.uerID');
		    $serviceID= I('get.serviceID');
            $detail=M('health_fix_detail')->where("id='".$serviceID." '")->select();
            $result->detail['ServerID']=$detail['id'];
            $result->detail['ServerDate']=$detail['modify_time'];
            $result->detail['Img']='';
            $result->detail['Name']=$detail['name'];
            $this->response($result, 'json');
    	}

}
?>