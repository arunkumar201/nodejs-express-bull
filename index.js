const express=require("express");
require('./src/workers/index')
const Queue = require("bull");
const { createBullBoard } = require("@bull-board/api");
const { BullAdapter } = require("@bull-board/api/bullAdapter");
const { ExpressAdapter } = require("@bull-board/express");
const {
	msg1Queue,
	msg2Queue,
	msg3Queue,
	msg4Queue,
	msg5Queue,
} = require("./src/queues");
const { init } = require("./src/jobs");

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/bot/queues");

createBullBoard({
	queues: [
		new BullAdapter(msg1Queue),
		new BullAdapter(msg2Queue),
		new BullAdapter(msg3Queue),
		new BullAdapter(msg4Queue),
		new BullAdapter(msg5Queue),
	],
	serverAdapter: serverAdapter,
});
const app=express();
app.use("/bot/queues", serverAdapter.getRouter());
init()


app.listen(3000, async () => {
	console.log("Running on 3000...");
	console.log("For the UI, open http://localhost:3000/bot/queues");
});
