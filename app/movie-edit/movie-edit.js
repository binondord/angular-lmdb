'use strict';

angular.module('lmdb.movieEdit', [
  // 'ngRoute',
  'core.movie'
])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/edit', {
//     templateUrl: 'movie-edit/movie-edit.html',
//     //controller: 'MovieEditCtrl'
//   });
// }])

.controller('MovieEditCtrl', ['Movie', '$http', '$rootScope','$location', '$scope',
  function(Movie, $http, $rootScope, $location, $scope) {
    var vm = this;
    var i;

    // Movie.query().$promise.then(function(result) {
    //   vm.movies = result;
    //   vm.codeMovies = [];
    //   for(i = 0; i < vm.movies.length; i++) {
    //     vm.codeMovies.push(vm.movies[i].code + ' : ' + vm.movies[i].title);
    //   }
    // });

    $rootScope.$on('ParentCtrl:loadMovies', function(event, data) {
      console.log('MovieEditCtrl.loadMovies', data);
      vm.movies = data;
      vm.codeMovies = [];
      for(i = 0; i < vm.movies.length; i++) {
        vm.codeMovies.push(vm.movies[i].code + ' : ' + vm.movies[i].title);
      }
    });

    vm.populate = function(movie) {
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
    vm.editMovie = function() {
      if (vm.edit.code) {
        $rootScope.$emit('MovieEditCtrl:editMovie', vm.edit);
        $location.path('/list');
      } else {
        alert("Please select a movie.");
      }
    };
  }
]);
