/*
 * Main controller for MvcMusicStore
 */
app.controller('MainController', function ($scope, $location, ngDialog, ngTableParams, albumsRepository) {

    $scope.filter = {};
    $scope.data = {
        albums: []
    };
        
    $scope.favorites = [ 386 ]; //We keep favorites here as they are not stored in db, cookies or localstorage

    $scope.tableParams = new ngTableParams();

    //event: Album added
    $scope.$on('album.itemadded', function(event, args) {
        getAlbums();
    });
    
    //Filter in dataset
    $scope.filter = function()
    {
        $scope.tableParams.filter({ $: $scope.filter.search });
    }

    //Set favorite
    $scope.setFavorite = function(albumId)
    {
        if (_.contains($scope.favorites, albumId))
            $scope.favorites.pop(albumId);
        else
            $scope.favorites.push(albumId);
    }

    //Is album favorite
    $scope.isFavorite = function (albumId)
    {
        return _.contains($scope.favorites, albumId);
    }

    var getAlbums = function () {
        albumsRepository.get().then(
            function (data) {
                $scope.data.albums = data;
               
                var initialParams = {
                    sorting: { Status: "asc" },
                    filter: {},
                    count: 10 // initial page size
                };
                var initialSettings = { dataset: data };
                $scope.tableParams = new ngTableParams(initialParams, initialSettings);
            },
            function (error) { //handle error
            }
         );
    }
    getAlbums();

});

