var app = angular.module("playlist", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/playlist", {
        templateUrl : "tracks.html"
    })
});
