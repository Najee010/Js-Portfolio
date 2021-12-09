let myImage = document.querySelector('img');
let myHeader = document.querySelector('h2');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/theface.jpg') {
		myImage.setAttribute('src','images/sasha.gif');
		myHeader.textContent = 'Bam!';
		
	} else{
		myImage.setAttribute('src','images/theface.jpg');
		myHeader.textContent= 'Click me for Sasha';
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName){
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'you know, youre pretty cool, '+ myName;
	}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'you know, youre pretty cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}