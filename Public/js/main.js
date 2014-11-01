require.config({
    paths: {
        jquery: '../lib/jquery/jquery-2.0.3.min',
        bootstrap: '../lib/bootstrap/js/bootstrap.min',
        underscore: '../lib/underscore/underscore',
        angular: '../lib/angular/angular.min',
        angularResource: '../lib/angular/angular-resource',
        text: '../lib/require/text',
        i18n: '../lib/require/i18n',
        bootstrapModal:'../lib/bootstrap/js/modal',
        ichart: '../lib/ichart.1.2.src'  ,
        linqjs:'../lib/linq',
        'angular-strap':'../lib/angular-strap/angular-strap',
        'fileupload':'../lib/angularFileUpload/angular-file-upload',
        'bootstrap-datepicker':'../lib/angular-strap/bootstrap-datepicker' ,
        "async":'../lib/async',
        "moment": "../lib/moment.min",
        "handlebars":"../lib/handlebars",
        "icheck":"../lib/icheck/jquery.icheck" ,
        "pr-angular":"../lib/pr-angular/pr-angular",
        "datatable":"../lib/datatable/jquery.dataTables.min",
        "ztree":"../lib/zTree/jquery.ztree.all-3.5.min",
        "jqueryfileload":"../lib/jquery/jquery.fileupload",
        "tinymce":"../lib/tinymce/tinymce.min",
        "angular-file-upload":"../lib/angular-file-upload"
        //"jquery-ui":""
    },
    shim: {
        'angular': {deps: ['jquery'],'exports': 'angular'},
        'angular-resource': {deps: ['angular']},
        'pr-angular' : {deps: ['angular']},
        'bootstrap-datepicker':  {deps: ['jquery']},
        'angular-strap':   {deps: ['angular','bootstrap-datepicker']},
        'bootstrap': {deps: ['jquery']},
        'jqueryui':{deps: ['jquery']},
        'icheck': {deps: ['jquery']},
        'underscore': {exports: '_'},
        'ztree':{deps:['jquery']},
        'datatable':{deps:['jquery']}
    },
    priority: [
        "angular"
    ],
    i18n: {
        locale: 'en-us'
    },
    urlArgs: 'v=1.0.0.1'
});

require(['angular',
    'app',
    'jquery',
    'bootstrap',
    'controllers/layout',
    'controllers/index',
    'directives/compare',
    'filter/filters' ,
    'services/services',
    'controllers/include/analysisInclude',
    'controllers/leftmenu/index',
    'routes',
    'ztree',
    'datatable'
], function (angular) {
    angular.bootstrap(document, ['app',function($interpolateProvider){
        $interpolateProvider.startSymbol('{{');
        $interpolateProvider.endSymbol('}}');
    }]);
});
