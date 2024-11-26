const  http = require('http');

const server = http.createServer((req, res) => {
    if(req.method == 'POST'){
        //expecting data from client
        console.log(req.body);
        let body = "";
        req.on("data", (chunk) => {
            body+=chunk.toString();
        } )
        req.on("end", () => {
            console.log(body);
            res.end('Data is received')
        })
    }else{
        console.log("function ends here")
        res.end('Welcome to node js')
    }
   
})

server.listen(3100);
console.log("server is lsitening in 3100");