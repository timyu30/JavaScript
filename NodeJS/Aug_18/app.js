//getting started with npm, package.json
//const _ = require('lodash')
//let x = _.fill([1,2,3,4,5], "banana", 1,4);

//console.log(x);

//major.minor.patch
                        // ^ means no major update but minor and patches acceptable 4.x.x
                        // ~ means only the patches can update 4.17.x
                        

////////////////////////////////////////////////////////////////////////////////
//getting started with express web framework

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello from Express!')
})
app.listen(3000);

//query strings and route parameters
app.get('/example', (req,res)=>{
    res.send('arrived at another route');
})

app.get('/questions', (req,res)=> {
    res.send('any questions?');
})


app.get('/example/:name/:age', (req,res)=> {
    console.log(req.params);
    console.log(req.query);
    res.send('example with route params');
    res.send(req.params.name + ' : ' + req.params.age);
    
})