'use strict';

app.factory('commentService',
    function ($http, baseServiceUrl) {
        return {
            getPostComments: function(postId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/posts/' + postId + '/comments',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            addCommentToPost: function(commentData, postId, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/posts/' + postId + '/comments',
                    data: commentData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            updateComment: function(commentData, postId, commentId, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/posts/' + postId + '/comments/' + commentId,
                    data: commentData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deleteComment: function(postId, commentId, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/posts/' + postId + '/comments/' + commentId,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getCommentLikes: function(postId, commentId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/posts/' + postId + 'comments/' + commentId + '/likes',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            previewCommentLikes: function(postId, commentId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/posts/' + postId + 'comments/' + commentId + '/likes/preview',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            likeComment: function(postId, commentId, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/posts/' + postId + 'comments/' + commentId + '/likes',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            unlikeComment: function(postId, commentId, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/posts/' + postId + 'comments/' + commentId + '/likes',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        };
    }
);
