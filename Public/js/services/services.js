define(['app'], function (app) {
    app.factory('FeedService', ['$http', '$q', function ($http, $q) {
        var items = {};
        items.querySourceType = function () {
            var delay = $q.defer();
            $http.get('api/feedsSourceType').success(function (data) {
                delay.resolve(data);
            });
            return delay.promise;
        };

        return items;

    }]);
});