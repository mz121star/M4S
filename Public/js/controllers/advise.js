/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var AdviseController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "反馈管理";
        $scope.AdviseList = {
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
            $http.get('../advise/List?'+$.param($scope.search) ).success(function(data) {
                if(data!=null){
                    var result=JSON.parse(eval(data));
                    $scope.AdviseList=result;
                }
            });
        };
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
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
            if($scope.search.pagenum<$scope.AdviseList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }


        $scope.submit=function(value){
            $("#save").attr('data-dismiss',"modal");
            $http.get('../Template/Update?'+ $.param(value)).success(function(data){
                if(true){
                    $scope.template=null;
                }
            });
        };

        $scope.handler=function(value){
            value.status=1;
            $http.get('../Advise/update?' + $.param(value)).success(function(data){
                if(true){
                    $scope.list();
                }
            });
        };
        $scope.unhandler=function(value){
            value.status=0;
            $http.get('../Advise/update?' + $.param(value)).success(function(data){
                if(true){
                    $scope.list();
                }
            });
        };

    }];

    return AdviseController;
});