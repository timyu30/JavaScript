const fs = require('fs');
const zlib = require('zlib'); //compression module
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example.txt.gz');
readStream.pipe(gzip).pipe(writeStream).on('finish',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        //wait for the event finish first before uncompressing
        const gunzip = zlib.createGunzip();
        const readStream1 = fs.createReadStream('./example.txt.gz');
        const writeStream1 = fs.createWriteStream('uncompressed.txt');
        readStream1.pipe(gunzip).pipe(writeStream1);
    }
});

/*
uncompressing gzip file

events.js:377
      throw er; // Unhandled 'error' event
      ^

Error: unexpected end of file
    at Zlib.zlibOnError [as onerror] (zlib.js:188:17)
Emitted 'error' event on Gunzip instance at:
    at emitErrorNT (internal/streams/destroy.js:106:8)
    at emitErrorCloseNT (internal/streams/destroy.js:74:3)
    at processTicksAndRejections (internal/process/task_queues.js:82:21) {
  errno: -5,
  code: 'Z_BUF_ERROR'
}
*/
// const gunzip = zlib.createGunzip();
// const readStream1 = fs.createReadStream('./example.txt.gz');
// const writeStream1 = fs.createWriteStream('uncompressed.txt');
// readStream1.pipe(gunzip).pipe(writeStream1);

