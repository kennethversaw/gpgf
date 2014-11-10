
var myApp = angular.module('GPGF', ['ngResource', 'ui.bootstrap', 'ngRoute']).service('Registration', function ($resource) {
    return $resource('https://greatplainsgamefestival.azure-mobile.net/Tables/registration/', { signupId: '@id' },
        {
            'update': { method: 'PATCH' }
        });
});

myApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'tjwRUrjhmjrzhDNTNOyGQdvRUnyqaU13';
    $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';

}]);


//.config(function ($routeProvider) {
//    $routeProvider
//        .when('/register', {
//            templateUrl: 'Views/registration.html',
//            controller: 'registrationCtrl'
//        })
//      .when('/', {
//          templateUrl: 'Views/home.html',
//          controller: ''
//      })

//});