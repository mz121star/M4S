angular.module('$prAngular.config', []).value('$prAngularConfig', {
    baseUrl: "lib/pr-angular/"
});

angular.module('$prAngular.filters', ['$prAngular.config']);
angular.module('$prAngular.directives', ['$prAngular.config']);

angular.module('$prAngular.directives').directive('prBox',
    [
        '$compile'
        , '$prAngularConfig',
        '$window'
        , function ($compile, config, $window) {
        return {
            scope: {
                title: '=boxTitle',
                class: '=boxClass',
                icon: '=boxIcon',
                onClosed: '&'
            },
            restrict: 'E',
            replace: true,
            templateUrl: config.baseUrl + 'prBoxTemplate.html',
            transclude: true,
            link: function (scope, element, attrs, ctrl) {

                scope.showMe = true;

                scope.toggle = function toggle() {
                    scope.showMe = !scope.showMe;

                }
                scope.remove = function remove() {
                    if ($window.confirm("remove？")) {
                        scope.onClosed()
                        console.log("remove")
                        $(element).remove();
                    }
                }

                /*  $compile($(element).contents())(scope);*/
            }
        };
    }]);
/***
 *  Need Required iCheck
 */
angular.module('$prAngular.directives').directive('prCheck',
    [
        '$timeout'
        , '$parse'
        , function ($timeout, $parse) {
        return {
            compile: function (element, $attrs) {
                var icheckOptions = {
                    checkboxClass: 'icheckbox_minimal-blue',
                    radioClass: 'iradio_minimal-blue'
                };

                var modelAccessor = $parse($attrs['ngModel']);
                return function ($scope, element, $attrs, controller) {

                    var modelChanged = function (event) {
                        $scope.$apply(function () {
                            modelAccessor.assign($scope, event.target.checked);
                        });
                    };

                    $scope.$watch(modelAccessor, function (val) {
                        var action = val ? 'check' : 'uncheck';
                        element.iCheck(icheckOptions, action).on('ifChanged', modelChanged);
                    });
                };
            }
        };
    }]);