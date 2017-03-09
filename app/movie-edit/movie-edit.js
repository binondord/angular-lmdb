'use strict';

angular.module('lmdb.movieEdit', [
  'ngRoute',
  'core.movie'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit', {
    templateUrl: 'movie-edit/movie-edit.html',
    controller: 'MovieEditCtrl'
  });
}])

.controller('MovieEditCtrl', ['Movie', function(Movie) {
  var vm = this;
  var i;

  Movie.query().$promise.then(function(result) {
    vm.movies = result;
    vm.codeMovies = [];
    for(i = 0; i < vm.movies.length; i++) {
      vm.codeMovies.push(vm.movies[i].code + ' : ' + vm.movies[i].title);
    }
  });
  
  vm.setCode = function(movie) {
    vm.code = movie.substr(0,6);
    for(i = 0; i < vm.movies.length; i++) {
      if (vm.movies[i].code === vm.code) {
        vm.edit.code = vm.movies[i].code;
        vm.edit.title = vm.movies[i].title;
        vm.edit.director = vm.movies[i].director;
        vm.edit.genre = vm.movies[i].genre;
        vm.edit.yearReleased = vm.movies[i].yearReleased;
        break;
      }
    }
  };

  vm.edit = {};
  vm.editMovie = function(code) {
    if (code)
      console.log(vm.edit);
    else 
      alert("Please select a movie.");
  };

}]);
