angular.module('starter.controllers', ['ngCordova'])

.controller('sendCtrl', function($scope, $cordovaBarcodeScanner) {
  $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
          alert(imageData.text);
          console.log("Barcode Format -> " + imageData.format);
          console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
          console.log("An error happened -> " + error);
      });
  };
})
.controller('welcomeCtrl', function($scope) {
  localStorage.getItem('password');
});
.controller('createCtrl', function($scope) {
  $scope.savePassword = function(password) {
    localStorage.set('password',password)
  }
})
.controller('scantxCtrl', function($scope, $cordovaBarcodeScanner) {
  $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
          alert(imageData.text);
          console.log("Barcode Format -> " + imageData.format);
          console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
          console.log("An error happened -> " + error);
      });
  };
})
