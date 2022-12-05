import seedPosts from "./post-seeds";

import sequelize from "../config/connection";

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log(`\n----- DATABASE SYNCED -----\n`);
	await seedPosts();
	console.log(`\n----- Posts SEEDED -----\n`);

	process.exit(0);
};
