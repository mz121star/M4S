/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var ActivityjoinController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "活动报名";
        $scope.ActivityList = {
            list:[],
            pagecount:"1"

        }
        /*tinymce.init({
         selector: "textarea"
         });*/
        $scope.activity={
            id:'',
            name:"",
            status:"",
            remark:"",
            validatetime:"",
            begintime:"",
            endtime:"",
            company:"",
            groups:"",
            content:""
        };
        $scope.search={
            name:"",
            type:"",
            status:"",
            pagenum:1
        }

        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };

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
            $http.get('../Activity/List?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    $scope.ActivityList=JSON.parse(eval(data));
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
            $scope.searchJoin.id=value.id;
            $http.get('../Activity/getJoin?id='+value.id).success(function(data){
                $scope.ActivityJoinList=JSON.parse(eval(data));
            });
        };

        $scope.reject=function(value){
            $("#reject").attr('data-dismiss',"modal");
            $scope.activity.status=2;
            $http.get('../Activity/update?' + $.param($scope.activity)).success(function(data){
                if(true){
                    $scope.activity={};
                }
            });
        };

    $scope.ActivityJoinList={
        list:[],
        pagecount:"1"
    }

    $scope.searchJoin={
        id:"",
        pagenum:1
    }

    $scope.listjoin=function(){
        $http.get('../Activity/getJoin?'+ $.param($scope.searchJoin)).success(function(data) {
            if(data!=null){
                $scope.ActivityJoinList=JSON.parse(eval(data));
            }
        });
    };

    $scope.PagerJoinData = function (pageindex) {
        $scope.searchJoin.pagenum=pageindex
        $scope.listjoin();
    };
    $scope.PagerJoinPrev=function(){
        if($scope.searchJoin.pagenum>0){
            $scope.searchJoin.pagenum=$scope.searchJoin.pagenum-1;
        }
        $scope.listjoin();
    }
    $scope.PagerJoinAfter=function(){
        if($scope.searchJoin.pagenum<$scope.ActivityJoinList.pagecount){
            $scope.searchJoin.pagenum=$scope.searchJoin.pagenum+1;
        }
        $scope.listjoin();
    }

    $scope.join=function(value){
        value.status=1;
        $http.get('../Activity/UpdateJoin?'+ $.param(value)).success(function(data) {
            $http.get('../Activity/getJoin?'+ $.param($scope.searchJoin)).success(function(data) {
                if(data!=null){
                    $scope.ActivityJoinList=JSON.parse(eval(data));
                }
            });
        });
    }

    $scope.cancel=function(value){
        value.status=2;
        $http.get('../Activity/UpdateJoin?'+ $.param(value)).success(function(data) {
            $http.get('../Activity/getJoin?'+ $.param($scope.searchJoin)).success(function(data) {
                if(data!=null){
                    $scope.ActivityJoinList=JSON.parse(eval(data));
                }
            });
        });
    }

    }];

    return ActivityjoinController;
});