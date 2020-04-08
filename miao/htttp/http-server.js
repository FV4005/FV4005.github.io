const http = require('http');
const fs = require('fs');
const port = 8080;

var fileList = fs.readdir('.',(err)=>{console.log(err)})
fileList.toString()
console.log(fileList);

var server = http.createServer(function(request,reponse){
  reponse.writeHeader(200,{'content-Type':'text/html'});

  reponse.write('<h1>file list<s/h1><br>');
  reponse.write(`<h1> your list ${fileList}</h1>`)
  reponse.end();
})

server.listen(port,()=>{
  console.log('listening port',port);
})