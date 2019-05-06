const http=require('http'); //require è un metodo nativo e serve per importare un modulo ==import
const hostname='127.0.0.1';
const port=3000;
const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World/n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });