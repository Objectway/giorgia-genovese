const http=require('http'); //require è un metodo nativo e serve per importare un modulo ==import
const hostname='127.0.0.1';
const port=3001;
const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World/n');
});

var httpProxy = require('http-proxy');
 
var proxy = httpProxy.createProxyServer();

http.createServer(function(req, res) {
    proxy.web(req, res, { target: 'http://127.0.0.1:3000' });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});