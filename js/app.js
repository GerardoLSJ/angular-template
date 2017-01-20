var app = angular.module('fedex', ['ui.bootstrap','ui.router'])

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

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
})