angular.module('starter.controllers', ['ionic' ])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {})



  .controller('MyCtrl', function($scope, $ionicSideMenuDelegate, listLogic) {

    $scope.getVib = function() {
      listLogic.persistentVibe();
      $scope.vibrateNotification = vibeOn[0];
    }();


    $scope.getMes = function() {
      listLogic.persistentNotify();
      $scope.messageNotification = notifyOn[0];
    }();


    $scope.data = {
      showDelete: false
    };

    $scope.toggleRight = function () {
      $ionicSideMenuDelegate.toggleRight();
    };

    $scope.messageNotificationChange = function(value){

      listLogic.messageNotificationChange($scope.notifyOn, value);

    };

    $scope.vibrateNotificationChange = function(value){

      listLogic.vibrateNotificationChange($scope.vibeOn, value);

    };

  })


  .controller('list1Ctrl', function($scope, $ionicModal, $localstorage, listLogic) {
    $scope.listTitle = "List 1";
    var listname = 'list1s';

    $scope.makeList1 = function() {
      listLogic.listCreate1();
      $scope.list1s = $localstorage.getObject('list1s');
    }();


    $scope.addTodoClick = function(newItem) {

      listLogic.addTodo(listname, $scope.list1s, newItem);

      $scope.todoText = '';


    };


    $scope.onItemDelete = function(deletedItem){

      listLogic.onItemDelete(listname, $scope.list1s, deletedItem);
    };


    $scope.onItemComplete = function(completedItem){

      listLogic.onItemComplete(listname, $scope.list1s, completedItem)
    };


  })

  .controller('list2Ctrl', function($scope, $localstorage, listLogic) {
    $scope.listTitle = "List 2";
    var listname = 'list2s';


    $scope.makeList2 = function() {
      listLogic.listCreate2();
      $scope.list1s = $localstorage.getObject('list2s');
    }();


    $scope.addTodoClick = function(newItem) {

      listLogic.addTodo(listname, $scope.list1s, newItem);

      $scope.todoText = '';


    };


    $scope.onItemDelete = function(deletedItem){

      listLogic.onItemDelete(listname, $scope.list1s, deletedItem);
    };


    $scope.onItemComplete = function(completedItem){

      listLogic.onItemComplete(listname, $scope.list1s, completedItem)
    };



  })

  .controller('list3Ctrl', function($scope, $localstorage, listLogic) {
    $scope.listTitle = "List 3";
    var listname = 'list3s';


    $scope.makeList3 = function() {
      listLogic.listCreate3();
      $scope.list1s = $localstorage.getObject('list3s');
    }();


    $scope.addTodoClick = function(newItem) {

      listLogic.addTodo(listname, $scope.list1s, newItem);

      $scope.todoText = '';


    };


    $scope.onItemDelete = function(deletedItem){

      listLogic.onItemDelete(listname, $scope.list1s, deletedItem);
    };


    $scope.onItemComplete = function(completedItem){

      listLogic.onItemComplete(listname, $scope.list1s, completedItem)
    };


  });


