'use strict';

app.factory('postService',
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

            getPostById: function(postId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postId,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            updatePostById: function(postData, postId, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/Posts/' + postId,
                    data: postData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deletePostById: function(postId, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/Posts/' + postId,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getPostLikes: function(postId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postId + '/likes',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            previewPostLikes: function(postId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postId + '/likes/preview',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            likePost: function(postId, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/' + postId + '/likes',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            unlikePost: function(postId, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/Posts/' + postId + '/likes',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        };
    }
);
