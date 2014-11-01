/**
 * Created by P0017359 on 14-9-30.
 */

define(["tinymce"], function () {
    var newsController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "新闻管理";
        $scope.newsList = {
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
        $scope.newscategorylist=[];
        $scope.news={
          "id":'',
          name:"",
          status:"",
          groups:"",
          content:"",
          category:"",
          company:"",
          validateTime:"",
          remark:""
        };
        $scope.add=function(){
            $scope.role={};
        }
        $scope.search={
            name:"",
            type:"",
            status:"",
            pagenum:0
        }
        tinymce.init({
            selector: "textarea"
        });
        function addDiyDom(treeId, treeNode) {
            var spaceWidth = 5;
            var switchObj = $("#" + treeNode.tId + "_switch"),
                icoObj = $("#" + treeNode.tId + "_ico");
            switchObj.remove();
            icoObj.before(switchObj);

            if (treeNode.level > 1) {
                var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
                switchObj.before(spaceStr);
            }
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
            $http.get('../News/list?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    return $scope.newsList=JSON.parse(eval(data));
                }
            });
        };
        $scope.list();
        $scope.PagerPrev=function(){
            if($scope.search.pagenum>0){
                $scope.search.pagenum=$scope.search.pagenum-1;
            }
            $scope.list();
        }
        $scope.PagerAfter=function(){
            if($scope.search.pagenum<$scope.newsList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }

        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.add=function(){
            $scope.news={};
        }

        $scope.edit=function(value){
            $http.get('../News/detail?id='+value.id).success(function(data){
                $scope.news=JSON.parse(eval(data)).detail;
                $scope.news.content=JSON.parse(eval(data)).detail.content;
                tinymce.editors[0].getBody().innerHTML=$scope.news.content;
            });
        };

        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../News/delete?id='+value.id).success(function(data){
                    $http.get('../News/list?'+ $.param($scope.search)).success(function (dataq) {
                        if(dataq!=null){
                            return $scope.newsList=JSON.parse(eval(dataq));
                        }
                    });
                });
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
            $scope.company=value;
           console.log(value);
            $scope.company.type=value.type;
        };

        $scope.settingbrand=function(value){
            $scope.company=value;
            $scope.company.type=value.type;
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
            $http.get('../news/updatearea?'+node).success(function(data){

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
            $http.get('../news/updatebrand?'+node).success(function(data){

            });
        }

        $scope.submit=function(value){
            $scope.news.content=$("#content").val();
            value.validateTime=value.validateTime==""?"":$scope.formatedate('yyyy-MM-dd',new Date(value.validateTime));
            value.content=tinymce.editors[0].getBody().innerHTML;
            $("#save").attr('data-dismiss',"modal");
            $http.get('../News/update?' + $.param($scope.news)).success(function(data){
                if(true){
                    $scope.news={};
                    $scope.list();
                }
            });
        };

    }];
    return newsController;
});