var btn = document.querySelector('button');
var para = document.querySelector('p');
var input = document.querySelector('input');

btn.addEventListener('click', function () {
	para.textContent = '这些数有：';
	var number = input.value;
	input.value = '';
	input.focus();
	for (var i = 1; i < number; i++) {
		var kfNumber = Math.sqrt(i);
		if (Math.floor(kfNumber) !== kfNumber) {
			continue
		}
		para.textContent += kfNumber + ' ';
	}
})