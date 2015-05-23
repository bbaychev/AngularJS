'use strict';

app.controller('RegisterLoginController',
    function ($scope, $rootScope, $location, notifyService) {
        $rootScope.pageTitle = "Register/Login";

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("User registered successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };

        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        }
    }
);