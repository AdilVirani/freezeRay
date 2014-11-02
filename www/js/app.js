// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'welcome.html'
    })

    .state('wallet', {
      url: '/wallet',
      templateUrl: 'wallet.html'
    })
    
    .state('create', {
      url: '/create',
      templateUrl: 'create.html'
    })
    
    .state('reminders', {
      url: '/reminders',
      templateUrl: 'reminders.html'
    })
    
    .state('send', {
      url: '/send',
      templateUrl: 'send.html',
      controller: 'sendCtrl'
    })
    
    .state('unsignedtx', {
      url: '/unsignedtx',
      templateUrl: 'unsignedtx.html'
    })
    
    .state('scantx', {
      url: '/scantx',
      templateUrl: 'scantx.html',
      controller: 'scantxCtrl'
    })
    
    .state('offlinescan', {
      url: '/offlinescan',
      templateUrl: 'offlinescan.html'
    })
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/welcome');
  

});