/**
 * Created by P0017359 on 14-9-30.
 */

define(['tinymce'], function () {
    var CarComponentController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "Company_Manager";
        $scope.ComponentList = [
        ];
        tinymce.init({
            selector: "textarea"
        });
        $scope.component={
          id:'',
          name:"",
          status:"",
          remark:""
        };
        $scope.add=function(){
            $scope.role={};
        }
        $scope.list=function(){
            $http.get('../CarHealthy/List').success(function(data) {
                if(data!=null){
                    return $scope.ComponentList=JSON.parse(eval(data)).list;
                }
            });
        };

        $scope.edit=function(value){
            $scope.component=value;
            $scope.component.id=value.id;
        };

        $scope.delete=function(value){

            $http.get('../CarHealthy/Delete?id='+value.id).success(function(data){
                $http.get('../CarHealthy/List').success(function (dataq) {
                    if(dataq!=null){
                        return $scope.ComponentList=JSON.parse(eval(dataq)).list;
                    }
                });
            });
        };

        $scope.submit=function(value){
           var rolevalue="name="+value.name+"&remark="+value.remark
               +"&status="+value.status+"&id="+value.id;

            $("#save").attr('data-dismiss',"modal");
            $http.get('../CarHealthy/Update?'+rolevalue).success(function(data){
                if(true){
                    $scope.component=null;
                }
            });
        };

    }];

    return CarComponentController;
});