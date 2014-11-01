<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// BookController Ԥ预定Controller
//----------------------------------
class BookController extends RestController {

    /**
     *   预约接口 INF023
     *  POST方法 api_address http://your-server-name/public/index.php/HOME/Book/updatebook
     *  @param string phoneNo          电话号码
     *  @param string userId           UserID
     *  @param string category         预约类型
     *  @param string content          预约内容
     *  @param string detetime  format{'yyyy-mm-dd'} 例如 '2014-05-29'        预约时间
     *  @return Json 类型{<br>
     *      isSuccess：是否注册成功，true：注册成功；FALSE：注册失败，<br>
     *      ErrorMessage 错误信息，注册成功时错误信息为空。
     * }
     */
    public function updatebook_POST(){
        $phoneNo = I('post.phoneno');
        $phoneSerialNo= I('post.phoneserialno');
        $category= I('post.category');
        $content= I('post.content');
        $detetime= I('post.detetime');
        $mode=M('book_info');
        $data["book_category"]=$category;
        $data["book_content"]=$content;
        $data["book_datetime"]=$detetime;
        $data["id"]=to_guid_string(time());
        $data["create_datetime"]=date('Y-m-d h:i:s',time());
        $mode->data($data)->add();
        $result->isSuccess='true';
        $result->errorMessage='';
        $this->response($result, 'json');
    }

}

?>