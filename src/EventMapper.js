/*
  This file maps events to storage in a database.
*/

//Get required stuff
const mysql = require("mysql");
const config = require("./config.js");
const fs = require("file-system");
const asyncLib = require("async");


//Get a new connection
const sqlPool = mysql.createPool({
	connectionLimit: config.sqlConnLimit,
	host: config.sqlHost,
	port: config.sqlPort,
	user: config.sqlUser,
	password: config.sqlPass
});


module.exports.mysqlRunSetup = async function () {

	let systemTemplate = await fs.readFile("file");

	//Replace keys in template with valid data
	systemTemplate = systemTemplate.replace("<<DATABASE-NAME>>", config.sqlDatabase);

	//sql waterfall
	asyncLib.waterfall([
		function (callback) {

		}
	]);
};





