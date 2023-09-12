require("dotenv").config();
exports.config = {
	port: process.env.PORT,
	redis: {
		port: process.env.REDIS_PORT,
		host: process.env.REDIS_HOST,
		password: process.env.REDIS_PASS,
	},
};
