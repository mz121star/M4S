'use strict';

define([ 'i18n!resources/nls/res', 'linqjs' ], function (res,Enumerable) {

    var ReportsController = ['$scope', '$rootScope', '$http', '$timeout', function ($scope, $rootScope, $http, $timeout) {
        $rootScope.title = "Reports - " + res.title;
        $rootScope.menuUrl = "partials/leftmenu/reportsMenu.html";

        $rootScope.show = true;
        // $rootScope.title= res.title;
        $scope.source = {
            brand: "兰蔻"
        };


        $http.get('api/topic').success(function (d) {

            $scope.Topics = Enumerable.From(d).Select("{type:$.Name,checked:false}").ToArray();
        });
        var InitData = {
            dataType: [
                {value: "Daily"} ,
                {value: "Weekly"},
                {value: "Monthly"},
                {value: "Quarterly"},
                {value: "Annual"}

            ],
            receiver: "",
            type: "Daily"
        };
        $scope.report = {
            dataType: [
                {value: "Daily"} ,
                {value: "Weekly"},
                {value: "Monthly"},
                {value: "Quarterly"},
                {value: "Annual"}

            ],
            receiver: "@pactera.com",
            type: "Daily"

        };

        $http.get('api/subReport').success(function (d) {

            $scope.subReports = d;
        });
        $scope.editWindowTitle = "Add New";
        $scope.addReport = function () {
            $scope.editWindowTitle = "Add New";
            $scope.saveTopicError = "";
            var sts = Enumerable.From($scope.Topics)
                .Where(function (x) {
                    return x.checked === true;
                })
                .Select("$.type")
                .ToArray();
            if (sts.length === 0) {
                $scope.saveTopicError = "必须选择一个Topic";
                return false;
            }
            $http.post('api/subReport', {
                Name: "(" + sts.join("|") + ")-" + $scope.report.type,
                Type: $scope.report.type,
                Receiver: $scope.report.receiver,
                Topics: sts,
                OwnerId: "admin",
                CreateDate: Date.now(),
                UpdateDate: Date.now(),
                Status: 1

            }).success(function (d) {
                    $http.get('api/subReport').success(function (d) {
                        $scope.subReports = d;
                    });

                    $scope.saveTopicWarning = "Save Topic Successfully"
                    $scope.report = InitData;
                    $timeout(function () {
                        $scope.saveTopicWarning = ""
                    }, 1000);


                });
        };
        $scope.changeSubStatus = function (report) {
            $http.put('api/subReport', {
                _id: report._id

            }).success(function (d) {
                    $http.get('api/subReport').success(function (d) {
                        $scope.subReports = d;
                    });
                });
        }
        $scope.subPreview_URL = "javascript:;";
        $scope.showPreview = function (url) {
            $scope.subPreview_URL = "api/subReportPreview/" + url;

        };
        $scope.sendSubReport = function (report, event) {

            $(event.target).button("loading");
            $http.get("api/sendPreviewMail/" + report._id).success(function (d) {
                $scope.sendSuccess = "主题为" + (report.Name) + "的邮件发送成功";
                $timeout(function () {
                    $scope.sendSuccess = "";
                }, 2000);
                $(event.target).button("reset");
            }).error(function (d) {
                    $scope.sendError = "主题为" + (report.Name) + "的发送失败";
                    $(event.target).button("reset");
                });
        }
    }];

    return ReportsController;
});