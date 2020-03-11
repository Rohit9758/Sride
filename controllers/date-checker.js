/*
 * Author: Rohit Bhure
 * Date : 10/03/2020
 * Useability: calling the weather api and dumping the mongo logs
 */

const axios = require('axios');
const { validateDate, IsPrime } = require("./../utils/utils.js");
const db = require('../dbconnector/mongo.js');
const config = require("./../config/config.js");

/*
Function to validate the date and call the weather api.
@param {object} request 
@param {object} response
*/
exports.processDate =  async (req, res) => {
  let date = req.body.createdDate;
  	if (!validateDate(date))
  	{
  		res.status(200).json({
			message: "Enter the date in following format dd-mm-yy hh:mm:ss",
		});
  	} else {  
  		if (!IsPrime(date.split('-')[0])) {
 			res.status(200).json({
					message: "Date is not Prime",
				});
			} else {
  			let result =  await getWeatherData();
  			if (result.cod == 200) {
				await transLog(result).then((data) => {
  				res.status(200).json({
					message: "Successfull",
					data: result
				})
				}).catch((err) => {
					res.status(500).json({
					message: "Internal Server Error"
				})
				})
  			} else {
  				res.status(500).json({
					message: "Internal Server Error"
				})
  			}
  		}
  	}   	
};

/*
Function to make weather api call.
*/
const getWeatherData = async () => {
  try {
    const res = await axios.get(config.openWeatherApi);
    const weatherData = res.data;
    return weatherData;
  } catch (e) {
  	return e
  }
};

/*
Function to dump the auditlog in mongodb database.
@param {object} data
*/
const transLog = async data => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.get().primaryMongo.collection("auditLog").insertOne(data);
      resolve("1 document inserted");
    } catch (DBException) {
      reject(DBException.message);
    }
  });
};