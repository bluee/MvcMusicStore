/*
 * CommonRepository
 */
app.factory('albumsRepository', function ($http, $q, $cacheFactory) {
    return {
        get: function (params) {
            var deferred = $q.defer();
            $http.get("/api/Album/", { cache: false }).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        },
        post: function (data) {
            var deferred = $q.defer();
            $http.post("/api/Album/", JSON.stringify(data)).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        },

    }
});
