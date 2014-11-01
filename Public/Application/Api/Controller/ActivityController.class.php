<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// ActivityControl 活动列表的接口
//----------------------------------
class ActivityController extends RestController {
	    /**
         * 获取活动列表接口 INF005
         * GET 方法 api_address http://your-server-name/public/index.php/Home/Activity/list?ownerid=1&carLicenseNo=%E8%BE%BDB6666&pageszie=1&pagenum=2&pagecount=23
         * @param string ownerid  用户ID
         * @param string carLicenseNo 用户车牌号
         * @param string pageszie
         * @param string pagenum
         * @param string pagecount
         * @return ꣬活动列表,json
         * {
         *      errorMessage:错误信息,返回成功时错误信息为空,否则显示错误原因, <br>
         *      ActivityInfoList[{<br>
         *          id: 活动ID，<br>
         *          name:活动名称,<br>
         *          view_count: 活动浏览次数,<br>
         *          JoinCount: 参加人数,<br>
         *          Img:图片地址<br>
         *      }]<br>
         * }<br>
         */
	public function list_get(){
		$ownerid = I('get.ownerid');
		$carLicenseNo= UrlDeCode(I('get.carLicenseNo'));
		$pagesize= I('get.pageszie');
		$pagenum= I('get.pagenum');
		$pagecount= I('get.pagecount');

		//根据CAR 查找活动
		$car = M('car');
		$brand=$car->where('owner_id='."'".strval($ownerid)."'". ' and car_number='."'".UrlDeCode($carLicenseNo)."'")->getField('brand');
		$activity_brand=M('activty_brand');
		$brand_activity=$activity_brand->where('brand_id='."'".strval($brand)."'")->select();

        $result->ActivityInfoList=array();
        foreach ($brand_activity as $key=> $value){
            $detail=M('actitiy_category')->where('id='."'".$value['activity_id']."'")->getField("id,name,view_count");
            $JoinCount=M('activity_enroll')->where('activity_id='."'".$value['activity_id']."'")->count();
            if($detail[1]['id']!=null){
                $result->ActivityInfoList[$key]['id']=$detail[1]['id'];
                $result->ActivityInfoList[$key]['name']=$detail[1]['name'];
                $result->ActivityInfoList[$key]['view_count']=$detail[1]['view_count'];
                $result->ActivityInfoList[$key]['JoinCount']=$JoinCount;
                $result->ActivityInfoList[$key]['Img']='';
            }
        }
		$this->response($result, 'json');
	}

        /**
         * 获取活动列表接口 INF006
         * GET方法 api_address http://your-server-name/public/index.php/Home/Activity/detail?activityID=1&phoneNo=1&phoneSerialNo=2&carLicenseNo=%E8%BE%BDB6666
         * @param string activityID   活动ID
         * @param string pageszie
         * @param string pagenum
         * @param string carLicenseNo 用户车牌号
         * @return ꣬活动详情,json<br>
         * {<br>
         *      ActivityDetail  活动详细{<br>
         *          'ID': ID,<br>
         *          'Name':'活动标题',<br>
         *          'JoinCount':活动报名人数,<br>
         *          'desc':'活动描述',<br>
         *          'Img':'图片',<br>
         *          'begin_datetime'：'活动开始时间',<br>
         *          'end_datetime':'活动结束时间',<br>
         *          'area':'活动区域',<br>
         *          'view_count'：浏览次数<br>
         *      }<br>
         * }<br>
         */
    	public function detail_get(){
    		$activityID = I('get.activityID');
            $phoneNo= I('get.phoneNo');
            $phoneSerialNo= I('get.phoneSerialNo');
    		$carLicenseNo= UrlDeCode(I('get.carLicenseNo'));

            $detail=M('actitiy_category')->where('id='."'".$activityID."'")->getField("id,name,view_count,desc,begin_datetime,end_datetime");
            $JoinCount=M('activity_enroll')->where('activity_id='."'".$activityID."'")->count();
            $area=M('activity_area')->where('activity_id='."'".$activityID."'")->count();
            if($detail[1]['id']!=null){
                $result->ActivityDetail['id']=$detail[1]['id'];
                $result->ActivityDetail['name']=$detail[1]['name'];
                $result->ActivityDetail['JoinCount']=$JoinCount;
                $result->ActivityDetail['Img']='';
                $result->ActivityDetail['desc']=$detail[1]['desc'];
                $result->ActivityDetail['begin_datetime']=$detail[1]['begin_datetime'];
                $result->ActivityDetail['end_datetime']=$detail[1]['end_datetime'];
                $result->ActivityDetail['area']=$area;
                $result->ActivityDetail['view_count']=$detail[1]['view_count'];
            }

            $detail[1]['view_count'] = intval($detail[1]['view_count'])+1;
            M('actitiy_category')->where('id='."'".$activityID."'")->save($detail[1]);

    		$this->response($result, 'json');
    	}


