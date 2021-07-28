const todo = [
    {
        id:1,
        text: 'javascript',
        isCompleted: true
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

//higher order array methods
//best for iterations

//forEach, useful to iterate


//todo.forEach(function(todo){
//    console.log(todo.text)
//})


// map, returns an array

//const todoText = todo.map(function(todo){
//    return todo.text
//});
//console.log(todoText)

// filter

const todoCompleted = todo.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.isCompleted;
});

// todoCompleteds = [todoCompleted[0].isCompleted];

//console.log(todoCompleteds);
console.log(todoCompleted)

