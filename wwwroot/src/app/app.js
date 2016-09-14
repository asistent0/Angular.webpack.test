require('./register-dependencies');

var rootTemplate = require('./view/root/root.html');
var lesson1Template = require('./view/lesson1/lesson1.html');
var lesson2Template = require('./view/lesson2/lesson2.html');

(function (angular) {
    'use strict';

    angular
        .module('app', ['ui.router', 'ui.bootstrap'])
        .config(
        ['$locationProvider', '$urlRouterProvider', '$stateProvider',
            function($locationProvider, $urlRouterProvider, $stateProvider) {
                $locationProvider.hashPrefix('!').html5Mode(true);

                $stateProvider
                    .state('root', {
                        url: '/',
                        template: rootTemplate,
                        controller: 'root.controller',
                        controllerAs: 'root'
                    })
                    .state('lesson1', {
                        url: '/lesson1',
                        template: lesson1Template,
                        controller: 'lesson1.controller',
                        controllerAs: 'lesson1'
                    })
                    .state('lesson2', {
                        url: '/lesson2',
                        template: lesson2Template,
                        controller: 'lesson2.controller',
                        controllerAs: 'lesson2'
                    });

                $urlRouterProvider.otherwise('/');
            }
        ])
        .run(['$rootScope',
            function ($rootScope) {

            }
        ]);

    require('./register'); //вызов модуля зависимостей приложения

})(angular);
