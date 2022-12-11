Routeabaga
https://www.youtube.com/watch?v=KU5y1T3mvlA

    HTML/CSS(bootstrap5)
    javascript
    inrix API - findroute, fuelstations, safetyalertsincidents
    google API - directions
    leaflet.js (openstreetmap)
    node.js






# INRIXHackTokenAPI
A Sample Express.js REST API that acts as a get token proxy

Specifically, this sample code should be used if participants in INRIX Hack decide to create a website that needs to access INRIX API’s, and thus needs tokens. It can also be used as code for a sample API generally, or even as a sample for how API’s can be queried in js.

Instructions for use:

-Clone repo

-Install Node if you don't already have it. Instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

-In app.js, alter the AppId and HashToken variables to be your personal AppId and HashToken generated on this site https://iq.inrix.com/developer/key-management after creating a key.

-In terminal, navigate to the directory you cloned this repo into

-Run “npm install”

-Everything should now be configured to run. Type “node app.js” in terminal to start the API

-Hitting the endpoint http://localhost:8000/gettoken on your local machine will now return a valid INRIX token, bypassing CORS errors. This token can be used as a password to query INRIX API’s.

-Any changes to the API will require the API to restart before taking effect

-Note that tokens generated will expire after some time. You will have to develop a way to re-query this API whenever needed.
