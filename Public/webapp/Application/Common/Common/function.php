<?php
function getcompanyid($int_id=0){
    $model = M('4s');
    $r=$model->where("int_id=".$int_id)->getfield("int_id,id,name");

    return $r;
}

function getgroupid($int_id=0){
    $model = M('4s_group');
    $r=$model->where("int_id=".$int_id)->getfield("int_id,id,name");
    return $r;
}

function getbrandid($int_id=0){
    $model = M('brand_cartype');
    $r=$model->where("int_id=".$int_id)->getfield("int_id,id,name");
    return $r;
}
/**
 * 插入中间表
 * @param $id id
 * @param $data 数据数组
 * @param $table 中间表名
 * @param $key_field key字段名
 * @param $value_field value字段名
 * @return
 */
function insertMiddleTable($id,$data,$table,$key_field=null,$value_field=null){
    $k_v=explode('_', $table);
    $key_field || $key_field=$k_v[0].'_id';
    $value_field || $value_field=$k_v[1].'_id';
    $m=M($table);
    $where[$key_field]=array('in',$id);
    $m->where($where)->delete();
    if(!data){
        return false;
    }
    $save_data=array();
    foreach ($data as $value) {
        $arr[$key_field]=$id;
        $arr[$value_field]=$value;
        $save_data[]=$arr;
    }
    $m->addAll($save_data);
}
function handlerOperInfo($operusr,$data,$id){
    $opertime=intval(time());
    $operuser=M('Admin')->where("id='".$operusr."'")->getfield("int_id");
    if(empty($data['operuser'])){
        $data['operuser']=1;
    }
    $data['modify_user']=$operuser;
    $data['modify_datetime']=$opertime;
    if(empty($id)){
        $data['create_user']=$operuser;
        $data['create_datetime']=$opertime;
    }
    return $data;
}
?>