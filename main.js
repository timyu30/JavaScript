// // console.log("hello");
// // console.error('error');
// // console.warn('warn');

// //var, let, const
// //use const unless know need to change value
// //var is global

// //String, Numbers, Boolean, null, undefined

// const name = 'John';
// const age = 30;
// const isCool =  true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;
// const s = 'Hello World!'

// console.log(typeof z);

// //concatenation
// console.log('My name is ' + name + ' and I am ' + age);

// //template strings
// console.log(`My name is ${name} and I am ${age}`);
// console.log(s.length); //property
// console.log(s.toLowerCase()); //method
// console.log(s.substring(0,5).toUpperCase());

// const string2Split = '1,2,3,4 , 5';
// console.log(string2Split.split(','));

//converting array to JSON
// const todo = [
//     {
//         id:1,
//         text: 'javascript',
//         isCompleted: false
//     },
//     {
//         id:2,
//         text: 'css',
//         isCompleted: false
//     },
//     {
//         id:3,
//         text: 'dom',
//         isCompleted: false
//     }
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


const x = 20;
if (x === 10){
    console.log('x is 10');
}
else if (x > 10) {
    console.log('x is greater than 10');
}
else {
    console.log('x is less than 10');
}

//ternary operators
const y = 10;
const color = y > 10 ? 'red' : 'blue';

console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not  red or blue');
        break;
}

