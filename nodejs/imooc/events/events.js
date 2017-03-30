// var EventEmitter = require('events').EventEmitter;
// var life = new EventEmitter();

// life.on('av',function(who) {
//     console.log('give ' + who + ' water');
// });
// life.emit('av', 'man');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const life = new MyEmitter();
life.on('event', function(who) {
    console.log(who, this);
});
life.emit('event','man');

const asyn = new MyEmitter();
asyn.on('event', function(a, b) {
    setImmediate(function() {
        console.log('这是异步发生的');
    });
});
asyn.emit('event', 'a', 'b');