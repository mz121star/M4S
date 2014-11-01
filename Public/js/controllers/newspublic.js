/**
 * Created by P0017359 on 14-9-30.
 */

define(["tinymce"], function () {
    var newsController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "新闻管理";
        $scope.newsList = {
            list:[],
            pagecount:"1"

        }
        $scope.newscategorylist=[];
        $scope.news={
            "id":'',
            name:"",
            status:"",
            groups:"",
            content:"",
            category:"",
            company:"",
            validateTime:""
        };
        $scope.search={
            name:"",
            type:"",
            status:"",
            pagenum:1
        }
        tinymce.init({
         selector: "textarea"
         });

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
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.add=function(){
            $scope.news={};
        }
        $scope.list=function(){
            $http.get('../News/list?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    return $scope.newsList=JSON.parse(eval(data));
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
            if($scope.search.pagenum<$scope.newsList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };

        $scope.edit=function(value){
            $http.get('../News/detail?id='+value.id).success(function(data){
                $scope.news=JSON.parse(eval(data)).detail;
                $scope.news.content=JSON.parse(eval(data)).detail.content;
                tinymce.editors[0].getBody().innerHTML=$scope.news.content;
            });
        };

        $scope.public=function(value){
            $("#public").attr('data-dismiss',"modal");
            $scope.news.status=1;
            $http.get('../News/update?' + $.param($scope.news)).success(function(data){
                if(true){
                    $scope.news={};
                }
            });
        };

        $scope.cancel=function(value){
            $("#cancel").attr('data-dismiss',"modal");
            $scope.activity.status=3;
            $http.get('../News/update?' + $.param($scope.news)).success(function(data){
                if(true){
                    $scope.activity={};
                }
            });
        };

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }

        $scope.reject=function(value){
            $("#reject").attr('data-dismiss',"modal");
            $scope.news.status=2;
            $http.get('../News/update?' + $.param($scope.news)).success(function(data){
                if(true){
                    $scope.news={};
                }
            });
        };

    }];
    return newsController;
});