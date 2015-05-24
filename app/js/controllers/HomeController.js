'use strict';

app.controller('HomeController',
    function ($scope, $location, notifyService, authService) {
        $scope.postParams = {
            'startPage': 1,
            'pageSize': 3
        };

        $scope.logout = function () {
            authService.logout(
                function success() {
                    notifyService.showInfo("Logout successful");
                    $location.page('/reglog');
                },
                function error(err) {
                    notifyService.showError("Logout not successful", err);
                }
            );
        };
    }
);
