/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var TaskController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "Company_Manager";
        $scope.TaskList = {
            list:[],
            pagecount:"1"

        }

        $scope.search={
            type:"",
            pagenum:1
        }
        $scope.task={
          id:'',
          name:"",
          status:"",
          remark:""
        };
        $scope.list=function(){
            $http.get('../Task/List?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    return $scope.TaskList=JSON.parse(eval(data));
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
            if($scope.search.pagenum<$scope.TaskList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }

        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };

        $scope.handler=function(value){
            value.status=1;
            $http.get('../Task/Update?' + $.param(value)).success(function(data){
                if(true){
                    $scope.list();
                }
            });
        };
        $scope.unhandler=function(value){
            value.status=0;
            $http.get('../Task/Update?' + $.param(value)).success(function(data){
                if(true){
                    $scope.list();
                }
            });
        };

    }];

    return TaskController;
});