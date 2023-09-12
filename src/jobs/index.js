const { msg1Queue } = require("../queues");

function sleep(seconds = 3) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Function has slept for ${seconds} seconds`);
		}, seconds * 1000);
	});
}
async function init() {
	await msg1Queue.add({
		name: "arun",
	},{delay:4000,attempts:2});
	await msg1Queue.add({
		name: "arun",
		age: 22,
	});
}
module.exports = {
	init,
	sleep
};
