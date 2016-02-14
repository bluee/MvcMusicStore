var app = angular.module('app', [
    'ngRoute',
    'ngDialog',                             //https://github.com/likeastore/ngDialog
    'ngTable',                              //https://github.com/esvit/ng-table
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "MainController"
        })
        .otherwise({
            redirectTo: "/"
        });
});


app.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        //className: 'ngdialog-theme-bootstrap',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: false,
        appendTo: false,
    });
}]);