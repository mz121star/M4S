
define(['angular','angular-strap','pr-angular','fileupload'], function (angular ) {
    var appmodule=angular.module('app', ['$strap.directives','$prAngular.directives']);

    appmodule.directive('tree', function () {
        return{
            link: function ($scope, element, attrs, ngModel){

            }
        }
    });
    appmodule.directive('datatable',function(){
        return{
            link: function ($scope, element, attrs, ngModel){

            }
        }
    });
    appmodule.directive('fileupload', function() {
        return {
            restrict:'A',
            scope: {
                done: '&',
                progress: '&'
            },
            link: function(scope, element, attrs) {
                var optionsObj = {
                    dataType: 'json'
                };
                if(scope.done) {
                    optionsObj.done = function(e, data) {
                        scope.$apply(function() {
                            scope.done({e: e, data: data});
                        });
                    };
                }
                if(scope.progress) {
                    optionsObj.progress = function(e, data) {
                        scope.$apply(function() {
                            scope.progress({e: e, data: data});
                        });
                    };
                }
                //以上内容可以简单地在一个循环中完成，这里是为了覆盖Fileupload控件所提供的API
                element.fileupload(optionsObj);
            }
        };
    });
    return appmodule;
});

