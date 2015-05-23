'use strict';

app.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            login: function(loginData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/login',
                    data: loginData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            register: function(registerData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/register',
                    data: registerData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            logout: function(success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/logout',
                    headers: this.getAuthHeaders()
                };
                //TODO: Check if this whole things even works
                $http(request).success(function(success) {
                    delete sessionStorage['currentUser'];
                }).error(error);
            },

            getCurrentUser : function() {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
            },

            isAnonymous : function() {
                return sessionStorage['currentUser'] == undefined;
            },

            isLoggedIn : function() {
                return sessionStorage['currentUser'] != undefined;
            },

            isNormalUser : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (!currentUser.isAdmin);
            },

            isAdmin : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (currentUser.isAdmin);
            },

            getAuthHeaders : function() {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            },

            getUserProfile: function(username, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + username + '/preview',
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
            }
        }
    }
);
