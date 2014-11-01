<?php
namespace Api\Controller;

use Think\Controller\RestController;

//----------------------------------
// OwnerAction
//----------------------------------
class OwnerController extends RestController {
	public function list_get(){
		$id = I('get.id');
		$owner = M('owner');
		$map['id'] = '133';//
		$result=$owner->where('id='.strval($id))->select();
		$this->response($result, 'json');
	}

	public function list1_get(){
		$Verify =     new \Think\Verify();
		$this->response($Verify, 'json');
	}
}
?>