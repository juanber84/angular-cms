(function() {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $locationProvider, $urlRouterProvider) {

            $stateProvider
                .state('main', {
                    url: '/',
                    template: '<div><span ">{{greetings}} <br /><br /><input ng-model="greetings"></div>'
                });

            // Activate Mode HTML5
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix = '!';

            /// Default Route
            $urlRouterProvider.otherwise('/');


        })

})();
