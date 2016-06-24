console.log('scripts linked');

var myApp = angular.module('myApp', []);


myApp.controller('fridayController', ['$scope', '$http', function($scope, $http){
   $scope.getUserInput=function(){
     console.log('in getUserInput: '+ $scope.inputModel1);
     $scope.inputModel1 = '';

   };

}]);
