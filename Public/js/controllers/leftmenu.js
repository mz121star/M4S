'use strict';

define(['../app', 'i18n!resources/nls/res'], function (app, res) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LeftMenuController', function ($scope, $rootScope, $http, $location, $window) {

        $rootScope.hello = "hello";
    });
});

