'use strict';

app.controller('HomeController',
    function ($scope, $location, notifyService, authService) {
        $scope.logout = function () {
            authService.logout(
                function success() {
                    //notifyService.showInfo("Logout successful");
                    $location.path('/reglog');
                },
                function error(err) {
                    //notifyService.showError("Logout not successful", err);
                }
            );
        };
    }
);
