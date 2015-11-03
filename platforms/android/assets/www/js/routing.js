angular.module('starter')

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
          templateUrl: 'templates/tab-list1.html',
          controller: 'list2Ctrl'
        }
      }
    })
    .state('app.list3', {
      url: '/tab-list3',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-list1.html',
          controller: 'list3Ctrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tab-list1');
});
