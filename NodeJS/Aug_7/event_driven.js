//emits are executed synchronously in the order they are raised

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//calling method on() and adding an event listener
//code will only be called when a 'tutorial' event occurs 
eventEmitter.on('tutorial', (n1, n2) =>{
    console.log(n1 + n2);
    console.log('tutorial event has occured.')
});

//tutorial event will be raised
eventEmitter.emit('tutorial', 1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    
    //not a function
    get name(){
        return this._name;
    }

}


//tim becomes an instance of the Person class but also the EventEmitter class since it was extended/inherited
let tim = new Person('tim');
tim.on('tag',()=>{
    console.log('tag event raised inside a class that extended EE');
    console.log(tim.name);
});
tim.emit('tag');