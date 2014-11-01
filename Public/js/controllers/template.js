/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var TemplateController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "Company_Manager";
        $scope.TemplateList = {
            list:[],
            pagecount:"1"

        }

        $scope.search={
            name:"",
            type:"",
            status:"",
            pagenum:1
        }

        $scope.template={
          id:'',
          name:"",
          status:"",
          remark:"",
          content:"",
          company:"",
          brand:""
        };

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }
        $scope.companylist=[];
        $scope.groupslist=[];
        $scope.dropdownlist=function(){
            $http.get('../company/CompaniesForDropdownlist').success(function (data) {
                $scope.companylist=JSON.parse(eval(data)).list;
            });
            $http.get('../company/GroupsForDropdownlist').success(function (data) {
                $scope.groupslist=JSON.parse(eval(data)).list;
            });
        }();


        $scope.list=function(){
            $http.get('../Template/List?'+$.param($scope.search) ).success(function(data) {
                if(data!=null){
                    var result=JSON.parse(eval(data));
                    $scope.TemplateList=result;

                    //$scope.TemplateList.pagecount=result.pagecount;
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
            if($scope.search.pagenum<$scope.TemplateList.pagecount){
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
            $scope.template={};
        }
        $scope.edit=function(value){
            $http.get('../Template/Detail?ID='+value.id).success(function (dataq) {
                if(dataq!=null){
                    return $scope.template=JSON.parse(eval(dataq)).detail;
                }
            });
        };

        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../Template/Delete?id='+value.id).success(function(data){
                    $http.get('../Template/List').success(function (dataq) {
                        if(dataq!=null){
                            return $scope.TemplateList=JSON.parse(eval(dataq));
                        }
                    });
                });
            }
        };

        $scope.submit=function(value){
            //$("#save").attr('data-dismiss',"modal");
            //$("#example").attr('data-dismiss',"modal");
            $("#save").attr('data-dismiss',"modal");
            $http.get('../Template/Update?'+ $.param(value)).success(function(data){
                $("#save").removeAttrattr('data-dismiss');
                if(true){
                    $scope.template={};
                    $scope.list();
                }
            });
        };

    }];

    return TemplateController;
});