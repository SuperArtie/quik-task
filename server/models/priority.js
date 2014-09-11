'use strict';

function Priority(priority){
}

Object.defineProperty(Priority, 'collection', {
  get: function(){return global.mongodb.collection('priorities');}
});

Priority.create = function(priority, cb){
  Priority.collection.save(priority, cb);
};

Priority.all = function(cb){
  Priority.collection.find().toArray(cb);
};

Priority.findByName = function(name, cb){
  Priority.collection.findOne({name:name}, cb);
};

module.exports = Priority;