        /**
         * 活动报名接口 INF007
         * POST方法 api_address http://your-server-name/public/index.php/Home/Activity/join
         * @param string activityID   活动ID
         * @param string phoneNo      电话号码
         * @param string phoneSerialNo 电话序列号
         * @param string carLicenseNo 用户车牌号
         * @return Json 报名是否成功<br>
         * {<br>
         *      isSuccess：是否注册成功，true：注册成功；FALSE：注册失败，<br>
         *      ErrorMessage 错误信息，注册成功时错误信息为空。<br>
         * }
         */
    	public function join_POST(){
    		$activityID = I('post.activityID');
            $phoneNo= I('post.phoneNo');
            $phoneSerialNo= I('post.phoneSerialNo');
    		$carLicenseNo= UrlDeCode(I('post.carLicenseNo'));

            $carid=M('Car')->where('car_number='."'".strval($carLicenseNo)."'")->getField('id');
            $mode=M('activity_enroll');
            $data["activity_id"]=$activityID;
            $data["car_id"]=$carid;
            $mode->data($data)->add();
            $resut->isSuccess='true';
            $this->response($resut, 'json');
    	}


          /**
           * 用户参与活动列表 INF034
           * GET方法 api_address http://your-server-name/public/api.php/Activity/UserJoinActivityList&owner=1&pageszie=10&pagenum=2&pagecount=23
           * @param string owner   用户ID
           * @param string pageszie
           * @param string pagenum
           * @param string pagecount
           * @return ꣬活动详情,json<br>
           * {<br>
           *    UserInfoList[{<br>
           *        id:ID,<br>
           *        Title:活动标题,<br>
           *        InDate:参与日期,<br>
           *        Phone:电话号码,<br>
           *        type:车型<br>
           *    }]<br>
           * }<br>
           */
      	public function UserJoinActivityList_get(){
      		$owner = I('get.owner');
      		$car=M('car')->where('owner_id='."'".strval($owner)."'")->select();
      		$i=1;
      		$result->ActivityInfoList=array();
      		foreach($car as $value){
      		     if($value['id']!=null){
      		        $enroll=M('activity_enroll')->where('car_id='."'".$value['id']."'")->select();
      		        foreach($enroll as $v){
      		            if($v['activity_id']!=null){
                             $detail=M('actitiy_category')->where('id='."'".$v['activity_id']."'")->getField("id,name,view_count");
                             $result->UserInfoList[$i]['id']=$detail[1]['id'];
                             $result->UserInfoList[$i]['Title']=$detail[1]['name'];
                             $result->UserInfoList[$i]['InDate']=$detail[1]['name'];
                             $result->UserInfoList[$i]['phoneNo']='';
                             $result->UserInfoList[$i]['type']=$value['type'];
                             $i=$i+1;
      		            }
      		         }
      		     }
      		}
      		$this->response($result, 'json');
        }


          /**
           * 用户参与活动列表 INF035
           *  GET方法 api_address http://your-server-name/public/index.php/Home/Activity/ActivityUserList&activityID =1＆pageszie=1&pagenum=2&pagecount=23
           *  @param string activityID    活动ID
           *　@param string pageszie    pageszie
           *　@param string pagenum    pagenum
           *  @param string pagecount    pagenum
           *  @return ꣬活动详情,json<br>
           * {<br>
           *    ActivityInfoList[{<br>
           *        id:用户ID，<br>
           *        name:姓名,<br>
           *        nickname:昵称,<br>
           *        img:头像名称<br>
           *    }]<br>
           * }<br>
           */
        public function ActivityUserList_get(){
            $owner = I('get.activityID');
            $enroll=M('activity_enroll')->where('car_id='."'".$value['id']."'")->select();
            $i=1;
            $result->ActivityInfoList=array();
            foreach($enroll as $key=>$value){
                 if($value['car_id']!=null){
                    $car=M('car')->where('id='."'".$value['car_id']."'")->select();
                    $owner=M('owner')->where('id='."'".$car['owner_id']."'")->select();
                    $result->ActivityInfoList[$i]['id']=$owner[1]['id'];
                    $result->ActivityInfoList[$i]['name']=$owner[1]['name'];
                    $result->ActivityInfoList[$i]['nickname']=$owner[1]['nickname'];
                     $result->ActivityInfoList[$i]['img']='';
                    $i=$i+1;
                 }
            }
            $this->response($result, 'json');
        }

}
?>