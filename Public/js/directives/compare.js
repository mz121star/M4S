define(['app', 'handlebars', 'icheck' ], function (app, handlebars, icheck) {
    app.directive('compare', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    console.log("viewValue:%s", viewValue);
                    console.log("attrs.compare:%s", attrs.compare);
                    if (viewValue == "" || attrs.compare == "" || viewValue == attrs.compare) {
                        ctrl.$setValidity('compare', true);
                    } else {
                        ctrl.$setValidity('compare', false);
                    }
                    return viewValue;
                });
            }
        };
    });
    app.directive('ngScroll', function () {
        return {
            link: function (scope, elm, attrs, ctrl) {
                $(elm).mCustomScrollbar({
                    scrollButtons: {
                        enable: true
                    }
                });
            }
        };
    });
    app.directive('modalbox', function () {
        return {
            link: function (scope, elm, attrs, ctrl) {
                $(elm).on("click", function () {
                    alert('ok')
                })
            }
        };
    });
    app.directive('sortable', function () {
        return {
            link: function (scope, elm, attrs, ctrl) {
                $(elm).css('cursor', 'pointer')

                /*   $(elm).on("click", function () {
                 alert('准备排序')
                 console.log(attrs);
                 console.log(scope);
                 })*/
            }
        };
    });
    app.directive('showdetail', function () {

        return {
            link: function (scope, elm, attrs, ctrl) {
                $(elm).css('cursor', 'pointer')


                /* $(elm).on("click", function () {
                 alert('popup')
                 console.log(elm);
                 console.log(scope)              ;
                 })*/
            }
        };
    });
    /* app.directive('prCheck',['$timeout', '$parse', function ($timeout, $parse) {
     return {
     compile: function (element, $attrs) {
     var icheckOptions = {
     checkboxClass: 'icheckbox_minimal-blue',
     radioClass: 'iradio_minimal-blue',
     increaseArea: '20%'
     };
     ngModelGetter = $parse($attrs['ngModel']);
     return function($scope, element, $attrs, ctrl) {
     return $timeout(function () {
     var ngModelGetter, value;

     value = $parse($attrs['ngValue'])($scope);


     return $(element).iCheck(icheckOptions).on('ifChanged', function (event) {
     if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
     $scope.$apply(function () {
     return ngModelGetter.assign($scope, event.target.checked);
     });
     }
     if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
     return $scope.$apply(function () {
     return ngModelGetter.assign($scope, value);
     });
     }
     });
     var modelChanged = function (event) {
     $scope.$apply(function () {
     ngModelGetter.assign($scope, event.target.checked);
     });
     };
     $scope.$watch(ngModelGetter, function (val) {
     var action = val ? 'check' : 'uncheck';
     element.iCheck(icheckOptions, action).on('ifChanged', modelChanged);
     });
     });

     }
     }
     }
     }]);*/
   /* app.directive('prCheck', ['$timeout', '$parse', function ($timeout, $parse) {
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
    }]);*/
   /* app.directive('prBox', ['$compile',function ($compile) {
        return {
            scope: {
               title: '=boxTitle',
               class: '=boxClass',
               icon:'=boxIcon'
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'js/directives/prBoxTemplate.html',
            transclude: true,
            link : function(scope, element, attrs, ctrl) {

                scope.showMe = true;

                scope.toggle = function toggle() {
                    scope.showMe = !scope.showMe;

                }
                scope.remove=function remove(){
                    console.log("remove")
                    $(element).remove();
                }

              *//*  $compile($(element).contents())(scope);*//*
            }
        };
    }]);*/
    /* app.directive('prCheck', function () {
     return {
     restrict: 'A',
     require: '?ngModel',
     link: function ($scope, $element, $attrs, $ngModel) {
     if (!$ngModel) {
     return;
     }
     //using iCheck
     $($element).iCheck({

     cursor: true,
     checkboxClass: 'icheckbox_minimal-blue',
     radioClass: 'iradio_minimal-blue',
     increaseArea: '20%'
     }).on('ifClicked', function (event) {
     if ($attrs.type == "checkbox") {
     //checkbox, $ViewValue = true/false/undefined
     $scope.$apply(function () {
     $ngModel.$setViewValue(!($ngModel.$modelValue == undefined ? false : $ngModel.$modelValue));
     });
     } else {
     // radio, $ViewValue = $attrs.value
     $scope.$apply(function () {
     $ngModel.$setViewValue($attrs.value);
     });
     }
     });

     $ngModel.$render = function () {
     var value = $attrs.value;
     $element[0].checked = (value == $ngModel.$viewValue);
     };
     $attrs.$observe('value', $ngModel.$render);


     }
     };
     });*/
    app.directive('toggletable', ['$http', function ($http) {

        return {

            link: function (scope, elm, attrs, ctrl) {

                var temp =
                    "  <td colspan='8' class='subrowtd'>" +
                        "<table class='table  keep-all'>" +

                        "<tr class='thead'>    " +
                        "<th class='w5-p'>N0.</th>    " +
                        "<th sortable class='w12-p'>Title</th>         " +
                        "<th class='w39-p'>Description</th>       " +
                        "<th class='w12-p'>Source</th>            " +
                        "<th>Url</th>                      " +

                        " </tr>    " +


                        "{{#each feeds}} " +
                        " <tr class='tbody {{rate}} td-border'>" +
                        "<td> </td>         " +
                        "<td>{{Title}} </td>    " +
                        "<td >{{ maxContent}} </td>   " +
                        "<td>{{ FromSite }}</td>                              " +
                        "<td><a  >{{url}}</a></td>  " +

                        "</tr>                    " +
                        "{{/each}}" +

                        " </table></td>";

                $(elm).toggle(
                    function () {
                        $(elm).attr("class", "closelist");
                    },
                    function () {
                        $(elm).attr("class", "openlist");
                    }

                );
                $(elm).on("click", function () {

                    console.log(attrs)
                    if (attrs.queryover === "0") {
                        $(elm).parent().next().html("<img src='images/icon/waiting.gif' />Loading...");
                        $http.get('api/alert/' + attrs.id).success(function (d) {

                            $http.post("api/feeds", {keyword: d[0].Keyword}).success(function (data) {


                                var template = Handlebars.compile(temp);
                                Handlebars.registerHelper('maxContent', function () {

                                    var len = this.Content.length > 50 ? 50 : this.Content.length
                                    return this.Content.substring(0, len - 1) + "...";
                                });
                                Handlebars.registerHelper('rate', function () {
                                    if (this.Semantic === 0) return "";
                                    var cls = this.Semantic > 0 ? "positive" : "negative";

                                    return cls;
                                });
                                Handlebars.registerHelper('url', function () {

                                    var cls = this.FromUrl.length > 40 ? this.FromUrl.substring(0, 39) + "..." : this.FromUrl;

                                    return cls;
                                });
                                attrs.queryover = "1";
                                console.log($(elm).parent().next().children('.subrowtd'));
                                $(elm).parent().next().html(template(data));

                            })
                        });
                    }
                    $(elm).parent().next().toggle();

                })
            }
        };
    }]);
    app.directive('showtopictable', ['$http', '$compile', function ($http, $compile) {

        return {
            /*scope: {
             delTopic:function(id){
             console.log(id);
             }
             },*/
            link: function (scope, elm, attrs, ctrl) {

                var temp =
                    "  <td colspan='8' class='subrowtd'>" +
                        "<table class='table'>" +

                        "<tr class='thead'>    " +

                        "<th class='w15-p'>Topic Name</th>         " +
                        "<th class='w15-p'>Keyword</th>         " +
                        "<th class='w39-p'>Source Type</th>         " +
                        "<th >Action</th>         " +
                        " </tr>    " +


                        "{{#each topics}} " +
                        " <tr class='tbody {{rate}}'>" +

                        "<td>{{Name}} </td>    " +
                        "<td>{{Keyword}} </td>    " +
                        "<td >{{SourceTypeString}}</td>         " +
                        "<td ><a class='btn btn-primary' href='#/feeds/?topicid={{_id}}'>View</a> <a class='btn btn-primary'  ng-click='deleteTopic(\"{{_id}}\")'  href='javascript:;'>Delete</a> </td>         " +
                        "</tr>                    " +
                        "{{/each}}" +

                        " </table></td>";

                $(elm).toggle(
                    function () {
                        $(elm).attr("class", "closelist");
                    },
                    function () {
                        $(elm).attr("class", "openlist");
                    }

                );
                $(elm).on("click", function () {

                    console.log(attrs)
                    if (attrs.queryover === "0") {
                        $(elm).parent().next().html("<img src='images/icon/waiting.gif' />Loading...");
                        $http.get('api/topic?groupid=' + attrs.id).success(function (d) {
                            var template = Handlebars.compile(temp);
                            Handlebars.registerHelper('maxContent', function () {
                                var len = this.Content.length > 50 ? 50 : this.Content.length;
                                return this.Content.substring(0, len - 1) + "...";
                            });
                            Handlebars.registerHelper('rate', function () {
                                if (this.Semantic === 0) return "";
                                var cls = this.Semantic > 0 ? "positive" : "negative";
                                return cls;
                            });
                            Handlebars.registerHelper('url', function () {
                                var cls = this.FromUrl.length > 40 ? this.FromUrl.substring(0, 39) + "..." : this.FromUrl;
                                return cls;
                            });
                            Handlebars.registerHelper('SourceTypeString', function () {
                                console.log(this.SourceType);
                                var cls = this.SearchCondition.SourceType.join(" | ");
                                return cls;
                            });

                            attrs.queryover = "1";
                            console.log($(elm).parent().next().children('.subrowtd'));
                            var data = {topics: d};
                            var contenthtml = template(data);


                            $(elm).parent().next().html(contenthtml);
                            $compile($(elm).parent().next().contents())(scope);
                        });
                    }
                    $(elm).parent().next().toggle();

                })
            }
        };
    }]);
    /*  app.directive('uniform', function () {
     require('jqueryuniform');
     return {

     link: function (scope, elm, attrs, ctrl) {
     $("select, input").uniform();
     }
     };
     });*/

})
;
