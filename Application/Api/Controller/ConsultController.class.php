<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// ConsultController,咨询列表
//----------------------------------
class ConsultController extends RestController {

    /**
     *  获得咨询类型接口 INF012
     * GET方法 api_address http://your-server-name/public/index.php/Home/Consult/NewsCategoryList?userId=1&carLicenseNo=%E8%BE%BDB6666
     *  uerID / string
     * @return  /json<br>
     *  {<br>
     *      NewsCategoryList[{<br>
     *          Id:Id,
     *          Name:名称
     *      }]<br>
     * }<br>
     */
    public function NewsCategoryList_get(){
        $userId= I('get.userId');
        $carLicenseNo= I('get.carLicenseNo');

        $list=M('news_category')->select();
        foreach($list as $k=>$v){
            $result->NewsCategoryList[$k]['id']=$v['id'];
            $result->NewsCategoryList[$k]['name']=$v['name'];
        }
        $this->response($result, 'json');
    }

    /**
     *  咨询列表接口 INF013
     * GET方法 api_address http://your-server-name/public/api.php/Consult/NewsList?userId=1&carLicenseNo=%E8%BE%BDB6666&phoneNo=1
     * &infoType=1&pageszie=1&pagenum=2&pagecount=23
     * @param uerID / string 用户ID
     * @param phone 电话号码
     * @param carLicenseNo 车牌号
     * @param string pageszie
     * @param string pagenum
     * @param string pagecount
     * @return  /json<br>
     * {<br>
     *   ActivityInfoList[{<br>
     *          id:ID，<br>
     *          name:咨询标题,<br>
     *          view_count: 咨询浏览次数,<br>
     *          Img:图片地址<br>
     *      }]<br>
     * }<br>
     */
    public function NewsList_get(){
        $userId= I('get.userId');
        $phoneNo= I('get.phoneNo');
        $carLicenseNo= I('get.carLicenseNo');
        $pagesize= I('get.pageszie');
        $pagenum= I('get.pagenum');
        $pagecount= I('get.pagecount');
        $infoType= I('get.infoType');
        $list=M('news')->where("news_category_id='".$infoType."'")->select();
        foreach($list as $k=>$v){
            $result->newList[$k]['id']=$v['id'];
            $result->newList[$k]['name']=$v['name'];
            $result->newList[$k]['Img']='';
            $result->newList[$k]['view_count']=$v['view_count'];
        }
        $this->response($result, 'json');
    }

    /**
     *  咨询列表接口 INF014
     * GET方法 api_address http://your-server-name/public/api.php/Consult/Detail?userId=1&newsID=123&phoneNo=123
     * @param uerID / string 用户ID
     * @param phone 电话号码
     * @param newsID 车牌号
     * @return  /json<br>
     * {<br>
     *   news{<br>
     *          id:ID，<br>
     *          name:咨询标题,<br>
     *          view_count: 咨询浏览次数,<br>
     *          Img:图片地址,<br>
     *          content:内容 <br>
     *      }<br>
     * }<br>
     */
    public function Detail_get(){
        $userId= I('get.userId');
        $phoneNo= I('get.phoneNo');
        $newsID= I('get.newsID');
        $list=M('news')->where("id='".$newsID."'")->select();
        foreach($list as $k=>$v){
            $result->news[$k]['id']=$v['id'];
            $result->news[$k]['name']=$v['name'];
            $result->news[$k]['Img']='';
            $result->news[$k]['view_count']=$v['view_count'];
            $result->news[$k]['content']=$v['content'];
        }
        $this->response($result, 'json');
    }

}

?>