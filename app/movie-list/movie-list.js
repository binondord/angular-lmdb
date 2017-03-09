'use strict';

var sample = [];
var isNotAnEvent = 1;

angular.module('lmdb.movieList', [
  'ngRoute',
  'core.movie'
])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/list', {
//     templateUrl: 'movie-list/movie-list.html'
//     //controller: 'MovieListCtrl'
//   });
// }])
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
.controller('MovieListCtrl', ['$http', '$rootScope', '$timeout', '$scope',
  function($http, $rootScope, $timeout, $scope) {
    var vm = this;

    //vm.movies = [];
    // $http.get('http://192.168.10.10:3000/list').then(function(response) {
    //   console.log(isNotAnEvent);
    //   if (isNotAnEvent) {
    //     console.log("populating vm.movies: start");
    //     vm.movies = response.data;
    //     console.log("initial", vm.movies);
    //     console.log("populating vm.movies: stop");
    //   }
    // });

    $rootScope.$on('ParentCtrl:loadMovies', function(event, data) {
      console.log('MovieAddCtrl.loadMovies', data);
      vm.movies = data;
    });

    $rootScope.$on('MovieAddCtrl:addMovie', function(event, args){
        // isNotAnEvent = 0;
        console.log("inside MovieAddCtrl:addMovie");
        console.log("before push", vm.movies);
        // for(var i in vm.movies ){
        //     console.log('inside loop: ', ' i: ',i, vm.movies[i]);
        // }

        vm.movies.push(args);
        vm.movies.push({
          code: "546546",
          title: "sample",
          director: "sample",
          genre: "sample",
          yearReleased: 1234
        });
        console.log("after push", vm.movies);
    });

    $timeout(function() {
      $rootScope.$on('MovieEditCtrl:editMovie', function(event, args) {
        isNotAnEvent = 0;
        var i;
        console.log("inside MovieEditCtrl:editMovie");
        console.log("before edit: vm.movies", vm.movies);
        for(i = 0; i < vm.movies.length; i++) {
          if (vm.movies[i].code === args.code) {
            console.log("found");
            vm.movies[i].title = args.title;
            vm.movies[i].director = args.director;
            vm.movies[i].genre = args.genre;
            vm.movies[i].yearReleased = args.yearReleased;
            break;
          }
        }
        console.log("after edit: vm.movies", vm.movies);
      });
    }, 1000);

    vm.add = function() {
      sample = vm;
      vm.movies.push({
        code: "123456",
        title: "button",
        director: "button",
        genre: "button",
        yearReleased: "4321"
      });
    };

    vm.edit = function() {
      var i;
      for(i = 0; i < vm.movies.length; i++) {
        if (vm.movies[i].code === "EN0002") {
          console.log("found");
          vm.movies[i].title = "sampleEdit";
          vm.movies[i].director = "sampleEdit";
          vm.movies[i].genre = "sampleEdit";
          vm.movies[i].yearReleased = "2017";
          break;
        }
      }
    };
  }
]);
