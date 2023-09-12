
const { config }=require("./config");




const Queue = require("bull");

//Queues
const msg1Queue = new Queue("msg1", { redis: config.redis });
const msg2Queue = new Queue("msg2", { redis: config.redis });
const msg3Queue = new Queue("msg3", { redis: config.redis });
const msg4Queue = new Queue("msg4", { redis: config.redis });
const msg5Queue = new Queue("msg5", { redis: config.redis });

const queues = [
	{
		name: "msg1",
		hostId: "msg1 Queue Manager",
		redis: config.redis,
	},
	{
		name: "msg2",
		hostId: "msg2 Queue Manager",
		redis: config.redis,
	},
	{
		name: "msg3",
		hostId: "msg3 Queue Manager",
		redis: config.redis,
	},
	{
		name: "msg4",
		hostId: "msg4 Queue Manager",
		redis: config.redis,
	},
	{
		name: "msg5",
		hostId: "msg5 Queue Manager",
		redis: config.redis,
	},
];

module.exports = {
	msg1Queue,
	msg2Queue,
	msg3Queue,
	msg4Queue,
	msg5Queue,
	queues,
};
