'use strict';

angular.module('lmdb.movieRemove', [
  'ngRoute',
  'core.movie'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/remove', {
    templateUrl: 'movie-remove/movie-remove.html',
    controller: 'MovieRemoveCtrl'
  });
}])

.controller('MovieRemoveCtrl', ['Movie', function(Movie) {
  var vm = this;
  var i;

  // populate the drop-down menu
  Movie.query().$promise.then(function(result) {
    vm.movies = result;
    vm.codeMovies = [];
    for(i = 0; i < vm.movies.length; i++) {
      vm.codeMovies.push(vm.movies[i].code + ' : ' + vm.movies[i].title);
    }
  });

  // set the 'movie code' of the 'removeMovie' function
  vm.setCode = function(movie) {
    vm.code = movie.substr(0,6);
  };

  // do the removal of the selected movie from the database
  vm.removeMovie = function(movie) {
    alert("TODO: Add implementation " + movie);
  };

}]);
