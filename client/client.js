var app = angular.module('myApp', []);

app.controller('myController', ['$scope', '$http', function($scope, $http){
    $scope.hello = 'user list';

    $http.get('/user').then(function(results){
        console.log(results.data);
        $scope.users = results.data;
    });

    $scope.delete = function(user){
        console.log('delete button clicked', user);
        //to be expanded out to delete from the database

        $http.delete('/user/delete/' + user._id).then(function(response){
            console.log(response);
            $scope.users = response.data;
        });

    };

}]);