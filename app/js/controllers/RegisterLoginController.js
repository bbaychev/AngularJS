'use strict';

app.controller('RegisterLoginController',
    function ($scope, $rootScope, $location, notifyService, authService) {
        $rootScope.pageTitle = "Register/Login";

        $scope.register = function(registerData) {
            authService.register(registerData,
                function success() {
                    $location.page('/');
                },
                function error(err) {
                }
            );
        };

        $scope.login = function(loginData) {
            authService.login(loginData,
                function success() {
                    $location.page('/');
                },
                function error(err) {
                }
            );
        };

        $scope.logout = function() {
            authService.logout(function success() {
                sessionStorage.clear();
                $location.page('/reglog');
            }, function error(err) {

            });
        };
    }
);