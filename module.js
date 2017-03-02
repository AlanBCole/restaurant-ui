angular.module("OpenSourceTacos", ['ngRoute'])
  .config(Router)

Router.$inject = ["$routeProvider"]

function Router ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : "/home.html",
    })
    .when('/menu', {
      templateUrl : '/menu.html',
      controller : 'restaurant as restaurant',
    })
    .when('/order', {
      templateUrl: '/order.html',
      controller: 'order as order'
    })
}
