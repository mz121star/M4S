/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var SubjectController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "专题管理";
        $scope.SubjectList = {
            data:[],
            pageinfo:"1"

        }

        $scope.search={
            name:"",
            type:"",
            status:"",
            pagenum:1
        }

        $scope.subject={
            id:'',
            num:"",
            content:"",
            name:""
        };

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }


        $scope.list=function(){
            $http.get('../Subject/List?'+$.param($scope.search) ).success(function(data) {
                if(data!=null){
                    var result=JSON.parse(eval(data));
                    $scope.SubjectList=result;
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
            if($scope.search.pagenum<$scope.SubjectList.pagecount){
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

        $scope.add=function(){
            $scope.subject={};
        }
        $scope.edit=function(value){
            $http.get('../Subject/Detail?ID='+value.id).success(function (dataq) {
                if(dataq!=null){
                    return $scope.Subject=JSON.parse(eval(dataq)).detail;
                }
            });
        };

        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../Subject/Delete?id='+value.id).success(function(data){
                    $http.get('../Subject/List').success(function (dataq) {
                        if(dataq!=null){
                            return $scope.SubjectList=JSON.parse(eval(dataq));
                        }
                    });
                });
            }
        };

        $scope.submit=function(value){
            $("#save").attr('data-dismiss',"modal");
            $http.get('../Subject/Update?'+ $.param(value)).success(function(data){
                $("#save").removeAttrattr('data-dismiss');
                if(true){
                    $scope.subject={};
                    $scope.list();
                }
            });
        };

    }];

    return SubjectController;
});