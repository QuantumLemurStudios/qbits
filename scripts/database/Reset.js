const readline = require('readline');
const config = require('../../src/config.js');
const eventMapper = require('../../src/EventMapper.js');
const asyncLib = require('async');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question(`Are you absolutely sure you want to reset the version? [Y/N]`, (answer) =>
{
	answer = answer.toLowerCase();
	if (answer.startsWith(`y`))
	{
		rl.question(`Are you REALLY sure? This will probably result in a loss of data if you do not correctly set the version. [Y/N]`, (answer2) =>
		{
			answer2 = answer2.toLowerCase();
			if (answer2.startsWith(`y`))
			{
				TODO: let version = parseInt(eventMapper.runSqlQuery(`SELECT dbinstallversion FROM ${config.sqlDatabase}.systemdata`).dataval);
				rl.question(`Well, alright. What version do you want to set it to? Your current version is ${version}.\n\n` +
					`This must be a number and must also be a version listed in 'src/database/updates/'\n\n` +
					`You may also choose '0' if you wish to completely reset the database back to the beginning of time and ERASE ALL DATA.`, (strVersionToSet) =>
				{
					try
					{
						let versionToSet = parseInt(strVersionToSet);
					} catch (e)
					{
						rl.write(`An error occurred. Did you type an integer?`);
					}

					rl.close();
				});
			} else
			{
				rl.write(`Your data is safe. Goodbye!`);
				rl.close();
			}
		});
	} else
	{
		rl.write(`Your data is safe. Goodbye!`);
		rl.close();
	}

});