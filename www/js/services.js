angular.module('starter.services', ['ngResource'])
.factory('Movies', function($resource) {
  return $resource('http://localhost:3000/api/movies/');
})
.factory('Actors', function($resource) {
  return $resource('http://localhost:3000/api/actors/');
})
.factory('Actor', function($resource) {
  return $resource('http://localhost:3000/api/actors/:_id/:slug');
})
.factory('Movie', function($resource) {
  return $resource('http://localhost:3000/api/movies/:_id/:slug');
});