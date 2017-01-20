var app = angular.module('fedex', ['ui.bootstrap','ui.router','ngAnimate'])

/*routes*/
.config(function($stateProvider, $urlRouterProvider) {
    console.log('state provider')
    $stateProvider
        .state('app', {
            url: '/app',
            containerClass: 'menu',
            abstract: true,
            templateUrl: 'views/menu.html',
            controller: 'AppCtrl'
        })
        .state('login', {
            url: '/login',
            containerClass: 'login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'  
            })
        .state('brand', {
            url: '/brand',
            containerClass: 'brand',
            templateUrl: 'views/brand.html',
            controller: 'BrandCtrl'  
            })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
})