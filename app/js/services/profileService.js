'use strict';

app.factory('profileService',
    function ($http, baseServiceUrl) {
        return {
            getProfile: function(success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            editProfile: function(userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    data: userData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            changePass: function(passData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/ChangePassword',
                    data: passData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getProfileFriends: function(success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            previewProfileFriends: function(success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends/preview',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getProfileFeed: function(startPostId, pageSize, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/feed?StartPostId=' + startPostId +
                        '&PageSize=' + pageSize,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getFriendRequests: function(success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/requests',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            updateFriendRequest: function(status, requestId, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests/' + requestId + '?status=' + status,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            sendFriendRequest: function(username, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/me/requests/' + username,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        };
    }
);
