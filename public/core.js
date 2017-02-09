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
      })
      .otherwise({templateUrl: './pages/main.html'});
  })

  // fix for the routing issue
	.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}])

  .controller('mainController', function($http) {
    var self = this;
    this.logAlert = this.regAlert = false;
    this.reg = { username: '', password: '', email: '' };
    this.log = function(login) {
      if (login.username && login.password) {
        self.logAlert = false;
        $http.post('/login', login)
          .then(function(result) {
            console.log(result.data);
          }, function(err) {
            self.logAlert = err.data.message;
          });
      } else {
        self.logAlert = 'Please enter all fields to login';
      }
    };
    this.register = function(reg) {
      if (reg.username && reg.password && reg.email) {
        self.regAlert = false;
        $http.post('/register', reg).then(function(result) {
          console.log(result.data);
        }, function(err) {
          console.log(err);
          self.regAlert = err.data;
        });
      } else {
        self.regAlert = 'Please fill up all fields';
      }
    };
  })

  .controller('gpsController', function() {
    this.name = 'gps name';
  })

  .controller('zipController', function() {
    this.name = 'zip name';
  });
