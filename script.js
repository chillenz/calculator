const dancingrat = document.getElementById('dancingrat')
const btn = document.getElementById('btn')

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
	dancingrat.style.opacity = '1';
	btn.style.visibility = 'hidden';
	dancingrat.play()
    await wait(6000);
	for(let i = 0; i<5; i+=0){
		console.log('000000')
	}
}

dancingrat.addEventListener('click', run);
