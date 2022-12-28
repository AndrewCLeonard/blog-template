// import the Sequelize constructor from the library
const { Sequelize } = require("sequelize");
// import { Sequelize } from "Sequelize";
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
	host: "localhost",
	// host: "127.0.0.1",
	// host: "10.0.2.2",
	dialect: "mysql",
	port: 3001,
});

/**
 * commenting out until getting to production
 */
// create connection to our database, pass in your MySQL information for username and password

// const sequelize = process.env.JAWSDB_URL
// 	? new Sequelize(process.env.JAWSDB_URL)
// 	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
// 			host: "localhost",
// 			dialect: "mysql",
// 			port: 3301,
// 	  });

//

// export default sequelize;
module.exports = sequelize;
