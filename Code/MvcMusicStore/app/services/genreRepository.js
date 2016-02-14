/*
 * Genre Repository
 */
app.factory('genreRepository', function ($http, $q, $cacheFactory) {
    return {
        get: function (params) {
            var deferred = $q.defer();
            $http.get("/api/Genre/", { cache: false }).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        }
    }
});
