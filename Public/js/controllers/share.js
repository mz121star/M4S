/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var CarComponentController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "分享管理";
        $scope.ShareList = {
            data:[],
            pageinfo:"1"

        }


        $scope.list=function(){
            $http.get('../Share/List').success(function(data) {
                if(data!=null){
                    return $scope.ShareList=JSON.parse(eval(data));
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
            if($scope.search.pagenum<$scope.ShareList.pageinfo.pageCount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../Share/Delete?num='+value.num).success(function(data){
                    $http.get('../Share/List').success(function(data) {
                        if(data!=null){
                            return $scope.ShareList=JSON.parse(eval(data));
                        }
                    });
                });
            }
        };

    }];

    return CarComponentController;
});