/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var RepairController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "录入维修记录";

        $scope.repair={
            car_number:"",
            component:"",
            datetime:"",
            desc:""
        }

        $scope.submit=function(value){
            value.datetime=new Date(value.datetime).toLocaleDateString();
            $("#save").attr('data-dismiss',"modal");
            $http.get('../CarRepair/Update?'+ $.param(value)).success(function(data){
                if(true){
                    $scope.reapair={};
                }
            });
        };


    }];

    return RepairController;
});