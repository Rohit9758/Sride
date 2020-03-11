/*
 * Author: Rohit Bhure
 * Date : 10/03/2020
 * Useability: env configuration variables
 */
module.exports = { 
	primaryMongoDBURI: process.env.MONGO_URI || 'mongodb://localhost:27017/demoDb',
	openWeatherApi : "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=<Enter your API KEY>"
};