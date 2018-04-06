var scopeApp = angular.module('scotchApp', ['ngRoute']);
scopeApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contectController'
        })
        .when('/cv', {
            templateUrl: 'pages/cv.html',
            controller: 'cvController'
        });
});

scopeApp.controller('mainController', function ($scope) {
    $scope.message = "Witaj na mojej stronie!";
});

scopeApp.controller('aboutController', function ($scope) {
    $scope.message = "Tu powiem cos wiecej o mnie";
});

scopeApp.controller('contectController', function ($scope) {
    $scope.message = "Skontaktuj sie ze mną! JK this is jus a demo.";
});

scopeApp.controller('cvController', function ($scope) {
    $scope.message = "Tu jest moje CV!";
});