let name = 'Tim';
let age = 25;
let color = null;
let bool = true;
let notInit = undefined;

let person = {
    name: 'Tim',
    age: 25
};

//dot notation
person.name = 'sam';

//bracket notation
//this also allows for dynamic selection if not known at until runtime
let selection = 'name'
person[selection] = 'mel';

//arrays are dynamic 
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

/*88888888888888888888888888888888888888888888888888888888888888888888888888
Object Orientated Programming*/

//functional programming vs oop

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate){
    return baseSalary + (overTime * rate);
}

//oop design 
//singular variable that groups the related variables/ functions
const employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + this.overtime * this.rate;
    }
};

let i = employee.getWage();


//obj litteral is a simple way to define an object
const house = {
    address: '1801 W Garvey Ave',
    city: 'Los Angelos',
    inhabitants: {
        pets:{
            cat: "Chesire",
            dog: "Momo"
        },
        men: "Jeff",
        mother: "Tina"
    },
    status: function(){
        console.log(this.inhabitants.pets);
    }
};



