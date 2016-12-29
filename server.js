var http = require('http');
var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

// Require the config file
// An example config file is included in this package for you as okta_config.json.example
var config = require('./okta_config.json');

app.use(express.static('static'));

// Route for / - default page
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );

})


// Sends the contends of index.html
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/failedTest.html', function (req, res) {
   res.setHeader('Content-Type', 'text/html');
   res.sendFile( __dirname + "/" + "failedTest.html" );
})

app.get('/success.html', function (req, res) {
   res.setHeader('Content-Type', 'text/html');
   res.sendFile(  __dirname + "/" + "success.html" );
})

app.get('/register.html', function (req, res) {
   res.setHeader('Content-Type', 'text/html');
   res.sendFile(  __dirname + "/" + "register.html" );
})

app.post('/RegistrationServlet.html', function (req, res) {
   res.setHeader('Content-Type', 'text/html');
   res.sendFile(  __dirname + "/" + "RegistrationServlet.html" );
})

// Run the Server
if (config.listenOnHTTP != "true")
	{ console.log("Not configured to listen on http in config file."); }
else
{ 
	http.createServer(app).listen(config.httpPort); 
	console.log("Server listening on port " + config.httpPort);
}

// Set SSL options here
if (config.listenOnHTTPS != "true")
	{ console.log("Not configured to listen on https in config file."); }
else
{
	var serverOptions = {
  		key: fs.readFileSync(config.sslKey),
  		cert: fs.readFileSync(config.sslCert)
	};
	https.createServer(serverOptions, app).listen(config.httpsPort); 
	console.log("SSL Server listening on port " + config.httpsPort);
}


