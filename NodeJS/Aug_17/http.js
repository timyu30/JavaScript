 const http = require('http');
// const server = http.createServer((req,res) =>{
//     if (req.url === '/'){
//         res.write('Hello world from nodejs');
//         res.end();
//     }
//     else if(req.url === '/banana'){
//         res.write('banana');
//         res.end();
//     }
//     else{
//         res.write('some other domain');
//         res.end();
//     }
    
// });

// server.listen(3000);
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./index.html');
    res.writeHead(200,{'Content-type': 'text/html'});
    //if header was json or images the types would be as follows
    //res.writeHead(200,{'Content-type': 'application/json'})
    //res.writeHead(200,{'Content-type': 'image/png'})
    readStream.pipe(res);//res is also a writablestream, so readstream is sent to res
});
server.listen(3000);
