/*
  This file maps events to storage in a database.
*/

//Get required stuff
const mysql = require("mysql");
const config = require("./config.js");
const fs = require("fs");
const asyncLib = require("async");
const {Event} = require("generated/app");

//Get a new connection
const sqlPool = mysql.createPool({
	connectionLimit: config.sqlConnLimit,
	host: config.sqlHost,
	port: config.sqlPort,
	user: config.sqlUser,
	password: config.sqlPass
});


module.exports.mysqlRunSetup = async function ()
{

	let systemTemplate = await fs.readFile("file");

	//Replace keys in template with valid data
	systemTemplate = systemTemplate.replace("<<DATABASE-NAME>>", config.sqlDatabase);

	let version = (function ()
	{
		runSqlQuery("SELECT dbinstallversion FROM ")
	})();


};

function runSqlQuery(query)
{
	//sql waterfall
	asyncLib.waterfall([
		function (callback)
		{
			sqlPool.getConnection(function (err, conn)
			{
				callback(null, conn);
			});
		},
		function (conn, callback)
		{
			conn.query(query, function (err, results)
			{
				conn.release();
				callback(err, results);
			});
		}
	], function (error, results)
	{
		if (error)
		{
			console.log(error);
		}

		return results;

	});
}





