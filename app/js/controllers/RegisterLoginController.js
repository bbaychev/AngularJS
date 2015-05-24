'use strict';

app.controller('RegisterLoginController',
    function ($scope, $rootScope, $location, authService) {
        $rootScope.pageTitle = "Register/Login";

        $scope.register = function(registerData) {
            authService.register(registerData,
                function success() {
                    $location.path('/');
                },
                function error(err) {
                }
            );
        };

        $scope.login = function(loginData) {
            authService.login(loginData,
                function success() {
                    $location.path('/');
                },
                function error(err) {
                }
            );
        };

        $scope.logout = function() {
            authService.logout(function success() {
                sessionStorage.clear();
                $location.path('/reglog');
            }, function error(err) {

            });
        };
    }
);