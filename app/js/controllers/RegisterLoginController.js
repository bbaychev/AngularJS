'use strict';

app.controller('RegisterLoginController',
    function ($scope, $rootScope, $location, notifyService, authService) {
        $rootScope.pageTitle = "Register/Login";

        $scope.register = function(registerData) {
            authService.register(registerData,
                function success() {
//                    notifyService.showInfo('User registered successfully');
                    $location.path('/');
                },
                function error(err) {
//                    notifyService.showError("User registration failed", err);
                }
            );
        };

        $scope.login = function(loginData) {
            authService.login(loginData,
                function success() {
                //    notifyService.showInfo('Login successful');
                    $location.path('/');
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        }
    }
);