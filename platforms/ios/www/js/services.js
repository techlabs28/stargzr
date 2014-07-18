angular.module('starter.services', ['ngResource'])
.factory('Actors', function($resource) {
  return $resource('http://localhost:3000/api/actors/');
})
.factory('Actor', function($resource) {
  return $resource('http://localhost:3000/api/actors/:_id/:slug');
});