/*
  This file maps events to storage in a database.
*/

//Get required stuff
const mysql = require('mysql');
const config = require('./config.js');
const fs = require('fs');
const asyncLib = require('async');
const {Event} = require('./App.js');

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

	let systemTemplate = await fs.readFile(`file`);

	//Replace keys in template with valid data
	systemTemplate = sqlTemplateReplace(systemTemplate);

	//Get the current version from the database
	let version = parseInt(runSqlQuery(`SELECT dbinstallversion FROM ${config.sqlDatabase}.systemdata`).dataval);

	//TODO: Check to make sure version is valid

	//Get all updates from the updates directory
	let sqlUpdatesDirty = await fs.readdir(`./updates`);
	let sqlUpdates = [];
	for (let i = 0; i < sqlUpdatesDirty.length; i++)
	{
		sqlUpdates.push(parseInt(sqlUpdatesDirty[i].replace(`.tpl.sql`, ``)));
	}

	sqlUpdates.sort();
	sqlCurrentVersion = sqlUpdates[sqlUpdates.length - 1];

	if (!sqlUpdates.contains(version) && version > 0)
	{
		//Somethings borked
		console.log(`E: There seems to be something wrong with your database version and what's available.\n` +
			`Your database reports you have version ${version} when the highest available version is ${sqlCurrentVersion}.\n` +
			`You may have to manually repair the configuration in order to continue.`);
		throw new Error("Your version does not match any of the available. You may want to run 'npm run database-Reset' in order to reset the version. qbits cannot continue.");
	} else if (version > sqlCurrentVersion)
	{
		console.log(`W: You seem to be missing a few update files. Your version, ${version}, is higher than the most recent update available locally, ${sqlCurrentVersion}.`);
		throw new Error("Your version is more recent than any of the available. This could mean files are missing or your version key is broken. You may verify the install manually. If you think your version key is broken, 'npm run database-Reset' can change the version for you.")

	} else if (version === sqlCurrentVersion)
	{
		console.log(`I: Your database is up to date.`)
	} else if (version < sqlCurrentVersion)
	{
		console.log(`I: Your database is out of date and requires an update before startup continues.\n` +
			`Your version: ${version}. Current Version: ${sqlUpdates[sqlUpdates.length - 1]}`);

		//It seems safe to run the update.
		let safeVersion = version;
		for (let i = 0; i < sqlUpdates.length; i++)
		{
			if (sqlUpdates[i] > version)
			{
				runSqlQuery(sqlTemplateReplace(await fs.readFile(`./database/updates/${sqlUpdates[i]}.tpl.sql`)));
				safeVersion = sqlUpdates[i];
			}
		}

		//Update the system table with the current database version
		runSqlQuery(`UPDATE ${config.sqlDatabase}.systemdata SET dataval=${safeVersion} WHERE datakey='dbinstallversion'`);
	}


};

module.exports.runSqlQuery = function (query)
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


function sqlTemplateReplace(template)
{
	//Database name
	template = template.replace(`<<DATABASE-NAME>>`, config.sqlDatabase);


	//Return finished product
	return template;

}





