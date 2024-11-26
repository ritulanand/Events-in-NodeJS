const http = require('http');
const server = http.createServer((req, res) => {
    res.write('this is coming from nodejs server');
    console.log("first", req.url);
    if(req.url == '/first'){
         res.end('this is first response')
    }else{
        res.end("this is default response")
    }

})

server.listen(3200, (req,res) => {
    console.log("server listening on 3200");
})