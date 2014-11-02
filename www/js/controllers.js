angular.module('starter.controllers', [])

.controller('sendCtrl', function($scope) {
  $('#qrscanner').html5_qrcode(function(data){
           // do something when code is read
      },
      function(error){
          //show read errors 
      }, function(videoError){
          //the video stream could be opened
      }
  );
})
