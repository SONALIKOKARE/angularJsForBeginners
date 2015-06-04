var app = angular.module('singlePageApp',['ngRoute']);
    app.config(function($routeProvider){
    $routeProvider
        .when('/',{
              templateUrl: 'views/home.html'
        })
        .when('/about',{
              templateUrl: 'views/about.html'
        })
        .when('/contact',{
              templateUrl: 'views/contact.html'
        }).
  	  otherwise({
  		redirectTo: '/'
  	  });
});
app.controller('spaController',function($scope){
    alert('contore');
    $scope.message= "Welcome to learn Angular.js ";
    /*      
    Here you can handle controller for specific route as well.
    */
});