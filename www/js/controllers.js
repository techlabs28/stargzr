angular.module('starter.controllers', ['ngSanitize'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Actor) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MoviesCtrl', function($scope, $stateParams, Movies) {
  $scope.movies = Movies.query();
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ActorsCtrl', function($scope, $stateParams, Actors){
  $scope.actors = Actors.query();
})

.controller('ActorCtrl', function($scope, $stateParams, Actor){
  Actor.get({_id: $stateParams._id, slug: $stateParams.slug}, function(actor) {
    $scope.actor = actor;
  });
})

.controller('MovieCtrl', function($scope, $stateParams, Movie, $sce){
  Movie.get({_id: $stateParams._id, slug: $stateParams.slug}, function(movie) {
    console.log(movie);
    $scope.movie = movie;
    $scope.trailer = "//www.youtube.com/embed/"+$scope.movie.trailers[0].key+"?rel=0 frameborder='0' allowfullscreen";
  });
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };
});