//First Module will be required by second
//First will include a variable, class, and a function

const tim = 'tim';

class Person {
    constructor(){
        console.log("calling: " + tim + " from within class constructor.");
    }
}

function name(id){
    console.log(id);
}

// module.exports.tim = tim;
// module.exports.Person = Person;
// module.exports.name = name;

//or 

module.exports = {tim : tim, SomeNameObject: Person, name : name}