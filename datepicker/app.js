/**
 * Created by zeng on 2016-9-5.
 */
var app = angular.module('myApp', ['myApp.directives']);

app.controller('MainCtrl', function($scope) {
    $scope.myText = 'Not Selected';
    $scope.currentDate = '';
    $scope.updateMyText = function(date) {
        $scope.myText = 'Selected';
        $scope.currentDate = date;
    };
});