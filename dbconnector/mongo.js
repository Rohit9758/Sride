/*
 * Author: Rohit Bhure
 * Date : 10/03/2020
 * Useability: mongo database connection is being shared among all files
 */
const  MongoClient = require('mongodb').MongoClient;
const config = require("./../config/config.js");


let dbArr = [];

const primaryMongoDBURI =  config.primaryMongoDBURI;


exports.get = function() {
    return {
        primaryMongo: dbArr[0]   
    }
};

exports.close = function(done) {
    dbArr[0].close();
    done(err)
};

function dbconnector(url,done) {
    return MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true
}).then(client => client.db()
    ).catch(reason => {
        done(reason);
        process.exit(1)
    })
}

exports.connect =  async function(done) {
    let databases = await Promise.all([dbconnector(primaryMongoDBURI,done)]);
    dbArr.push(...databases)
    done();
};
