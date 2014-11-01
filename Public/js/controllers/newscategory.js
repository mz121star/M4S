/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var newsCategoryController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "Company_Manager";
        $scope.newsCategoryList = {
            list:[],
            pagecount:"1"

        }
        $scope.search={
            name:"",
            status:"",
            pagenum:0
        }
        $scope.newsCategory={
          "id":'',
          name:"",
          status:"",
          remark:""
        };
        $scope.add=function(){
            $scope.role={};
        }
        $scope.list=function(){
            $http.get('../NewsCategory/list?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    return $scope.newsCategoryList=JSON.parse(eval(data));
                }
            });
        };

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }
        $scope.list();
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };
        $scope.PagerPrev=function(){
            if($scope.search.pagenum>0){
                $scope.search.pagenum=$scope.search.pagenum-1;
            }
            $scope.list();
        }
        $scope.PagerAfter=function(){
            if($scope.search.pagenum<$scope.newsCategoryList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }

        $scope.edit=function(value){
            $scope.newsCategory=value;
        };
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.add=function(){
            $scope.newsCategory={};
        }
        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../NewsCategory/delete?id='+value.id).success(function(data){
                    $http.get('../NewsCategory/list?'+ $.param($scope.search)).success(function (dataq) {
                        if(dataq!=null){
                            return $scope.newsCategoryList=JSON.parse(eval(dataq)).list;
                        }
                    });
                });
            }
        };

        $scope.submit=function(value){
           var rolevalue="name="+value.name+"&remark="+value.remark
               +"&status="+value.status+"&id="+value.id;

            $("#save").attr('data-dismiss',"modal");
            $http.get('../NewsCategory/update?'+ $.param(value)).success(function(data){
                if(true){
                    $scope.newsCategory={};
                    $scope.list();
                }
            });
        };

    }];

    return newsCategoryController;
});