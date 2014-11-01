'use strict';

define([ 'i18n!resources/nls/res', '../utils/excel', 'linqjs','jquery','moment' ], function (res, excel,Enumerable,jquery,moment) {

    var AnalysisController = ['$scope', '$rootScope', '$http', 'FeedService' , function ($scope, $rootScope, $http, FeedService) {
        $rootScope.menuUrl = "";
        $rootScope.title = "Analysis - " + res.title;
        $rootScope.menuUrl = "partials/leftmenu/analysisMenu.html";
        // $scope.analysisDetailUrl="partials/charts/default-analysis.html" ;

        $rootScope.show = true;
        $scope.source = {
            keywordExpression: ""

        };
        $scope.sourceType = ['News', 'Forum', 'eCommerce', 'Weibo', 'sohu'];
        $scope.professionalSites = ['CSDN', 'IDC'];
        $http.get('api/topic').success(function (d) {

            $scope.Topics = Enumerable.From(d).Select("{type:$.Name,checked:false}").ToArray();
        });
        $scope.feeds = {
            startTime: new Date("2013-08-01"),
            endTime: new Date()
        };
        $scope.searchDate = {
            starttime: moment(new Date()).add('days', -30).format("MM/DD/YYYY"),
            endtime: moment(new Date()).format("MM/DD/YYYY")
        };
        var getTopics = function (callback) {
            $http.get('api/topic').success(function (d) {
                $rootScope.Topics = d;
                /*  Enumerable.From(d);*/
                /* .Select("{name:$.Name}").ToArray();*/
                if (callback) callback();
            });
        };
        getTopics();
        $rootScope.topicSelected = function (topic) {
            $scope.keyword = topic.Keyword;
            $scope.feeds.startTime = topic.SearchCondition.StartDate;
            $scope.feeds.endTime = topic.SearchCondition.EndDate;
            $scope.source.keywordExpression = topic.Keyword;
            var sourceType = topic.SearchCondition.SourceType;

            /* console.log($scope.sourcetype);*/
            /*    for(var i in sourceType){
             for(var k in $scope.sourcetype) {
             $scope.sourcetype[k].checked=false;
             if($scope.sourcetype[k].type===sourceType[i]){
             $scope.sourcetype[k].checked=true;
             }

             }
             }*/

            for (var k in $scope.sourcetype) {
                $scope.sourcetype[k].checked = false;
                for (var i in sourceType) {
                    if ($scope.sourcetype[k].type === sourceType[i]) {
                        $scope.sourcetype[k].checked = true;
                    }

                }
            }

            $scope.sourcetype = $scope.sourcetype;
            /*    console.log($scope.sourcetype);
             console.log(topic);*/
        };

        var localsearchFeed = function () {
            //主业务
            var sts = Enumerable.From($scope.sourcetype)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            sts = sts.join('|')
            /*  console.log(sts);*/
            var searchData = {st: sts, starttime: $scope.feeds.startTime, endtime: $scope.feeds.endTime};
            $scope.searchDataForChart = "?" + decodeURIComponent(jquery.param($scope.searchDate))
            $http.get('api/mywidgets').success(function (u) {          //查找数据库中最新的用户信息
                $http.get("api/widget?ids=" + u[0].widgets.join(",")).success(function (d) {
                    $scope.myDashBoards = d;

                });
            });
        };
        $scope.searchData = {  starttime: $scope.feeds.startTime, endtime: $scope.feeds.endTime};
        $scope.searchDataForChart = "?" + decodeURIComponent(jquery.param($scope.searchDate))
       $http.get('api/mywidgets').success(function (u) {          //查找数据库中最新的用户信息
            $http.get("api/widget?ids=" + u[0].widgets.join(",")).success(function (d) {
                $scope.myDashBoards = d;

            });
        });
        $scope.searchFeed = localsearchFeed;


        $scope.tagcloud = "partials/charts/tagcloud1.html";
        FeedService.querySourceType().then(function (d) {
            $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
        });
        $scope.feeds = {
            startTime: new Date("2013-08-01"),
            endTime: new Date(),
            sourceTypeName: '',
            description: ''
        };
        $scope.dataRange = 7;
        $scope.$watch("dataRange", function (v1, v2) {
            if (v1) {
                $scope.feeds.startTime = new Date();
                $scope.feeds.startTime = moment(new Date()).add('days', -v1).calendar();
                /*   loadReport();*/
            }
        });
        $scope.$watch("analysisDetailUrl", function (v1, v2) {
            if (v1 === "partials/charts/default-analysis.html") {
                localsearchFeed();
            }
        })
        $scope.searchFeedForm={
            $invalid : true
        }
        $scope.$watch('feeds.startTime+feeds.endTime', function (v1, v2) {
            if ($scope.feeds.startTime >= $scope.feeds.endTime) {
                $scope.warning = "开始不能大于结束";
                $scope.searchFeedForm.$invalid = true;
            }
            else {
                $scope.warning = ""
                $scope.searchFeedForm.$invalid = false;
            }
        });
        $http.get("api/chart").success(function (d) {
            $scope.charts = d;
        });
    }];
    return AnalysisController;
});