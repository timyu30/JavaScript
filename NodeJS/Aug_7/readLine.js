const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, 
                            output: process.stdout});
let n1 = Math.floor((Math.random() * 10) +1);
let n2 = Math.floor((Math.random() * 10) +1);

let ans = n1 + n2;

rl.question(`What is ${n1} + ${n2}? \n`, (userInput) => {
    if(userInput.trim() == ans){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect response please try again \n');
        rl.prompt();
        //line event will keep executing 
        rl.on('line',(userInput) => {
            if(userInput == ans){
                rl.close();
            }
            else{
                //rl.setPrompt(`What is ${n1} + ${n2}? \n`);
                rl.prompt();
            }
        })
    }
} );

rl.on('close', ()=>{
    console.log("correct");
})

