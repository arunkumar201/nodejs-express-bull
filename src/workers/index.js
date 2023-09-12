const { sleep }=require("../jobs");
const { msg1Queue, msg2Queue, msg3Queue }=require("../queues");

msg1Queue.process(async (job, done) => {
	console.log("job", job.data)
	await sleep(5)
	await msg2Queue.add({msg:job.data})
	done();
})
msg2Queue.process(async (job, done) => {
	console.debug("🚀 ~ file: index.js:10 ~ msg2Queue.process ~ job:", job.data);
	try {
		await msg3Queue.add(job.data);
		job.progress(23)
		done();
	} catch (error) {
		done(error);
		
	}
});
msg3Queue.process(async (job, done) => {
	console.debug("🚀 ~ file: index.js:19 ~ msg3Queue.process ~ job:", job.data);
	done();
});


//events --we can listen on any Queue 
msg1Queue.on('completed', (job,result) => {
	
})
// A queue can be paused and resumed globally (pass true to pause processing for just this worker):

msg2Queue.pause().then(function () {
  // msg1Queue is paused now
});

msg3Queue.resume().then(function () {
	// msg2Queue is resume now
})
