/*
 * Add album dialog controller
 */
app.controller('AlbumController', function ($scope, $rootScope, $q, $location, ngDialog, albumsRepository, artistRepository, genreRepository) {

    $scope.data = {};

    $scope.checkInput = function () {
        return $("#addalbum").valid();
    }

    /*
     * Get artists and genres
     */
    $q.all([
        artistRepository.get(),
        genreRepository.get()
    ]).then(function (data) {
        $scope.data.Artist = data[0];
        $scope.data.Genre = data[1];
    }, function (reason) {
        //TODO: Handle promise fail
    });


    $scope.addAlbumDialog = function () {
        $scope.album = {};
        /* 
         * add album dialog
         */
        ngDialog.openConfirm({
            template: 'app/views/addAlbum.html',
            scope: $scope,
            showClose: true,
            closeByEscape: false,
            closeByDocument: false,
        })
			.then(function (value) {

			    albumsRepository.post($scope.album).then(
                    function (res) {
                        //Album created
                        ngDialog.openConfirm({
                            template: '<p>Album created</p>  <button type="button" class="btn btn-sm btn-primary" ng-click="confirm(1)">OK</button>',
                            plain: true,
                            closeByDocument: false,
                            closeByEscape: false
                        });

                        $rootScope.$broadcast('album.itemadded', { });
                        
                   },
                   function (errmsg) {
                       //Album failed
                       //Improvement: Display errors (but we should have caught them already in UI validation)
                       ngDialog.openConfirm({
                           template: '<p>Validation error</p>  <button type="button" class="btn btn-sm btn-primary" ng-click="confirm(1)">OK</button>',
                           plain: true,
                           closeByDocument: false,
                           closeByEscape: false
                       });
                   }
               );

			}, function (reason) {
			    //closed
			});
        /* 
         * 
         */

    }


});

