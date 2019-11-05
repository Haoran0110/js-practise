let randomNum = Math.floor(Math.random() * 100) + 1;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let guessCount = 1;
let resetButton;

function checkGuess() {
	let userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = '上次猜的数：'
	}
	guesses.textContent = guesses.textContent + userGuess + ' ';
	if (userGuess === randomNum) {
		lastResult.textContent = '恭喜你猜对了！';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.textContent = ' GAMEOVER!!!';
		setGameOver();
	} else {
		lastResult.textContent = '你猜错了！';
		lastResult.style.backgroundColor = 'red';
		if (userGuess < randomNum) {
			lowOrHi.textContent = '小了！';
		} else if (userGuess > randomNum) {
			lowOrHi.textContent = '大了！';
		}
	}
	guessCount++;
	guessField.value = '';
	guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

// 重新开始游戏
function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = '开始新游戏！';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame() {
	guessCount = 1;
	let resetParas = document.querySelectorAll('.resultParas p');
	for (let i = 0; i < resetParas.length; i++) {
		resetParas[i].textContent = '';
	}

	resetButton.parentNode.removeChild(resetButton);
	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();

	lastResult.style.backgroundColor = 'white';
	randomNum = Math.floor(Math.random() * 100) + 1;
}