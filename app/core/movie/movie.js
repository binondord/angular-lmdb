'use strict';

angular.module('core.movie', [
  'ngResource'
])

.factory('Movie', ['$resource', function($resource) {
  return $resource('http://192.168.10.10:3000/:requestType', {}, {
    query: {
      method: 'GET',
      params: {requestType: 'list'},
      isArray: true
    }
  })
}]);
