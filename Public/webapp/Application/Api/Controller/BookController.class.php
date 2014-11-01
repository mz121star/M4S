<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// BookController 预定Controller
//----------------------------------
class BookController extends RestController {

    /**
     *   预约接口 INF023
     *  POST方法 api_address http://your-server-name/public/index.php/Home/Book/updatebook
     *  @param string userid           UserID
        @param       type, int        预约类型
        @param       comments
        @param       phoneno
     *  @param string detetime  format{'yyyy-mm-dd'} 例如 '2014-05-29'        预约时间
     *  @return Json 类型{<br>
     *      isSuccess：是否注册成功，true：注册成功；FALSE：注册失败，<br>
     *      ErrorMessage 错误信息，注册成功时错误信息为空。
     * }
     */
    public function updatebook_POST(){
        $phoneNo = I('post.phoneno');
        $userid= I('post.userid');
        $category= I('post.type');
        $content= I('post.comments');
        $detetime= I('post.datetime');
        $mode=M('book_info');
        $data["book_category"]=$category;
        $data["book_content"]=$content;
        $data["book_datetime"]=$detetime;
        $data["id"]=to_guid_string(time());
        $data["create_datetime"]=date('Y-m-d h:i:s',time());
        //$mode->data($data)->add();
        $result->isSuccess='true';
        $result->errorMessage='';
        $this->response($result, 'json');
    }

    /**
     *  预约类型 INF024
     * GET方法 api_address http://your-server-name/public/Index.php/Home/Book/booktypelist?phoneno=123&userid=1
     * @param uerid / string
     * @return  /json<br>
     *  {<br>
     *      list[{<br>
     *          Id:Id,
     *          Name:名称
     *      }]<br>
     * }<br>
     */
    public function booktypelist_get(){
        $province=I('get.province');
        $userId= I('get.userId');
        $phoneNo= I('get.phoneNo');
        $result['list']=array();
        $list=M('Config')->Where("module='".$province."'")->select();
        $a['id']=1;
        $a['name']='洗车';

        $b['id']=2;
        $b['name']='试驾';

        $c['id']=3;
        $c['name']='保养';

        array_push($result['list'],$a,$b,$c);

        $this->response($result, 'json');
    }


    public function handlerBook_get(){
        $id=I('get.id');
        $model=M('book_info');
        $data['status']=1;
        //更新用户状态
        $model->where("id='".$id."'")->save($data);
        $result['isSuccess']='true';
        $this->response($result, 'json');
    }


    public function findBook_get(){
        $data=array();
        $result=array();
        $model=M('book_info');
        $name=I('get.name');
        $status=I('get.status');
        $pagesize=I('get.pagesize');
        $pagenum=I('get.pagenum');

        if(!empty($name)){
            $data['name']=array('like','%'.$name.'%');
        }
		if(!empty($status)){
			$data['status']=$status;
		}
        $r=$model->where($data)->page($pagenum,$pagesize)->select();
        $result['list']=array();
        if(empty($r)){
            $result['list']=null;
        }else{
            foreach($r as $v){
                $s['id']=$v['id'];
                $s['name']=$v['name'];
                $s['book_content']=$v['book_content'];
                $s['book_datetime']=$v['book_datetime'];
                $s['status']=$v['status'];
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

}



?>