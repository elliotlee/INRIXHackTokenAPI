const cors = require("cors");
const express = require('express');
const fetch = require("node-fetch");
const { response } = require('express');
const app = express();
const port = 8000;
app.set('json spaces', 2);
app.use(cors({origin: true, credentials: true}));
app.options("*", cors());
 
// to query, call: http://localhost:8000/gettoken
 
app.get('/gettoken', async function (req, res) {
 
   //Set up URL to query
   let appId = "exz35755xa";
   let hashToken = "ZXh6MzU3NTV4YXxhM0VvWEJKUHdPNExncUt4UEJMaHU5U3d6cXBRZFFWbDRLMmVvczdV";
   let url = `https://api.iq.inrix.com/auth/v1/appToken?appId=${appId}&hashToken=${hashToken}`;
 
   //Set up query method
   var requestOptions = {
       method: 'GET'
   };
 
   //Query INRIX for token
   let response = await fetch(url, requestOptions);
   let json = await response.json();
   let output = json.result.token;

   //Return token
   res.json({
       token: output,
   });
})

app.get('/getdrive', async function (req, res) {
 
   let x1 = req.query.x1
   let y1 = req.query.y1
   let x2 = req.query.x2
   let y2 = req.query.y2
 
   //Set up URL to query
   let url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + x1 + "%2C" + y1 + "&destination=" + x2 + "%2C" + y2 + "&mode=driving&key=AIzaSyDB8n-0BWGGHjmWlYpWSGpvWa-M-f5F8BU";
   console.log(url)
   //Set up query method
   var requestOptions = {
       method: 'GET'
   };
 
   //Query for json data
   let response = await fetch(url, requestOptions);
   let drivingJson = await response.json();
   let output = drivingJson.routes;
 
   //Return json
   res.json(output);
})
 
app.get('/getwalk', async function (req, res) {
 
   let x1 = req.query.x1
   let y1 = req.query.y1
   let x2 = req.query.x2
   let y2 = req.query.y2
 
   //Set up URL to query
   let url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + x1 + "%2C" + y1 + "&destination=" + x2 + "%2C" + y2 + "&mode=walking&key=AIzaSyDB8n-0BWGGHjmWlYpWSGpvWa-M-f5F8BU";
   console.log(url)
   //Set up query method
   var requestOptions = {
       method: 'GET'
   };
 
   //Query for json data
   let response = await fetch(url, requestOptions);
   let walkingJson = await response.json();
   let output = walkingJson.routes;
 
   //Return json
   res.json(output);
})
 
app.get('/getbike', async function (req, res) {
 
   let x1 = req.query.x1
   let y1 = req.query.y1
   let x2 = req.query.x2
   let y2 = req.query.y2
 
   //Set up URL to query
   let url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + x1 + "%2C" + y1 + "&destination=" + x2 + "%2C" + y2 + "&mode=bicycling&key=AIzaSyDB8n-0BWGGHjmWlYpWSGpvWa-M-f5F8BU";
   console.log(url)
   //Set up query method
   var requestOptions = {
       method: 'GET'
   };
 
   //Query for json data
   let response = await fetch(url, requestOptions);
   let bikeJson = await response.json();
   let output = bikeJson.routes;
 
   //Return json
   res.json(output);
})
 
app.get('/gettransit', async function (req, res) {
 
   let x1 = req.query.x1
   let y1 = req.query.y1
   let x2 = req.query.x2
   let y2 = req.query.y2
 
   //Set up URL to query
   let url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + x1 + "%2C" + y1 + "&destination=" + x2 + "%2C" + y2 + "&mode=transit&key=AIzaSyDB8n-0BWGGHjmWlYpWSGpvWa-M-f5F8BU";
   console.log(url)
   //Set up query method
   var requestOptions = {
       method: 'GET'
   };
 
   //Query for json data
   let response = await fetch(url, requestOptions);
   let transitJson = await response.json();
   let output = transitJson.routes;
 
   //Return json
   res.json(output);
})
 
 
//Starting server using listen function
app.listen(port, function () {
   console.log("Server has been started at " + port);
})
