'use strict';

// Declare app level module which depends on views, and components
angular.module('lmdb', [
  'ngRoute',
  'core.movie',
  'lmdb.movieAdd',
  'lmdb.movieList',
  'lmdb.movieEdit',
  'lmdb.movieRemove'
//  'lmdb.version'
])

.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/add', {
      templateUrl: 'movie-add/movie-add.html'
    }).when('/list', {
      templateUrl: 'movie-list/movie-list.html'
    }).when('/edit', {
      templateUrl: 'movie-edit/movie-edit.html'
    }).when('/remove', {
      templateUrl: 'movie-remove/movie-remove.html'
    }).otherwise('/list');
  }
])

.controller('ParentCtrl', ['Movie', '$rootScope', '$timeout',
  function(Movie, $rootScope, $timeout) {
    var vm = this;

    vm.movies = Movie.query();
    vm.loadMovies = function() {
      console.log('ParentCtrl.loadMovies', vm.movies);
      $timeout(function() {
        $rootScope.$broadcast('ParentCtrl:loadMovies', vm.movies);
      }, 100);
    }
  }
]);
