//uppercase identifies as CLASS
const EventEmitter = require('events');

//emitter is the object, EventEmitter is class
const emitter = new EventEmitter();

var url = 'http://mylogger.io/log'

//sending http request to url endpoint
//extends is a new feature from ES6
//the class will be able to use extended class methods with the keyword this

class Logger extends EventEmitter{
    //additional functionalities with methods
    log(msg) {
        console.log(msg);
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;

