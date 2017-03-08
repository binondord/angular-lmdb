'use strict';

// Declare app level module which depends on views, and components
angular.module('lmdb', [
  'ngRoute',
  'lmdb.movieAdd',
  'lmdb.movieList',
  'lmdb.movieEdit',
  'lmdb.movieRemove'
//  'lmdb.version'
])

.config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/list'});
  }
]);
