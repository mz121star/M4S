'use strict';

define(['../../app', 'i18n!resources/nls/res','underscore'], function (app, res,underscore) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LeftMenuCtrl', function ($scope, $rootScope, $http, $location, $window) {
        $rootScope.analysisDetailUrl = "partials/charts/default-analysis.html";

        $scope.Analysis = {
            toCustomerAnalysis: function () {
                $rootScope.analysisDetailUrl = "partials/charts/customer-analysis.html";
            },
            toBasicAnalysis: function () {
                $rootScope.analysisDetailUrl = "partials/charts/default-analysis.html";
            },
            toReoresentaticeArticles: function () {
                $rootScope.analysisDetailUrl = "partials/charts/representativeArticles-analysis.html";
            }
        };

        $scope.Feeds = {
            feedMenuSelectRow  :1,
            changeStyle: function (index) {
               $scope.Feeds.feedMenuSelectRow=index;
            }
        };
        var getWidgets=function(){
            $http.get("api/widget").success(function(d1){
                var allwidgets=underscore.pluck(d1, '_id');
                $http.get("api/mywidgets").success(function(d2){
                    var  mywidgets =underscore.pluck(d2, 'widgets')[0];
                    var validWidgetIds= underscore.difference(allwidgets,mywidgets);
                    $http.get("api/widget?ids=" + validWidgetIds.join(",")||"1,2").success(function (data) {
                        $scope.Dashboard.Widgets = data;

                    });
                })

            }) ;
        }


        $scope.Dashboard = {
           Widgets:[]
        } ;
        $scope.refresh=function(){
            getWidgets();
        } ;
        getWidgets()

    });
});
