'use strict';

define([ 'i18n!resources/nls/res', '../utils/excel', 'linqjs' ], function (res, excel, Enumerable) {

    var TopicGroupController = ['$scope', '$rootScope', '$http', 'FeedService', '$window' , function ($scope, $rootScope, $http, FeedService, $window) {

        $rootScope.menuUrl = "partials/leftmenu/feedsMenu.html";
        $rootScope.title = "Topic Group - " + res.title;
        $rootScope.show = true;
        $scope.show = true;


        $scope.sourceType = [];
        $http.get('api/feedsSourceType').success(function (d) {
            console.log(d);
            $scope.sourcetype = Enumerable.From(d).Select("{type:$,checked:false}").ToArray();
            console.log($scope.sourcetype);
        });
        $scope.selectkimiss = function (row) {
            $scope.selectedRow = row;
        };
        $rootScope.deleteTopic = function (id) {
            if ($window.confirm("Are you sure delete the topic?")) {
                $http.delete("api/topic/" + id).success(function (d) {
                    console.log(d);
                    getTopicGroup();

                });
            }

        };
        $rootScope.removeTopic = function (event, feed) {

            if ($window.confirm("Are you sure delete the topic?")) {
                $http.delete("api/topic/" + feed._id).success(function (d) {
                    console.log(d);
                    getTopicGroup();

                });
            }
            event.stopPropagation();
        };
        $scope.searchFeed = function () {
            var sts = Enumerable.From($scope.sourcetype)
                .Where(function (x) {
                    return x.checked === true
                })
                .Select("$.type")
                .ToArray();
            sts = sts.join('|');
            console.log(sts);
            var searchData = {keyword: $scope.keyword, st: sts, starttime: $scope.feeds.startTime, endtime: $scope.feeds.endTime, pageindex: $scope.feeds.pageIndex};
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
            pageIndex: 1
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
                Keyword: $scope.keyword,
                SearchCondition: {
                    SourceType: sts,
                    StartDate: new Date($scope.feeds.startTime),
                    EndDate: new Date($scope.feeds.endTime)
                },
                GroupId: $scope.topicGroupName,
                OwnerId: "GE",
                CreateDate: Date.now(),
                UpdateDate: Date.now()

            }).success(function (d) {
                    getTopics(function () {
                        $scope.topicName = '';
                        $scope.saveTopicWarning = "Save Topic Successfully";
                        getTopicGroup();
                    })

                });
        };
        var getTopicGroup = function () {
            $http.get("api/topicgroup").success(function (d) {
                $scope.groups = d;
            });
        };
        getTopicGroup();
        $scope.saveTopicGroup = function () {
            $http.post("api/topicgroup", {Name: $scope.topicGroupName, Description: $scope.topicGroupDescription}).success(function (d) {
                $http.get("api/topicgroup").success(function (d) {
                    getTopicGroup();
                });
            });
        };

        $scope.gotoFeeds = function (id) {
            console.log(id);
        };

        /********************************************
          删除Group的相关操作
         ***********************************************/
        $scope.delGroup=function(group){
            if($window.confirm("Are you sure you want to delete this group and all the topics?") ){
                console.log(group._id);
                $http.delete("api/topicgroup/"+group._id).success(function(d){
                    console.log(d)
                    getTopicGroup();
                })
            }

        }

    }];

    return TopicGroupController;
});