/*
 * Artist Repository
 */
app.factory('artistRepository', function ($http, $q, $cacheFactory) {
    return {
        get: function (params) {
            var deferred = $q.defer();
            $http.get("/api/Artist/", { cache: true }).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        }
    }
});
