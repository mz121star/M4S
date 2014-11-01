/**
 * Created by P0017359 on 14-9-30.
 */

define(["tinymce"], function () {
    var ActivitypublicController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "活动发布";
        $scope.ActivityList = {
            list:[],
            pagecount:"1"

        }
        tinymce.init({
         selector: "textarea"
         });
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
        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
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
            $http.get('../Activity/detail?id='+value.id).success(function(data){
                $scope.activity=JSON.parse(eval(data)).detail;
                $scope.activity.id=JSON.parse(eval(data)).detail.id;
                tinymce.editors[0].getBody().innerHTML=$scope.activity.content;
            });
        };

        $scope.public=function(value){
            $("#public").attr('data-dismiss',"modal");
            $scope.activity.status=1;
            $http.get('../Activity/update?' + $.param($scope.activity)).success(function(data){
                if(true){
                    $scope.activity={};
                    $scope.list();
                }
            });
        };

        $scope.reject=function(value){
            $("#reject").attr('data-dismiss',"modal");
            $scope.activity.status=2;
            $http.get('../Activity/update?' + $.param($scope.activity)).success(function(data){
                if(true){
                    $scope.activity={};
                    $scope.list();
                }
            });
        };
        $scope.cancel=function(value){
            $("#cancel").attr('data-dismiss',"modal");
            $scope.activity.status=3;
            $http.get('../Activity/update?' + $.param($scope.activity)).success(function(data){
                if(true){
                    $scope.activity={};
                    $scope.list();
                }
            });
        };

    }];

    return ActivitypublicController;
});