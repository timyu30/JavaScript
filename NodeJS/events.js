//uppercase identifies as CLASS
const EventEmitter = require('events');

//emitter is the object, EventEmitter is class
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
})

//Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});


