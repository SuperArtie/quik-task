'use strict';

var async    = require('async'),
    Priority = require('./priority');

function Task(task){
}

Object.defineProperty(Task, 'collection', {
  get: function(){return global.mongodb.collection('tasks');}
});

Task.create = function(task, cb){
  Task.collection.save(task, cb);
};

Task.all = function(cb){
  Task.collection.find().toArray(function(err, tasks){
    async.map(tasks, iterator, cb);
  });
};

module.exports = Task;

function iterator(task, cb){
  Priority.findByName(task.priorityName, function(err, priority){
    task.priority = priority;
    cb(null, task);
  });
}
