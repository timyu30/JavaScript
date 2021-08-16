//Read and write data in chunks 
const fs = require('fs');

//fs.readFile
//uses full buffers but when data is too large it fails

//listen for data event
//readStream obj inherits the event emitter class so we can listen for events
const readStream = fs.createReadStream('./words.txt', 'utf8');//adding options utf8 to see characters
const writeStream = fs.createWriteStream('words2.txt');
readStream.on('data', (chunk)=>{
   // console.log(chunk); //prints out in multiple buffers
    writeStream.write(chunk);//power of streams allows the ability to write to files while still reading from another file
});
//benefits of chunk allows the usage of the chunk before all data is read

//readStream.pipe(writeStream); need source stream and destination, shorthand for above