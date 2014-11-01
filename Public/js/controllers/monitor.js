'use strict';

define([ 'i18n!resources/nls/res','linqjs' ], function (res,Enumerable) {

    var MonitorController = ['$scope', '$rootScope', 'FeedService', '$http', '$timeout', function ($scope, $rootScope, FeedService, $http, $timeout) {
        $rootScope.menuUrl = "partials/leftmenu/monitorMenu.html";
        $rootScope.title = "Monitor - " + res.title;
        $rootScope.show = true;
        /*    $("select, input").uniform();*/
        $scope.SiteType = {
            dataType: [
                {value: "Micro Bloging"} ,
                {value: "News Media"},
                {value: "Forum"},
                {value: "eCommerce"}

            ],

            type: "Micro Bloging"

        };

        function LoadData(type) {
            if (type === "Micro Bloging")
                $http.get('api/monitor/' + encodeURI("Micro Bloging")).success(function (d) {
                    $scope.monitorWeibo = d
                });

            if (type === "Forum")
                $http.get('api/monitor/' + encodeURI("Forum")).success(function (d) {
                    $scope.monitorForums = d
                });

            if (type === "News Media")
                $http.get('api/monitor/' + encodeURI("News Media")).success(function (d) {
                    $scope.monitorSearchs = d
                });
            if (type === "eCommerce")
                $http.get('api/monitor/' + encodeURI("eCommerce")).success(function (d) {
                    $scope.monitorShops = d
                });
            if (type === "customer")
                $http.get('api/monitor/' + encodeURI("customer")).success(function (d) {
                    $scope.monitorCustomer = d
                });
            if (type === undefined) {
                LoadData("Micro Bloging");
                LoadData("Forum");
                LoadData("News Media");
                LoadData("eCommerce");
                LoadData("customer");


            }
        };

        LoadData();
        FeedService.querySourceType().then(function (d) {
            // $scope.sourcetype = Enumerable.From(d).Distinct("$.FromType").Select("$.FromType").ToJSON();
            $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
        });
        $scope.saveMonitor = function () {
            var Data = {Name: $scope.website.name, Url: $scope.website.url, Comment: $scope.website.comment, status: 0, Type: "customer"};

            $http.post("api/monitor", Data).success(function (d) {
                LoadData();
                $scope.saveWarning = "Save website successfully";
                $timeout(function () {
                    $scope.saveWarning = "";
                }, 1000)
            })
        };

        $scope.changeStatus = function (obj) {
            $http.put('api/monitor/' + obj._id, {
                status: Math.abs(obj.status - 1)

            }).success(function (d) {
                    LoadData(obj.Type);
                });
        };
    }];

    return MonitorController;
});