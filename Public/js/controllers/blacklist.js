/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var BalcklistController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "黑名单管理";
        $scope.OwnerList = {
            list:[],
            pagecount:"1"

        }

        $scope.search={
            type:"",
            pagenum:1
        }
        $scope.Blacklist={
          id:'',
          reason:""
        };
        $scope.list=function(){
            $http.get('../Account/List?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    return $scope.OwnerList=JSON.parse(eval(data));
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
            if($scope.search.pagenum<$scope.OwnerList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }

        $scope.edit=function(value){
            $scope.Blacklist=value;
        };

        $scope.join=function(value){
            $("#join").attr('data-dismiss',"modal");
            $http.get('../Account/joinBlackList?'+ $.param($scope.Blacklist)).success(function(data){
                $http.get('../Account/List?'+ $.param($scope.search)).success(function(data) {
                    if(data!=null){
                        return $scope.OwnerList=JSON.parse(eval(data));
                    }
                });
            });
        };

        $scope.cancel=function(value){
            $("#cancelblacklist").attr('data-dismiss',"modal");

            $http.get('../Account/cancelBlackList?'+ $.param($scope.Blacklist)).success(function(data){
                $http.get('../Account/List?'+ $.param($scope.search)).success(function(data) {
                    if(data!=null){
                        return $scope.OwnerList=JSON.parse(eval(data));
                    }
                });
            });
        };

    }];

    return BalcklistController;
});