/**
 * Created by P0017359 on 14-9-30.
 */

define(["tinymce"], function () {
    var ActivityController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "活动管理";
        $scope.ActivityList = {
            list:[],
            pagecount:"1"

        }

        $scope.formatedate =function(format,date)
        {
            var o = {
                "M+" : date.getMonth()+1, //month
                "d+" : date.getDate(),    //day
                "h+" : date.getHours(),   //hour
                "m+" : date.getMinutes(), //minute
                "s+" : date.getSeconds(), //second
                "q+" : Math.floor((date.getMonth()+3)/3),  //quarter
                "S" : date.getMilliseconds() //millisecond
            }
            if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
                (date.getFullYear()+"").substr(4- RegExp.$1.length));
            for(var k in o)if(new RegExp("("+ k +")").test(format))
                format = format.replace(RegExp.$1,
                    RegExp.$1.length==1? o[k] :
                        ("00"+ o[k]).substr((""+ o[k]).length));
            return format;
        }
       tinymce.init({
            selector: "textarea"
        });

        $scope.add=function(){
            $scope.activity={};
        }
        $scope.activity={
          id:'',
          name:"",
          status:"",
          remark:"",
          validatetime:"",
          begintime:"",
          endtime:"",
          company:"",
          groups:"",
          content:"",
          upper_num:0,
          lower_num:0
        };
        $scope.search={
            name:"",
            status:"",
            pagenum:1
        }
        $scope.companylist=[];
        $scope.grouplist=[];
        $scope.dropdownlist=function(){
            $http.get('../NewsCategory/CagegoryForDropdownlist').success(function (data) {
                $scope.newscategorylist=JSON.parse(eval(data)).list;
            });
            $http.get('../company/CompaniesForDropdownlist').success(function (data) {
                $scope.companylist=JSON.parse(eval(data)).list;
            });
            $http.get('../company/GroupsForDropdownlist').success(function (data) {
                $scope.grouplist=JSON.parse(eval(data)).list;
            });
        }();
        $scope.list=function(){
            $http.get('../Activity/List?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                      $scope.ActivityList=JSON.parse(eval(data));
                }
            });
        };
        $scope.list();
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }
        $scope.PagerPrev=function(){
            if($scope.search.pagenum>0){
                $scope.search.pagenum=$scope.search.pagenum-1;
            }
            $scope.list();
        }
        $scope.PagerAfter=function(){
            if($scope.search.pagenum<$scope.ActivityList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.edit=function(value){
            $http.get('../Activity/detail?id='+value.id).success(function(data){
                $scope.activity=JSON.parse(eval(data)).detail;
                $scope.activity.upper_num=parseInt($scope.activity.upper_num);
                $scope.activity.lower_num=parseInt($scope.activity.lower_num);
                tinymce.editors[0].getBody().innerHTML=$scope.activity.content;
            });
        };
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../Activity/Delete?id='+value.id).success(function(data){
                    $http.get('../Activity/List?'+ $.param($scope.search)).success(function (dataq) {
                         return $scope.ActivityList=JSON.parse(eval(dataq));
                    });
                });
            }else{

            }
        };

        $scope.listarea=function(){
            $http.get('../area/GetUserArea').success(function (data) {
                if(data!=null){
                    $scope.nodes=data.list;
                    $.fn.zTree.init($("#areatree"), setting,$scope.nodes);
                }
            });
        };
        $scope.listarea();

        $scope.listbrand=function(){
            $http.get('../brand/GetBrand').success(function (data) {
                if(data!=null){
                    $scope.nodes=data.list;
                    $.fn.zTree.init($("#brandtree"), setting,$scope.nodes);
                }
            });
        };
        $scope.listbrand();
        var setting={
            view: {
                selectedMulti: false
            },edit: {
                enable: false
            },check: {
                enable: true
            },data: {
                simpleData: {
                    enable: true
                }
            }
        };

        $scope.settingarea=function(value){
            $scope.activity=value;
        };

        $scope.settingbrand=function(value){
            $scope.activity=value;
        };

        $scope.submitarea=function(value){
            var id=value.id;
            var zTree = $.fn.zTree.getZTreeObj("areatree");
            var nodes = zTree.getCheckedNodes();
            var f=[];
            $.each(nodes,function(key,value){
                var k={};
                k.id=value.id;
                f[key]=k;
            });
            var data={};
            data.list=f;
            var node="area="+JSON.stringify(data)+"&id="+id+"&type="+$scope.type;
            $http.get('../activity/updatearea?'+node).success(function(data){

            });
        }

        $scope.submitbrand=function(value){
            var id=value.id;
            var zTree = $.fn.zTree.getZTreeObj("brandtree");
            var nodes = zTree.getCheckedNodes();
            var f=[];
            $.each(nodes,function(key,value){
                var k={};
                k.id=value.id;
                f[key]=k;
            });
            var data={};
            data.list=f;
            var node="brand="+JSON.stringify(data)+"&id="+id+"&type="+$scope.type;
            $http.get('../activity/updatebrand?'+node).success(function(data){

            });
        }

        $scope.submit=function(value){
            $("#save").attr('data-dismiss',"modal");
            value.begintime=value.begintime==""?"":$scope.formatedate('yyyy-MM-dd',new Date(value.begintime));
            value.endtime=value.endtime==""?"":$scope.formatedate('yyyy-MM-dd',new Date(value.endtime));
            value.validatetime=value.validatetime==""?"":$scope.formatedate('yyyy-MM-dd',new Date(value.validatetime));
            value.content=tinymce.editors[0].getBody().innerHTML;
            $http.get('../Activity/Update?'+ $.param(value)).success(function(data){
                $scope.activity={};
                $http.get('../Activity/List?'+ $.param($scope.search)).success(function (dataq) {
                    return $scope.ActivityList=JSON.parse(eval(dataq));
                });
            });
        };

    }];

    return ActivityController;
});