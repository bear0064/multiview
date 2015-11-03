angular.module('starter.controllers', ['ionic'])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  })


  .controller('MyCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.data = {
      showDelete: false
    };

    $scope.toggleRight = function() {
      $ionicSideMenuDelegate.toggleRight();
    };


  })


  .controller('settingVibrate', function($scope, $cordovaVibration) {

  // Vibrate 100ms
  $cordovaVibration.vibrate(100);
    console.log('vibe vibe')

  })




  .controller('list1Ctrl', function($scope) {})
  .controller('list2Ctrl', function($scope) {})
  .controller('list3Ctrl', function($scope) {});


