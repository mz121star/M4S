/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var TemplateController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "预约管理";
        $scope.BookList = {
            list:[],
            pagecount:"1"

        }

        $scope.search={
            name:"",
            type:"",
            status:"",
            pagenum:1
        }


        $scope.list=function(){
            $http.get('../Book/List?'+$.param($scope.search) ).success(function(data) {
                if(data!=null){
                    var result=JSON.parse(eval(data));
                    $scope.BookList=result;

                    //$scope.TemplateList.pagecount=result.pagecount;
                }
            });
        };
        $scope.list();

        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.PagerPrev=function(){
            if($scope.search.pagenum>0){
                $scope.search.pagenum=$scope.search.pagenum-1;
            }
            $scope.list();
        }
        $scope.PagerAfter=function(){
            if($scope.search.pagenum<$scope.BookList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };
        $scope.add=function(){
            $scope.role={};
        }
        $scope.edit=function(value){
            $http.get('../Book/Update?id='+value.id).success(function (dataq) {
                $http.get('../Book/List?'+$.param($scope.search)).success(function(data){
                      $scope.BookList=data;
                });
            });
        };


    }];

    return TemplateController;
});