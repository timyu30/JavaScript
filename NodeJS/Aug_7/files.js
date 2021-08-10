// const fs = require('fs');

// fs.writeFile('example.txt', "this is an example", (err) => {
//     if(err)
//         console.log(err);
//     else 
//         console.log('File successfully created');
//         fs.readFile('example.txt','utf8', (err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 //buffer stream stores data and binary
//                 //utf8 is the option I want the encoding to display
//                 console.log(file);
//         });
// })

const fs = require('fs');

fs.writeFile('animeList.txt', 'dragon shin', (err) => {
    console.log('done');
    fs.readFile('animeList.txt','utf8', (err, data) =>
    {
        if (err){
            throw err;
        }
        else   
        console.log(data);
    })
});