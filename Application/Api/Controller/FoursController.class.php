<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// 4SAction
//----------------------------------
class FoursController extends RestController {

    /**
     * 4S店列表接口
     * api_address http://your-server-name/api.php/fours/list?page=all
     * @urlparam string|array $isAll 是否返回全部记录
     * @return json
     */
    public function list_get(){
        $isAll = I('get.page');
        $fours = M('4s');
        if ($isAll == 'all') {
            $list = $fours->order('sort')->select();
        } else {
            $count = $fours->count();
            $page = new \Think\Page($count, 20);
            $list = $fours->order('sort')->limit($page->firstRow.','.$page->listRows)->select();
        }
        $this->response($list, 'json');
    }
}