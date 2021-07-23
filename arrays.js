const fruits = ['apples', 'oranges', 'pears']

fruits[2] = 'grapes';

//const variable can change the value but not directly reassign

fruits.push('mangoes');

fruits.pop();

fruits.unshift('berries');

//berr, app, ora, gra

console.log(fruits);

console.log(Array.isArray(fruits));

//Object litterals
//basically key value pairs

const person ={
    firstName: "Tim",
    lastName : 'Y',
    age: 25,
    hobbies: ['biking', 'anime', 'drawing', 'fishing'],
    address:{
        street:'645',
        city: 'La',
        state: 'CA'
    }
}

console.log(person.address.city);
console.log(person.hobbies[1]);

//destructuring
const {firstName, lastName, address:{ city }} = person;
console.log(city);


//adding properties with dot notation
person.email = 'lam@yahoo.com'

const todo = [
    {
        id:1,
        text: 'javascript',
        isCompleted: false
    },
    {
        id:2,
        text: 'css',
        isCompleted: false
    },
    {
        id:3,
        text: 'dom',
        isCompleted: false
    }
];

//access the last index and get the text

todo.push('hello');
todo[2].notDeclaredPropertyYet = 'new property declared and assigned value';
console.log(todo)
console.log(todo[todo.length-2].text)
//YESSS




