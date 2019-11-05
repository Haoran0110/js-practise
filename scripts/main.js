let myHeading = document.querySelector('h1.h1');
let myClick = document.querySelector('p');
myClick.onclick = function () {
	alert('fine')
}
let myImage = document.querySelector('img');
myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src')
	if (mySrc === 'images/aaa.jpg') {
		myImage.setAttribute('src', 'images/bbb.jpg')
	} else {
		myImage.setAttribute('src', 'images/aaa.jpg')
	}
}
let myButton = document.querySelector('button.user');
function setUserName() {
	let myName = prompt('Please enter your game name:')
	if (!myName || myName === null) {  // 控制弹出的输入框内容不能为空
		setUserName()
	} else {
		localStorage.setItem('name', myName)
		myHeading.textContent = 'player2: ' + myName
	}
}
if (!localStorage.getItem('name')) {
	setUserName()
} else {
	let storedName = localStorage.getItem('name')
	myHeading.textContent = storedName + ', how are you?'
}
myButton.onclick = function () {
	setUserName()
}
let myHeading2 = document.querySelector('h1.h2');
let para = document.querySelector('button.player')
para.addEventListener('click', setPlayerName)
function setPlayerName() {
	let playerName = prompt('Please enter your game name:')
	myHeading2.textContent = 'player2: ' + playerName
}