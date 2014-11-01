/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var CarComponentController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "车部件管理";
        $scope.ComponentList = {
            list:[],
            pagecount:"1"

        }
        $scope.component={
          id:'',
          name:"",
          status:"",
          remark:"",
          brand:"",
          rated_frequency:"",
          groups:"",
          company:""
        };
        $scope.search={
            name:"",
            type:"",
            status:"",
            pagenum:1
        }
        $scope.add=function(){
            $scope.component={};
        }
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }
        $scope.carttypelist=[]
        $scope.companylist=[];
        $scope.grouplist=[];
        $scope.dropdownlist=function(){
            $http.get('../brand/GetBrandFromDropdownList').success(function (data) {
                $scope.carttypelist=JSON.parse(eval(data)).list;
            });
            $http.get('../company/CompaniesForDropdownlist').success(function (data) {
                $scope.companylist=JSON.parse(eval(data)).list;
            });
            $http.get('../company/GroupsForDropdownlist').success(function (data) {
                $scope.grouplist=JSON.parse(eval(data)).list;
            });

        }();

        $scope.list=function(){
            $http.get('../CarHealthy/List?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    return $scope.ComponentList=JSON.parse(eval(data));
                }
            });
        };
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
            if($scope.search.pagenum<$scope.ActivityList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }

        $scope.edit=function(value){
            $http.get('../CarHealthy/detail?id='+value.id).success(function(data){
                $scope.component=JSON.parse(eval(data)).detail;
                $scope.component.brand=JSON.parse(eval(data)).detail.brand;
            });
        };

        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../CarHealthy/Delete?id='+value.id).success(function(data){
                    $http.get('../CarHealthy/List?'+ $.param($scope.search)).success(function (dataq) {
                        if(dataq!=null){
                            return $scope.ComponentList=JSON.parse(eval(dataq));
                        }
                    });
                });
            }
        };

        $scope.submit=function(value){
            $("#save").attr('data-dismiss',"modal");
            $http.get('../CarHealthy/Update?'+ $.param(value)).success(function(data){
                if(true){
                    $scope.component=null;
                }
            });
        };

    }];

    return CarComponentController;
});