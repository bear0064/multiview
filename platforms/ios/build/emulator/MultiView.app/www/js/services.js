angular.module('starter.services', ['ionic'])


.controller('list1Ctrl', function($scope, $ionicModal, $ionicPopup) {

  $scope.saved = localStorage.getItem('list1');
  $scope.list1s = (localStorage.getItem('list1') !== null) ? JSON.parse($scope.saved) : [{
    text: 'DrumSticks',
    done: false
  }, {
    text: 'CornBread',
    done: false
  }, {
    text: 'Peach Schnapps',
    done: false
  }, {
    text: 'Carrots',
    done: false
  }];
  localStorage.setItem('list1', JSON.stringify($scope.list1s));




  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.list1s.splice(fromIndex, 1);
    $scope.list1s.splice(toIndex, 0, item);
    localStorage.clear('list1');
    localStorage.setItem('list1', JSON.stringify($scope.list1s));
  };


  $scope.onItemDelete = function(item) {

        var confirmPopup = $ionicPopup.confirm({
            title: 'Delete',
            template: 'Are you sure?'
            });

          confirmPopup.then(function(res) {
        if (res) {
                  $scope.list1s.splice($scope.list1s.indexOf(item), 1);
                    localStorage.clear('list1');
                    localStorage.setItem('list1', JSON.stringify($scope.list1s));
                }

      });
      };



  $scope.addTodo = function() {

    $scope.list1s.push({
      text: $scope.todoText,
      done: false
    });


    localStorage.setItem('list1', JSON.stringify($scope.list1s));

    $scope.todoText = ''; //clear the input after adding



  };
})


/////////////// Tab Two ///////////////


.controller('list2Ctrl', function($scope, $ionicModal, $ionicPopup) {

  $scope.saved = localStorage.getItem('list2');
  $scope.list2s = (localStorage.getItem('list2') !== null) ? JSON.parse($scope.saved) : [{
    text: 'DrumS',
    done: false
  }, {
    text: 'CornB',
    done: false
  }, {
    text: 'PeachS',
    done: false
  }, {
    text: 'Car',
    done: false
  }];
  localStorage.setItem('list2', JSON.stringify($scope.list2s));




  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.list2s.splice(fromIndex, 1);
    $scope.list2s.splice(toIndex, 0, item);
    localStorage.clear('list2');
    localStorage.setItem('list2', JSON.stringify($scope.list2s));
  };

      $scope.onItemDelete = function(item) {

        var confirmPopup = $ionicPopup.confirm({
            title: 'Delete',
            template: 'Are you sure?'
            });

          confirmPopup.then(function(res) {
        if (res) {
              $scope.list2s.splice($scope.list2s.indexOf(item), 1);
                localStorage.clear('list2');
                localStorage.setItem('list2', JSON.stringify($scope.list2s));
      }

      });
      };


  $scope.addTodo = function() {

    $scope.list2s.push({
      text: $scope.todoText,
      done: false
    });


    localStorage.setItem('list2', JSON.stringify($scope.list2s));

    $scope.todoText = ''; //clear the input after adding




  };
})


/////////////// Tab Three ///////////////

.controller('list3Ctrl', function($scope, $ionicModal, $ionicPopup) {

  $scope.saved = localStorage.getItem('list3');
  $scope.list3s = (localStorage.getItem('list3') !== null) ? JSON.parse($scope.saved) : [{
    text: 'Jank',
    done: false
  }, {
    text: 'More Jank',
    done: false
  }, {
    text: 'Some Gank',
    done: false
  }, {
    text: 'Tools',
    done: false
  }];
  localStorage.setItem('list3', JSON.stringify($scope.list3s));


  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.list3s.splice(fromIndex, 1);
    $scope.list3s.splice(toIndex, 0, item);
    localStorage.clear('list3');
    localStorage.setItem('list3', JSON.stringify($scope.list3s));
  };

      $scope.onItemDelete = function(item) {

          var confirmPopup = $ionicPopup.confirm({
            title: 'Delete',
            template: 'Are you sure?'
            });

            confirmPopup.then(function(res) {
                if (res) {
                  $scope.list3s.splice($scope.list3s.indexOf(item), 1);
                localStorage.clear('list3');
                localStorage.setItem('list3', JSON.stringify($scope.list3s));
            }
        });
      };


  $scope.addTodo = function() {

    $scope.list3s.push({
      text: $scope.todoText,
      done: false
    });


    localStorage.setItem('list3', JSON.stringify($scope.list3s));

    $scope.todoText = ''; //clear the input after adding



  };
});
