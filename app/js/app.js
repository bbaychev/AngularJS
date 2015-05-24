'use strict';

var app = angular.module('app', ['ngRoute']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/reglog', {
        templateUrl: 'templates/register-login.html',
        controller: 'RegisterLoginController'
    });

    $routeProvider.otherwise({redirectTo: '/reglog'});

});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if (!authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access
            $location.path('/reglog');
        }
    });
});
