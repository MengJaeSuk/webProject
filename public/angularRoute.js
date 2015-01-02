/**
 * Created by cmm on 11/28/14.
 */

'use strict';

angular.module('nourriture', ['ngRoute']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: '/indexPart',
		        controller: ToCandidate
            }).
            otherwise({
                redirectTo: '/index'
            });
        $locationProvider.html5Mode(true);
    }]);

