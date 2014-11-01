'use strict';

define([ 'i18n!resources/nls/res', '../utils/excel', 'linqjs'], function (res, excel, Enumerable) {

    var FeedsController = ['$scope', '$rootScope', '$http', 'FeedService', '$window' , '$location', function ($scope, $rootScope, $http, FeedService, $window, $location) {


        $rootScope.menuUrl = "partials/leftmenu/feedsMenu.html";
        $rootScope.title = "Feeds - " + res.title;
        /*  $rootScope.pageTitle="Feeds Page";*/
        $rootScope.show = true;
        $scope.show = true;
        $scope.source = {
            keywordExpression: "兰蔻品牌"
        };

        $scope.sourceType = [];
        $http.get('api/feedsSourceType').success(function (d) {
            console.log(d);
            $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
            console.log($scope.sourcetype);
        });
        $scope.selectkimiss = function (row) {
            $scope.selectedRow = row;
        };
        $rootScope.removeTopic = function (event, feed) {

            if ($window.confirm("Are you sure delete the topic?")) {
                $http.delete("api/topic/" + feed._id).success(function (d) {
                    console.log(d);
                    gettopicSelected();

                });
            }
            event.stopPropagation();
        }
        $scope.searchFeed = function () {
            var sts = Enumerable.From($scope.sourcetype)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            sts = sts.join('|');
            console.log(sts);
            var searchData = {keyword: $scope.feeds.keyword, st: sts, starttime: $scope.feeds.startTime, endtime: $scope.feeds.endTime, pageindex: $scope.feeds.pageIndex};
            /*            console.log(searchData);*/
            $http.post("api/feeds", searchData).success(function (d) {
                $scope.pages = d.count > 20 ? 20 : parseInt(d.count, 10);
                if ($scope.feeds.pageIndex > $scope.pages) {
                    $scope.feeds.pageIndex = 1
                    $scope.searchFeed();
                }
                else {
                    $scope.feedContent = Enumerable.From(d.feeds).ToArray();
                }
            });

        };

        /*FeedService.querySourceType().then(function (d) {

         $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
         });*/

        $scope.feeds = {
            startTime: new Date("2010-01-01"),
            endTime: new Date(),
            sourceTypeName: '',
            description: '',
            pageIndex: 1  ,
            keyword:''
        };

        $scope.showDetail = function (feed) {
            $scope.modal.title = feed.Title;
            $scope.modal.source = feed.FromSite;
            $scope.modal.url = feed.FromUrl;
            $scope.modal.author = feed.Author;
            $scope.modal.publishtime = feed.PublishTime
            $scope.modal.content = feed.content || feed.Content;

        };
        $scope.modal = {
            title: "Title",
            source: "",
            url: ""
        };
        $http.post("api/feeds").success(function (d) {
            $scope.feedContent = d.feeds;
            $scope.pages = d.count > 20 ? 20 : parseInt(d.count, 10);
        });
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

        $scope.exportExcel = function (tname, excelname) {
            excel(tname, excelname);
        };
        $rootScope.Topics = [
            {name: "topic1"},
            {name: "topic2"}
        ];
        var gettopicSelected = function (callback) {
            $http.get('api/topic').success(function (d) {
                $rootScope.Topics = d;
                /*  Enumerable.From(d);*/
                /* .Select("{name:$.Name}").ToArray();*/
                if (callback) callback();
            });
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
        $scope.saveTopic = function () {
            //load sourcetype
            var sts = Enumerable.From($scope.sourcetype)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            $http.post('api/topic', {
                Name: $scope.topicName,
                Keyword: $scope.feeds.keyword,
                SearchCondition: {
                    SourceType: sts,
                    StartDate: new Date($scope.feeds.startTime),
                    EndDate: new Date($scope.feeds.endTime)
                },
                OwnerId: "admin",
                CreateDate: Date.now(),
                UpdateDate: Date.now()

            }).success(function (d) {
                    getTopics(function () {
                        $scope.topicName = '';
                        $scope.saveTopicWarning = "Save Topic Successfully"
                    })

                });
        };

        $rootScope.topicSelected = function (topic) {

            $scope.feeds.keyword = topic.Keyword;
            $scope.feeds.startTime = topic.SearchCondition.StartDate;
            $scope.feeds.endTime = topic.SearchCondition.EndDate;
            $scope.source.keywordExpression = topic.Keyword;
            var sourceType = topic.SearchCondition.SourceType;


            for (var k in $scope.sourcetype) {
                $scope.sourcetype[k].checked = false;
                for (var i in sourceType) {
                    if ($scope.sourcetype[k].type === sourceType[i]) {
                        $scope.sourcetype[k].checked = true;
                    }

                }
            }

            $scope.sourcetype = $scope.sourcetype;
            /* console.log($scope.sourcetype);
             console.log(topic);*/
        };


        $scope.PagerData = function (pageindex) {
            $scope.feeds.pageIndex = pageindex;
            $scope.searchFeed();
        };

        /***
         * 带querystring的页面，需要load的时候直接把topic填入
         *
         */
        var topicid = $location.$$url.match(/topicid=(\w+)/);
        if (topicid) topicid = topicid[1];
        console.log(topicid);

            $http.get('api/topic/' + topicid).success(function (topic) {
                topic = topic[0];
                $scope.feeds.keyword = topic.Keyword;
                $scope.feeds.startTime = topic.SearchCondition.StartDate;
                $scope.feeds.endTime = topic.SearchCondition.EndDate;
                $scope.source.keywordExpression = topic.Keyword;
                var sourceType = topic.SearchCondition.SourceType;


                for (var k in $scope.sourcetype) {
                    $scope.sourcetype[k].checked = false;
                    for (var i in sourceType) {
                        if ($scope.sourcetype[k].type === sourceType[i]) {
                            $scope.sourcetype[k].checked = true;
                        }

                    }
                }

                $scope.sourcetype = $scope.sourcetype;
                $scope.searchFeed();
            });


    }];

    return FeedsController;
});