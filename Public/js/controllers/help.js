'use strict';

define([ 'i18n!resources/nls/res'], function (res) {

    var  HelpController=['$scope','$rootScope',function($scope,$rootScope) {
        $rootScope.menuUrl="";
        $rootScope.title = "Help - "+ res.title;
        $rootScope.show = true;
    }];
           return HelpController;
});