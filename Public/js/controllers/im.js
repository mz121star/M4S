/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var ImController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "IM管理";
        $scope.ImList = {
            data:[],
            pageinfo:"1"
        }

        $scope.SessionDetail={
            data:[],
            pageinfo:"1"
        }


        $scope.list=function(){
            $http.get('../Im/List').success(function(data) {
                if(data!=null){
                    return $scope.ImList=JSON.parse(eval(data));
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
            if($scope.search.pagenum<$scope.ImList.pageinfo.pageCount){
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

        $scope.detail=function(value){

            $http.get('../Im/Detail?session='+value.session).success(function(data){
                return $scope.SessionDetail=JSON.parse(eval(data));
            });
        };

    }];

    return ImController;
});