function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    await wait(6000);
    for(let i = 0; i<5; i+=0){
		console.log('000000')
	}
}

run();