const path = require('path'); 

const pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

var totalMemory = os.totalmem();

var freeMemory = os.freemem();

console.log(`Total memory is ${totalMemory} and the free memory is ${freeMemory}, percentage free to total is ${freeMemory/totalMemory}`);

//synchronous
const fs = require('fs');
const files = fs.readdirSync('./');

console.log(files);

//asynchronous
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
})



//instances of class I defined instead of EventEmitter

const Logger = require('./logger');
const logger = new Logger();

//functionalities of EventEmitter from object logger from class Logger extending EventEmitter
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

//custom method from Logger class still works
logger.log('message');




