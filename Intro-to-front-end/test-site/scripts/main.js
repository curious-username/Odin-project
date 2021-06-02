let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla-icon.png') {
      myImage.setAttribute('src','images/cute-kitten.png');
    } else {
      myImage.setAttribute('src','images/mozilla-icon.png');
    }
}


function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
