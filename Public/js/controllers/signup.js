/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 2/1/13
 * Time: 3:13 PM
 * To change this template use File | Settings | File Templates.
 */

//TODO Define module
define([], function () {
var SignUpController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
    $rootScope.title = "用户管理";
    $scope.user = {
        name:'',
        password:'',
        repeatpassword:'',
        role:"",
        telephone:"",
        telephone2:"",
        email:"",
        company:"",
        ID:""
    };
    $scope.userlist={
        list:[],
        pagecount:"1"

    }

    $scope.saveform={
        $invalid : true
    }
    $scope.reset=function(){
        $scope.search={};
        $scope.search.pagenum=0;
    }
    /*$scope.$watch('user.ID',function(v1){
       if($scope.user.ID==null||$scope.user.ID==""){
           $scope.saveform.$invalid=true;
       } else{
           $scope.saveform.$invalid=true;
       }
    });*/

    $scope.search={
        user:"",
        type:"",
        status:"",
        pagenum:0
    }
    $scope.list=function(){
        $http.get('../User/list?'+ $.param($scope.search)).success(function (data) {
            $scope.userlist=JSON.parse(eval(data));
        });
    }
    $scope.list();
    $scope.PagerPrev=function(){
        if($scope.search.pagenum>0){
            $scope.search.pagenum=$scope.search.pagenum-1;
        }
        $scope.list();
    }
    $scope.PagerAfter=function(){
        if($scope.search.pagenum<$scope.userlist.pagecount){
            $scope.search.pagenum=$scope.search.pagenum+1;
        }
        $scope.list();
    }
    $scope.PagerData = function (pageindex) {
        $scope.search.pagenum=pageindex
        $scope.list();
    };
    $scope.createClick = function () {
        $("#save").attr('data-dismiss',"modal");
        $.post('../User/update', $.param($scope.user), function(data) {
            var result=JSON.parse(data);
            if(result!=undefined&&result!=null&&result.isSuccess=='0'){

                alert("操作成功");
                $scope.list();
            }else{
                alert(result.errorMessage);
                return;
            }
        });
    };

    $scope.add=function(){
        $scope.user = {};
    }
    $scope.query=function(){
        $scope.search.pagenum=1;
        $scope.list();
    };
    $scope.companylist=[];
    $scope.roleslist=[];
    $scope.dropdownlist=function(){
        $http.get('../company/AllForDropdownlistForuser').success(function (data) {
            $scope.companylist=data.list;
        });

        $http.get('../role/RolesForDropdownlist').success(function (data) {
            $scope.roleslist=JSON.parse(eval(data)).list;
        });
    }();

    $scope.edit=function(value){
        $http.get('../User/Detail?ID='+value.ID).success(function (dataq) {
            if(dataq!=null){
                return $scope.user=JSON.parse(eval(dataq)).detail;
            }
        });
    };

    $scope.resetPassword=function(){
        $scope.user.password=123456;
        $http.get('../user/UpdatePassword?'+$.param($scope.user)).success(function (data) {
            $scope.navs=JSON.parse(eval(data)).list;
        });
    }

    $scope.delete=function(value){
        if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
            $http.get('../User/Delete?ID='+value.ID).success(function(data){
                var result=JSON.parse(eval(data));
                if(result!=undefined&&result!=null&&result.isSuccess=='0'){

                    alert("操作成功");
                    $scope.list();
                }else{
                    alert(result.errorMessage);
                    return;
                }
            });
        }
    };
}];
    return SignUpController;
});