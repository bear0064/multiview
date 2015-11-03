// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.list1', {
        url: '/tab-list1',
        views: {
          'menuContent': {
            templateUrl: 'templates/tab-list1.html',
            controller: 'list1Ctrl'
          }
        }
      })

      .state('app.list2', {
        url: '/tab-list2',
        views: {
          'menuContent': {
            templateUrl: 'templates/tab-list2.html',
            controller: 'list2Ctrl'
          }
        }
      })
      .state('app.list3', {
        url: '/tab-list3',
        views: {
          'menuContent': {
            templateUrl: 'templates/tab-list3.html',
            controller: 'list3Ctrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/tab-list1');
  });