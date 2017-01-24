angular.module('myApp.controllers')


.controller('controller', function($scope,$state,$stateParams,$ionicPlatform){
  
   $scope.data={};
  
   
      $scope.datos = function(){
    
       $state.go('informacion',{correo:$scope.data.correo,clave:$scope.data.clave});    
     
             return {
      
      clave : $scope.data.clave,
      correo: $scope.data.correo,
      
      
      };
   };
      
     
});