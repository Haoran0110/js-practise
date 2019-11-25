const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// 得到所使用的客户端的长宽
let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;
canvas.width = WIDTH;
canvas.height = HEIGHT;
function random(number) {
	return Math.floor(Math.random() * number);
}
function draw() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	for (let i = 0; i < 100; i++) {
		ctx.beginPath();
		ctx.fillStyle = 'rgba(147,112,219,0.5)';
		ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
		ctx.fill();
	}
}
btn.addEventListener('click', draw);