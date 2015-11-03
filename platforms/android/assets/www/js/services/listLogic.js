angular.module('starter.listLogic', ['ionic'])

  .factory('listLogic', function listLogicFactory($window, $localstorage, $ionicPopup) {

    return {

      listCreate1: function () {


        if ($localstorage.getObject('list1s') === null || $localstorage.getObject('list1s') === undefined) {

          $localstorage.setObject('list1s', [{
            text: "DrumSticks",
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
          }]);

          $localstorage.getObject('list1s');

        } else {
          $localstorage.getObject('list1s');

        }

      },

      listCreate2: function () {


        if ($localstorage.getObject('list2s') === null || $localstorage.getObject('list2s') === undefined) {

          $localstorage.setObject('list2s', [{
            "text": "Item1",
            "done": false
          }, {
            'text': 'Item2',
            'done': false
          }, {
            'text': 'Item3',
            'done': false
          }, {
            'text': 'Item4',
            "done": false
          }]);

          $localstorage.getObject('list2s');


        } else {
          $localstorage.getObject('list2s');
        }


      },

      listCreate3: function () {

        if ($localstorage.getObject('list3s') === null || $localstorage.getObject('list3s') === undefined) {

          $localstorage.setObject('list3s', [{
            "text": "Jank",
            "done": false
          }, {
            'text': 'Gank',
            'done': false
          }, {
            'text': 'Frank',
            'done': false
          }, {
            'text': 'Spank',
            "done": false
          }]);

          $localstorage.getObject('list3s');

        } else {
          $localstorage.getObject('list3s');
        }

      },


//working
      persistentVibe: function () {

        if ($localstorage.getObject('vibrateOn') == null || $localstorage.getObject('vibrateOn') == undefined) {
          vibeOn = [{
            "checked": false
          }];

          $localstorage.setObject('vibrateOn', vibeOn)
        }
        else {

          vibeOn = $localstorage.getObject('vibrateOn');
        }

        $localstorage.setObject('vibrateOn', vibeOn);

      },

//working
      persistentNotify: function () {

        if ($localstorage.getObject('notifyOn') == undefined || $localstorage.getObject('notifyOn') == null) {
          notifyOn = [{
            "checked": false
          }];
          $localstorage.setObject('notifyOn', notifyOn);
        }
        else {
          notifyOn = $localstorage.getObject('notifyOn');
        }

        $localstorage.setObject('notifyOn', notifyOn);

      },

//working
      allTriggered: function (listname) {

        var re = $localstorage.getObject('notifyOn');
          console.log(re);
        if (re[0].checked == true) {

          var obj = $localstorage.getObject(listname);

          for (var i in obj) {
            console.log(obj[i]);
            if (!obj[i].done) {

              var notComplete = true

            }
          }

          if (notComplete) {
          } else {

            cordova.plugins.notification.local.schedule({
              id: 1,
              title: "List Complete",
              message: listname + " has been Completed",
              icon: "http://domain.com/icon.png"
            })

          }
        }
      },

      //working
      onItemComplete: function (listname, list, completedItem) {

        $localstorage.setObject(listname, list);

        vibeOn = $localstorage.getObject('vibrateOn');

        this.allTriggered(listname);


        if (vibeOn[0].checked == true) {

          if (completedItem.done == true) {

            navigator.vibrate(500);

          }

        }

      },


      //working
      vibrateNotificationChange: function (vibeOn, value) {

        if (value.checked == false) {

          vibeOn = [{
            "checked": false
          }];

          $localstorage.setObject('vibrateOn', vibeOn);

          return value;
        }
        else {

          vibeOn = [{
            "checked": true
          }];

          $localstorage.setObject('vibrateOn', vibeOn);
        }
      },

//working
      messageNotificationChange: function (notifyOn, value) {

        if (value.checked == false) {
          notifyOn = [{
            "checked": false
          }];
          $localstorage.setObject('notifyOn', notifyOn);
        }
        else {
          notifyOn = [{
            "checked": true
          }];

          $localstorage.setObject('notifyOn', notifyOn);
        }
      },


      //working
      onItemDelete: function (listname, list, item) {

        console.log(listname);
        console.log(list, item);

        var confirmPopup = $ionicPopup.confirm({
          title: 'Delete',
          template: 'Are you sure?'
        });

        confirmPopup.then(function (res) {
          if (res) {
            list.splice(list.indexOf(item), 1);
            localStorage.removeItem(listname);
            console.log(listname);
            $localstorage.setObject(listname, list);
          }

        });
      },


      //working
      addTodo: function (listname, list, newItem) {

        if (list == null) {
          list = $localstorage.getObject(listname);
        }

        list.push({
          text: newItem,
          done: false
        });

        $localstorage.setObject(listname, list);

      }

    }; //return

  }); //close
