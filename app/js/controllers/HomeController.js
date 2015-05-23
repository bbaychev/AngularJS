'use strict';

app.controller('HomeController',
    function ($scope, $location, notifyService, authService) {
        $scope.logout = function () {
            authService.logout(
                function success() {
                    //notifyService.showInfo("Logout successful");
                    $location.page('/reglog');
                },
                function error(err) {
                    console.log('something\'s not right here');
                    //notifyService.showError("Logout not successful", err);
                }
            );
        };

        //$scope.reloadAds = function() {
        //    adsService.getAds(
        //        $scope.adsParams,
        //        function success(data) {
        //            $scope.ads = data;
        //        },
        //        function error(err) {
        //            notifyService.showError("Cannot load ads", err);
        //        }
        //    );
        //};
        //
        //$scope.reloadAds();
        //
        //// This event is sent by RightSideBarController when the current category is changed
        //$scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
        //    $scope.adsParams.categoryId = selectedCategoryId;
        //    $scope.adsParams.startPage = 1;
        //    $scope.reloadAds();
        //});
        //
        //// This event is sent by RightSideBarController when the current town is changed
        //$scope.$on("townSelectionChanged", function(event, selectedTownId) {
        //    $scope.adsParams.townId = selectedTownId;
        //    $scope.adsParams.startPage = 1;
        //    $scope.reloadAds();
        //});
    }
);
