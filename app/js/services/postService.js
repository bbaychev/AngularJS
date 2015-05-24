'use strict';

app.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            addNewPost: function(postData, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts',
                    data: postData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getPostById: function(postData, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postData.postId,
                    data: postData.postId,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            updatePostById: function(postData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/Posts/' + postData.postId,
                    data: postData.postId,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deletePostById: function(postData, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/Posts/' + postData.postId,
                    data: postData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getPostLikes: function(postData, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postData.postId + '/likes',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            previewPostLikes: function(postData, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postData.postId + '/likes/preview',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            likePost: function(postData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/' + postData.postId + '/likes',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            unlikePost: function(postData, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/Posts/' + postData.postId + '/likes',
                    data: data.status,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
