/*
 * Author: Rohit Bhure
 * Date : 10/03/2020
 * Useability: Server Startup and checking the database connection
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require('helmet');
const db = require('./dbconnector/mongo.js'); 

const config = require("./config/config.js");

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(helmet.hidePoweredBy());

app.set('port', process.env.PORT || 9000);

require("./routes/routes.js")(app);

try {
    db.connect(function (err, data) {
        if (err) {
            console.log("Problem in connecting database ", err)
            process.exit(1);
        } else {
            app.listen(app.get('port'), function () {
                console.log('Listening on port 9000...');
            })
        }
    });
} catch(err){
    console.log("Error in Dbconnection",err)
}

