'use strict';

// Declare app level module which depends on views, and components
angular.module('lmdb', [
  'ngRoute',
  'lmdb.movieAdd',
  'lmdb.movieList',
  'lmdb.movieEdit',
  'lmdb.movieRemove',
  'core.movie'
//  'lmdb.version'
])


.config(['$routeProvider', function($routeProvider) {
  
}])
.config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/list', {
    templateUrl: 'movie-list/movie-list.html',
    controller: 'MovieListCtrl',
    controllerAs: 'mlctrl',
    resolve: {
        lain: function($q, $http, Movie){
          console.log('-------------------');
          //return {'a' : '123'};
          /**/
          var def = $q.defer();
          $http.get('http://192.168.10.10:3000/list').success(function(response){
            def.resolve(response);
          });

          return def.promise;
          /*.then(function(response) {
            console.log('response', response);
            def.resolve(response.data);

          }, function(){
              def.reject("Failed to get albums");
          });

          return def.promise;
          */
        	}
    	}
  	})

    $routeProvider.otherwise({redirectTo: '/list'});
  }
])

.controller('ParentController', function($scope, $route, $routeParams, $location, $rootScope, Movie){
	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;


    Movie.query().$promise.then(function(data){
    	$rootScope.sample = data;
    });
});
