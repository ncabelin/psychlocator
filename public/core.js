angular.module('psychLocator', ['ngRoute', 'ui.bootstrap'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './pages/main.html',
        controller: 'mainController',
        controllerAs: 'main'
      })

      .when('/gps', {
        templateUrl: './pages/gps.html',
        controller: 'gpsController',
        controllerAs: 'gps'
      })
      .when('/zip', {
        templateUrl: './pages/zip.html',
        controller: 'zipController',
        controllerAs: 'zip'
      });
  })

  // fix for the routing issue
	.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}])

  .controller('mainController', function() {
    this.isNavCollapsed = true;
    this.isCollapsed = false;
  })

  .controller('gpsController', function() {
    this.name = 'gps name';
  })

  .controller('zipController', function() {
    this.name = 'zip name';
  });
