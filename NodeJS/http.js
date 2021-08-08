// const http = require('http');

// const server = http.createServer(function(req, res) {
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }

//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });
// server.on('connection', (socket) => {
//     console.log('New Connection');
// } )
// server.listen(3000);

// console.log('Listening on port 3000...');

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

// server.listen(port, hostname, ()=> {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const EventEmitter = require('events');

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let tim = new Person('Tim');
let jessica = new Person('jessica');

tim.on('name', () => {
    console.log(`My name is ${tim.name}.`);
});


jessica.on('name', ()=>{
    console.log(`My name is ${jessica.name}.`);
});

//this will execute synchronously 
tim.emit('name');
jessica.emit('name');