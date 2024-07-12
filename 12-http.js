const http = require('http');

// createServer()

const server = http.createServer((req, res)=>{
//req = request, res = response; user sends a request, server returns a response
    console.log(req)
    if(req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if (req.url === '/about'){
        res.end('Here is our short history.')
    }
    res.end(
        `
        <h1>Oops!</h1>
        <p>we can't seem to find the page you are looking for </p>
        <a href="/">back home</a>
        `
    )
})

// listen to the server 
server.listen(5000)

//5000 is the port 