//factory function
//returns an object 
function createCircle(rad){
    return {
        rad,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
const circle2 = createCircle(2);

//constructor function
//uses this keyword to set properties
function Circle(rad){
    this.rad = rad;
    this.draw = function(){
        console.log('draw');
    }
}

//new creates 3 instructions
//1. creates an empty object
//2. set this keyword to point to obj
//3. returns object(this) from function
const another = new Circle(1);

//*c# and java developers like new operator because it looks like creating an instance of classes, but in js there are no classes*/
//every obj has a constructor property and ref the function that was used to create obj


new String(); //'', "", ``
new Boolean(); //true, false
new Number(); //1,2,3


/* functions are objects in JS */

let animals = [];
