'use strict';

angular.module('lmdb.movieList', [
  'ngRoute',
  'core.movie'
])



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
  
  $rootScope.$on('MovieAddCtrl:addMovie', function(event, args){
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
  
  vm.updateTable = function() {
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
.controller('MovieListCtrl', function($http, $rootScope, $routeParams, $q) {
  var vm = this;
  //var vm = $scope;

  vm.name = 'MovieListCtrl';
  vm.params = $routeParams;

  vm.movies = $rootScope.sample;

  



  

  $rootScope.$on('MovieAddCtrl:addMovie', function(event, args){
    console.log('args : event',vm.movies);
    /*
    for(var i in vm.movies){
      console.log('data --- i: ', vm.movies[i]);
    }*/

    console.log('------------------args------------', args);

    vm.movies.push(args);
  });


  console.log('rootScope.sample ', $rootScope.sample);
  

  

});
/**/  
