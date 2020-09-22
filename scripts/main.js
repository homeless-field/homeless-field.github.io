let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name');
	
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Welcome to my test page, ' + myName;
	}
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
	
	
    if(mySrc === 'images/ocean.png') {
      myImage.setAttribute('src','images/ocean2.jpg');
    } else {
      myImage.setAttribute('src','images/ocean.png');
    }
}

myButton.onclick = function() {
	setUserName();
}


if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	
	myHeading.textContent = 'Welcome to my test page, ' + storedName;
}