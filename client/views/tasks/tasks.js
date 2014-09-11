(function(){
  'use strict';

  angular.module('quiktask')
  .controller('TasksCtrl', ['$scope', 'Task', 'Priority', function($scope, Task, Priority){
    $scope.title = 'Tass Kz';

    $scope.task       = {};
    $scope.tasks      = [];

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

    Task.all().then(function(response){
      $scope.tasks = response.data.tasks;
      console.log($scope.tasks);
    });

    $scope.add = function(){
      Task.create($scope.task).then(function(response){
        $scope.tasks.push(response.data.task);
        $scope.task = {};
      });
    };
  }]);
})();
