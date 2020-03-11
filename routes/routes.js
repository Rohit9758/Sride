/*
 * Author: Rohit Bhure
 * Date : 10/03/2020
 * Useability: all routes for nodejs Application
 */

module.exports = app => {
 app.post('/api/v1/datechecker',require('./../controllers/date-checker').processDate)
}