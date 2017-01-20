var app = angular.module('fedex', ['ui.bootstrap', 'ui.router', 'ngAnimate'])

/*routes*/
.config(function($stateProvider, $urlRouterProvider) {
    //console.log('state provider')
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
        /*
        .state('brand.home', {
            url: '/brand',
            containerClass: 'brand',
            templateUrl: 'views/brand.html',
            controller: 'BrandCtrl'
        })
        */
        .state('edit', {
            url: '/edit/:brandId',
            templateUrl: 'views/brand-edit.html',
            controller: 'EditCtrl'
   

        })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
}).run(function($rootScope) {
    /**change the body class acording to the state / route  */
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.containerClass = toState.containerClass;
        $rootScope.slideHeader = false;
        //console.log($rootScope.containerClass)
    });
})


app.run(['$rootScope', '$document', function($rootScope, $document) {
    $document.on('visibilitychange', function() {
        $rootScope.$broadcast('visibilityChange', document.hidden, document.visibilityState);
    });
}]);