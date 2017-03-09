'use strict';

angular.module('lmdb.movieAdd', [])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/add', {
//     templateUrl: 'movie-add/movie-add.html',
//     //controller: 'MovieAddCtrl'
//   });
// }])

.controller('MovieAddCtrl', ['$http','$rootScope','$location',
  function($http, $rootScope, $location) {
    var vm = this;

    vm.add = {};
    vm.addMovie = function() {
      if (vm.add.code.length === 6) {
        $rootScope.$emit('MovieAddCtrl:addMovie', vm.add);
        $location.path('/list');
      } else
        alert("The length of 'Code' should be exactly 6 characters.");
      vm.add = {};
    };
  }
]);
