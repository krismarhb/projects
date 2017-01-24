angular.module('myApp.controllers')

 .controller('informacionController',function($scope,$stateParams,$state,$ionicPlatform){
    
    $scope.data={};
    $scope.data.correo=$stateParams.correo;
    $scope.data.clave=$stateParams.clave;
 
    
   
 });