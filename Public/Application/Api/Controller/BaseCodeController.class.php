<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// BaseCodeAction,代码表
//----------------------------------
class BaseCodeController extends RestController {

    /**
     *  返回区域列表 INF016
     *  GET方法 api_address http://your-server-name/public/index.php/Home/BaseCode/AreaList?userId=1&phoneNo=13644954856
     *  @param uerID/string     用户
     *  @param phoneNo          电话号码
     * @return  /json<br>
     * {<br>
     *     areaList[{<br>
     *          Id:ID <br>
     *          Name:大区名 <br>
     *     }]<br>
     * }<br>
     */
    public function AreaList_get(){
        $userId= I('get.userId');
        $phoneNo= I('get.phoneNo');

        $list=M('area')->select();
        foreach($list as $k=>$v){
            $result->areaList[$k]['Id']=$v['id'];
            $result->areaList[$k]['name']=$v['name'];
        }
        $this->response($result, 'json');
    }

    /**
     *  返回省份列表  INF017
     *  GET方法 api_address http://your-server-name/public/index.php/Home/BaseCode/ProvinceList?userId=1&phoneNo=13644954856
     *  uerID / string
     * @return  /json
     * {<br>
     *      ProvinceList[{<br>
     *          Id:Id,
     *          Name:名称
     *      }]<br>
     * }<br>
     */
    public function ProvinceList_get(){
        $userId= I('get.userId');
        $phoneNo= I('get.phoneNo');

        $list=M('Config')->Where("module='province'")->select();
        foreach($list as $k=>$v){
            $result->ProvinceList[$k]['id']=$v['value'];
            $result->ProvinceList[$k]['name']=$v['name'];
        }
        $this->response($result, 'json');
    }

    /**
     *  返回城市列表 INF018
     * GET方法 api_address http://your-server-name/public/Index.php/Home/BaseCode/CityList?userId=1&phoneNo=13644954856&province=HLJ
     *  uerID / string
     * @return  /json<br>
     *  {<br>
     *      CityList[{<br>
     *          Id:Id,
     *          Name:名称
     *      }]<br>
     * }<br>
     */
    public function CityList_get(){
        $province=I('get.province');
        $userId= I('get.userId');
        $phoneNo= I('get.phoneNo');

        $list=M('Config')->Where("module='".$province."'")->select();
        foreach($list as $k=>$v){
            $result->CityList[$k]['id']=$v['value'];
            $result->CityList[$k]['name']=$v['name'];
        }
        $this->response($result, 'json');
    }

    /**
     *  返回预约类型列表 INF024
     * GET方法 api_address http://your-server-name/public/Index.php/Home/BaseCode/BookTypeList?userId=1&phoneNo=13644954856
     *  uerID / string
     * @return  /json<br>
     *  {<br>
     *      BookTypeList[{<br>
     *          Id:Id,
     *          Name:名称
     *      }]<br>
     * }<br>
     */
    public function BookTypeList_get(){
        $userId= I('get.userId');
        $phoneNo= I('get.phoneNo');

        $list=M('Config')->Where("module='booktype'")->select();
        foreach($list as $k=>$v){
            $result->BookTypeList[$k]['id']=$v['value'];
            $result->BookTypeList[$k]['typename']=$v['name'];
        }
        $this->response($result, 'json');
    }
}

?>