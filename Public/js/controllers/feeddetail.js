'use strict';

define([ 'i18n!resources/nls/res'], function (res) {

    var FeedDetailController = ['$scope', '$rootScope', '$http','$routeParams', function ($scope, $rootScope, $http,$routeParams) {
        $rootScope.menuUrl="";
        $rootScope.title = "Feeds - " + res.title;
        $scope.feedid =     $routeParams.feedId;

    }];

    return FeedDetailController;
});