var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	fs.readFile('helloworld','utf-8',function(err,data){
	res.writeHead(200,{'Content-type':'text/plain'});
	if(err)
		res.write('couldnot find the file');
	else
		res.write(data);
	res.end();
		});
}).listen(8124,function(){console.log('bount to port 8124');});
console.log('server running on 8124/');