'use strict';
var sample = [];
angular.module('lmdb.movieList', [
  'ngRoute',
  'core.movie'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'movie-list/movie-list.html',
    //controller: 'MovieListCtrl'
  });
}])
/*
.controller('MovieListCtrl', ['Movie', '$rootScope', function(Movie, $rootScope) {
  var vm = this;
  var i;
  
  // populate the drop-down menu
  //Movie.query().$promise.then(function(result) {
  //  vm.movies = result;
  //});

  vm.movies = [];
  vm.movies = Movie.query();
  
  //$rootScope.$on('MovieAddCtrl:addMovie', angular.bind(this, function (event, data) {
  $rootScope.$on('MovieAddCtrl:addMovie', function (event, data) {
    console.log("inside MovieAddCtrl:addMovie");
    console.log("before push", vm.movies);
    vm.movies.push({
      code: "546546",
      title: "sample",
      director: "sample",
      genre: "sample",
      yearReleased: 1234
    });
    vm.movies.map(function(movie){
        console.log("type of movie item: ", typeof(movie));
    });
    console.log("after push", vm.movies);
  });

  vm.updateTable = function() {
    sample = vm;
    vm.movies.push({
      code: "123456",
      title: "sample",
      director: "sample",
      genre: "sample",
      yearReleased: 1234
    });
  };

}]);
*/
.controller('MovieListCtrl', ['$http', '$rootScope', function($http, $rootScope) {
  var vm = this;

  $http.get('http://192.168.10.10:3000/list').then(function(response) {
    vm.movies = response.data;
  });

  $rootScope.$on('MovieAddCtrl:addMovie', function(event, args){
    console.log("inside MovieAddCtrl:addMovie");
    console.log("before push", vm.movies);
    vm.movies.push({
      code: "546546",
      title: "sample",
      director: "sample",
      genre: "sample",
      yearReleased: 1234
    });
    console.log("after push", vm.movies);
  });
  
}]);
