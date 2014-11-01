/**
 * Created by P0017359 on 14-9-30.
 */

define(["tinymce"], function () {
    var AdvertpublicController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "广告发布管理";
        $scope.AdvertList ={
            list:[],
            pagecount:"1"

        }

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.advert={
            id:'',
            name:"",
            status:"",
            remark:"",
            begintime:"",
            endtime:"",
            validatetime:"",
            content:"",
            company:"",
            groups:""
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
        $scope.list=function(){
            $http.get('../Advert/List?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    return $scope.AdvertList=JSON.parse(eval(data));
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
            if($scope.search.pagenum<$scope.AdvertList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.companylist=[];
        $scope.grouplist=[];
        $scope.dropdownlist=function(){
            $http.get('../company/CompaniesForDropdownlist').success(function (data) {
                $scope.companylist=JSON.parse(eval(data)).list;
            });
            $http.get('../company/GroupsForDropdownlist').success(function (data) {
                $scope.grouplist=JSON.parse(eval(data)).list;
            });
        }();
        $scope.edit=function(value){
            $http.get('../Advert/detail?id='+value.id).success(function(data){
                $scope.advert=JSON.parse(eval(data)).detail;
                tinymce.editors[0].getBody().innerHTML=$scope.advert.content;
            });
        };

        $scope.public=function(value){
            $("#public").attr('data-dismiss',"modal");
            $scope.advert.status=1;
            $http.get('../Advert/update?' + $.param($scope.advert)).success(function(data){
                if(true){
                    $scope.advert={};
                    $scope.list();
                }
            });
        };

        $scope.reject=function(value){
            $("#reject").attr('data-dismiss',"modal");
            $scope.advert.status=2;
            $http.get('../Advert/update?' + $.param($scope.advert)).success(function(data){
                if(true){
                    $scope.advert={};
                    $scope.list();
                }
            });
        };

        $scope.cancel=function(value){
            $("#cancel").attr('data-dismiss',"modal");
            $scope.advert.status=3;
            $http.get('../Advert/update?' + $.param($scope.advert)).success(function(data){
                if(true){
                    $scope.advert={};
                    $scope.list();
                }
            });
        };

    }];
    return AdvertpublicController
});