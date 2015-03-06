(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController)

    function CoreController($scope, $http) {
    	$scope.greetings = "Hello Juan"
    }


})();
