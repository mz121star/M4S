/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var CarOwnerController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "车主管理";
        $scope.TaskList = {
            list:[],
            pagecount:"1"

        }

        $scope.search={
            type:3,
            pagenum:1
        }
        $scope.carowner={
            id:'',
            owner:"测试数据",
            car_number:"",
            phone:"13644954617",
            vin_number:"",
            consult:"",
            remark:""
        };
        $scope.list=function(){
            $http.get('../Task/List?'+ $.param($scope.search)).success(function(data) {
                if(data!=null){
                    return $scope.TaskList=JSON.parse(eval(data));
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
            if($scope.search.pagenum<$scope.TaskList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.add=function(){
            $scope.carowner={};
        }
        $scope.edit=function(value){
            $http.get('../CarOwner/List?id='+value.orgn).success(function(data) {
                if(data!=null){
                    $scope.carowner=JSON.parse(eval(data)).datail;
                    $scope.carowner.owner="测试数据";
                    $scope.carowner.phone=13644954617;
                    return $scope.carowner;
                }
            });
        };

        $scope.submit=function(){
            $("#save").attr('data-dismiss',"modal");
            $http.get('../CarOwner/Update?'+ $.param($scope.carowner)).success(function(data) {
                /*if(data!=null){
                    return $scope.TaskList=JSON.parse(eval(data)).list;
                }*/
            });
        };

    }];

    return CarOwnerController;
});