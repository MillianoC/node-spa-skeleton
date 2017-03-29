// Set DEV environment vars
if(process.env.NODE_ENV != "production") {
	require('dotenv').config();
}

// Includes express to handle routes
var express = require('express');
var app = express();


// // This section handles each page request
// app.get('/', function(req,res) {
// 	res.sendFile(__dirname + '/views/index.html');
// });


// Allows public access to asset files
app.use(express.static('public'));


// Opens server on defined port
app.listen(process.env.PORT, function() {
	console.log("Listening on: " + process.env.PORT);
});
