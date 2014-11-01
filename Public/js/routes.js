define(['app',
    'controllers/index',
    'controllers/login',
    'controllers/logout',
    'controllers/signup',
    'controllers/monitor',
    'controllers/alerts',
    'controllers/analysis',
    'controllers/dashboard',
    'controllers/feeds',
    'controllers/help',
    'controllers/reports' ,
    'controllers/feeddetail',
    'controllers/topicgroup',
    'controllers/product',
    'controllers/role',
    'controllers/company',
    'controllers/node',
    'controllers/newscategory',
    'controllers/template',
    'controllers/carcomponent',
    'controllers/news',
    'controllers/activity',
    'controllers/advert',
    'controllers/share',
    'controllers/subject',
    'controllers/task',
    'controllers/setting',
    'controllers/carowner',
    'controllers/brand',
    'controllers/area',
    'controllers/newspublic',
    'controllers/activitypublic',
    'controllers/advertpublic',
    'controllers/advise',
    'controllers/carrepair',
    'controllers/blacklist',
    'controllers/book',
    'controllers/im',
    'controllers/activityjoin'
],
    function (app, index, login, logout, singnup, monitor, alerts, analysis, dashboard, feeds, help, reports,feeddetail,topicgroup,product,role,company,node
        ,newscategory,template,carcomponent,news,activity,advert,share,subject,task,setting,carowner,brand,
        area,newspublic,activitypublic,adverpublic,advise,carrepair,blacklist,book,im,join) {
        return app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {templateUrl: '/partials/index.html', controller: index}).
                when('/login', {templateUrl: '/partials/login.html', controller: login}).
                when('/logout', {templateUrl: '/partials/logout.html', controller: logout}).
                when('/signup', {templateUrl: '/partials/signup.html', controller: singnup}).
                when('/useradmin', {templateUrl: '/partials/dashboard.html', controller: dashboard}).
                when('/feeds/', {templateUrl: '/partials/feeds.html', controller: feeds}).
                when('/group/', {templateUrl: '/partials/topicgroup.html', controller: topicgroup}).
                when('/feeds/:feedId', {templateUrl: '/partials/feeds-detial.html', controller: feeddetail}).
                when('/product', {templateUrl: '/partials/product.html', controller: product}).
                when('/analysis', {templateUrl: '/partials/analysis.html', controller: analysis}).
                when('/reports', {templateUrl: '/partials/reports.html', controller: reports}).
                when('/alerts', {templateUrl: '/partials/alerts.html', controller: alerts}).
                when('/monitor', {templateUrl: '/partials/monitor.html', controller: monitor}).
                when('/help', {templateUrl: '/partials/help.html', controller: help}).
                when('/rolelist',{templateUrl:'/partials/rolelist.html',controller:role}).
                when('/company',{templateUrl:'/partials/company.html',controller:company}).
                when('/node',{templateUrl:'/partials/node.html',controller:node}).
                when('/newscategory',{templateUrl:'/partials/newscategory.html',controller:newscategory}).
                when('/template',{templateUrl:'/partials/template.html',controller:template}).
                when('/carcomponent',{templateUrl:'/partials/carcomponent.html',controller:carcomponent}).
                when('/news',{templateUrl:'/partials/news.html',controller:news}).
                when('/activity',{templateUrl:'/partials/activity.html',controller:activity}).
                when('/advert',{templateUrl:'/partials/advert.html',controller:advert}).
                when('/share',{templateUrl:'/partials/share.html',controller:share}).
                when('/subject',{templateUrl:'/partials/subject.html',controller:subject}).
                when('/task',{templateUrl:'/partials/task.html',controller:task}).
                when('/setting',{templateUrl:'/partials/setting.html',controller:setting}).
                when('/carowner',{templateUrl:'/partials/carowner.html',controller:carowner}).
                when('/brand',{templateUrl:'/partials/brand.html',controller:brand}).
                when('/area',{templateUrl:'/partials/area.html',controller:area}).
                when('/newspublic',{templateUrl:'/partials/newspublic.html',controller:newspublic}).
                when('/activitypublic',{templateUrl:'/partials/activitypublic.html',controller:activitypublic}).
                when('/advertpublic',{templateUrl:'/partials/advertpublic.html',controller:adverpublic}).
                when('/advise',{templateUrl:'/partials/advise.html',controller:advise}).
                when('/repair',{templateUrl:'/partials/carrepair.html',controller:carrepair}).
                when('/blacklist',{templateUrl:'/partials/blacklist.html',controller:blacklist}).
                when('/book',{templateUrl:'/partials/book.html',controller:book}).
                when('/im',{templateUrl:'/partials/im.html',controller:im}).
                when('/join',{templateUrl:'/partials/activityjoin.html',controller:join}).
                otherwise({redirectTo: '/'});
            /*  $locationProvider.html5Mode(true);*/
        }]);
    });