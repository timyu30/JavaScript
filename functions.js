//normal function declaration
function addNums(num1 = 1, num2 = 1) {
    return (num1 + num2);
}

//??? no name function, one time use I guess
(num1 = 1, num2 = 1) => (num1 + num2);


//assigning anon function to variable
const addNum = (num1 = 1, num2 = 1) => (num1 + num2);

//assigning normal function to variable
const add = function (num1 = 1) {
    return num1 + 5;
};

//one parameter doesn't need parenthasis
const addNumShort = num1 => num1 + 5;


const a = addNum;//setting variable to function name


console.log(addNums(5,5));
console.log(addNum(5,5));
console.log(add());
console.log(a(5,5))

//-----------------------------------------------
//Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    

    //methods inside constructor no longer necessary 
    //since declared in prototype and will not be in every object 


    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`

//Instantiate Object
const person1 = new Person('Tim', 'Yu', '1996-01-30');
const person2 = new Person('Sam', 'Yu', '1997-05-24');


console.log(person1.getBirthYear());
console.log(person1);
//------------------------------------------------------

//Class in ES6 are syntatic sugar since it does the same thing as before up above

class PersonInES6 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const per = new PersonInES6('Mel','Yu', '1998-09-17');
console.log(per)
console.log(per.getBirthYear());



