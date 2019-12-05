var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admit = document.querySelector('.admitted');
const refuse = document.querySelector('.refused');

for(let i = 0;i<people.length;i++){
	if(people[i] == 'Phil' || people[i] == 'Lola'){
		refuse.textContent += people[i] + ',';
	} else {
		admit.textContent+= people[i] + ',';
	}
}
admit.textContent = admit.textContent.slice(0,admit.textContent.length-1) + '.';
refuse.textContent = refuse.textContent.slice(0,refuse.textContent.length-1) + '.';