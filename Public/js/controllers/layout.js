'use strict';

define(['../app', 'i18n!resources/nls/res','moment' ], function (app, res,moment) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', ['$scope','$rootScope', '$http', '$location', '$window', function ($scope,$rootScope,$http, $location, $window) {

        $scope.active="";

        $scope.linkClick=function(value){
            $scope.active=value.name;
           // $("[href!='"+value.url+"']").parent().css("native");
           // href="{{n1.url}}
            //$scope.navss();
        };

        $scope.use={
            password:"",
            confirmpassword:""
        }

        $scope.searchForm={
            $invalid : true
        }

        $scope.$watch('user.password+user.confirmpassword', function (v1, v2){
            if ($scope.user.password != $scope.user.confirmpassword) {
                $scope.searchForm.$invalid = true;
            }
            else {
                $scope.searchForm.$invalid = false;
            }
        });

        $scope.UpdatePassword = function (user) {
            $("#example").attr('data-dismiss',"modal");
            $http.get('../user/UpdatePassword?'+$.param($scope.user)).success(function (data) {
                $scope.navs=JSON.parse(eval(data)).list;
            });
        };
        $scope.navs=[];
        $scope.navss=function(){
            $http.post('../user/getMenu').success(function (data) {
                $scope.navs=JSON.parse(eval(data)).list;
            });
        }();
    }]);
});
