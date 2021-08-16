const fs = require('fs');

//unlink deletes file
// fs.unlink('./folderj/file.txt',(err)=> {
//     if(err)
//         console.log(err);
//     else{
//         console.log('removed file');
//         //rmdir deletes EMPTY folders
//         fs.rmdir('folderJ',(err) => {
//         if (err) 
//             console.log("error");
//         else{
//             console.log('Removed directory')
//         }
//         });
//     }
// });



fs.readdir('../Aug_15', (err,files) => {
    if(err){
        console.log(err);
    }
    else 
    {
        for(let file of files){
            if(file !== 'app.js'){
            fs.unlink('../Aug_15/' + file, (err)=>{
                if(err){
                    console.log(err);}
                else{
                    console.log("SUCCESSFULLY deleted files in an array.")
                }
            })
        }}
    };
})