'use strict';

define([ 'i18n!resources/nls/res','linqjs'], function (res,Enumerable) {

    var AlertsController = ['$scope', '$rootScope', '$http', '$timeout', function ($scope, $rootScope, $http, $timeout) {
        $rootScope.menuUrl = "";
        $rootScope.title = "Alerts - " + res.title;
        $rootScope.menuUrl = "partials/leftmenu/alertMenu.html";

        $rootScope.show = true;
        function getTopics() {
            $http.get('api/topic').success(function (d) {

                $scope.Topics = Enumerable.From(d).Select("{type:$.Name,checked:false}").ToArray();
            });
        };

        getTopics();

        $http.get('api/alert').success(function (d) {

            $scope.alerts = d;
        });
        $scope.alert = {
            id: "",
            name: "",
            keywords: "兰蔻 打折",
            maito: "zhuang.miao@pactera.com",
            smsto: "13840816168",
            receiver: "miaozhuang.net",
            startTime: "2012-02-12",
            endTime: "2012-04-12"

        };
        $scope.editAlert = function (obj) {
            $scope.editting = true;
            $scope.alert.id = obj._id;
            $scope.editWindowTitle = "Edit Alert";
            $scope.alert.name = obj.Name;
            $scope.alert.keywords = obj.Keyword;
            $scope.alert.maito = obj.MailTo;
            $scope.alert.smsto = obj.SMSTo;
            $scope.alert.startTime = obj.AlertStartTime;
            $scope.alert.endTime = obj.AlertEndTime;
            for (var i in obj.Topics) {
                $.each($scope.Topics, function (i, item) {
                    item.checked = false;
                    if (item.type === obj.Topics[i]) {
                        item.checked = true;
                    }
                });

            }

        };
        $scope.addAlertClick = function () {
            console.log("OKOK")
            $scope.editWindowTitle = "Add New Alert";
        };
        $scope.addAlert = function () {

            $scope.saveTopicError = "";
            var sts = Enumerable.From($scope.Topics)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            if (sts.length === 0) {
                $scope.saveTopicError = "必须选择一个Topic";
                return false;
            }
            if ($scope.editting) {  //编辑alert
                $http.put('api/alert/' + $scope.alert.id, {
                    Name: $scope.alert.name,
                    IsRegex: false,
                    Keyword: $scope.alert.keywords,
                    MailTo: $scope.alert.maito,
                    SMSTo: $scope.alert.smsto,
                    Topics: sts,
                    Type: "",
                    OwnerId: "admin",
                    AlertStartTime: $scope.alert.startTime,
                    AlertEndTime: $scope.alert.endTime,
                    UpdateDate: Date.now()


                }).success(function (d) {
                        $http.get('api/alert').success(function (d) {
                            $scope.alerts = d;
                        });

                        $scope.saveTopicWarning = "Edit Alert Successfully"

                        $timeout(function () {
                            $scope.saveTopicWarning = ""
                        }, 1000);


                    });
            }
            else {    //保存新的alert
                $http.post('api/alert', {
                    Name: $scope.alert.name,
                    IsRegex: false,
                    Keyword: $scope.alert.keywords,
                    MailTo: $scope.alert.maito,
                    SMSTo: $scope.alert.smsto,
                    Topics: sts,
                    Type: "",
                    OwnerId: "admin",
                    AlertStartTime: $scope.alert.startTime,
                    AlertEndTime: $scope.alert.endTime,
                    CreateDate: Date.now(),
                    UpdateDate: Date.now()


                }).success(function (d) {
                        $http.get('api/alert').success(function (d) {
                            $scope.alerts = d;
                        });

                        $scope.saveTopicWarning = "Save Alert Successfully"

                        $timeout(function () {
                            $scope.saveTopicWarning = ""
                        }, 1000);


                    });
            }
        };
        $scope.editWindowTitle = "Add New Alert" ;

    }];

    return AlertsController;
});