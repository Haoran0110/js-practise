var contacts = ['小红:123456789','小蓝:0987654321','小黑:678906543'];
const btn = document.querySelector('button');
const para = document.querySelector('p');
const input = document.querySelector('input');

btn.addEventListener('click', function(){
	var searchName = input.value;
	input.value = '';
	input.focus();
	for(var i = 0 ; i < contacts.length; i++){
		var personName = contacts[i].split(':');
		if(personName[0] === searchName){
			para.textContent = personName[0] + '的电话号码是：' + personName[1];
			break
		} else {
			para.textContent = '没有查找到！'
		}
	}
})