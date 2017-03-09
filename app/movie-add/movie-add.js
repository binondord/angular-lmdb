'use strict';

angular.module('lmdb.movieAdd', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'movie-add/movie-add.html',
    controller: 'MovieAddCtrl',
    controllerAs: 'mactrl'
  });
}])

.controller('MovieAddCtrl', ['$http','$rootScope','$location','$routeParams', function($http, $rootScope, $location, $routeParams) {
  var vm = this;
  //var vm = $scope;

  vm.name = 'MovieAddCtrl';
  vm.params = $routeParams;

  vm.add = {};
  vm.addMovie = function() {
    //console.log('location', $location);
    //if (vm.add.code.length === 6) {
      $rootScope.$emit('MovieAddCtrl:addMovie', vm.add);

      
      $location.path('/list');
    //} else
    //  alert("The length of 'Code' should be exactly 6 characters.");
    vm.add = {};
  };

}]);
