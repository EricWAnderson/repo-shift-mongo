var app = angular.module('myApp', []);

app.controller('myController', ['$scope', '$http', function($scope, $http){
    $scope.hello = 'hello world!';
}]);