
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
const HttpDispatcher= require('httpdispatcher');
const d1 = new HttpDispatcher();

d1.onGet('/',(req,res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./index.html', function (error,data) {
  console.log(data)
  res.end(data.toString());
  });  
 
});

d1.onGet('/donatore',(req,res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./donatore.html', function (error,data) {
  console.log(data)
  res.end(data.toString());
  });  
 
});

d1.onGet('/info',(req,res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./info.html', function (error,data) {
  console.log(data)
  res.end(data.toString());
  });  
 
});

d1.onGet('/api/list',(req,res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(JSON.stringify([
    {
      nome:'pluto'
    },
    {
      nome:'mammolo'
    }
  ]));  
  console.log("ciao")
});



const server = http.createServer((req, res) => {
   d1.dispatch(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


