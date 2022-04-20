let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/chromeos-logo.png') {
    myImage.setAttribute('src', 'images/s1AjSxph_400x400.jpeg');
  } else {
    myImage.setAttribute('src', 'images/chromeos-logo.png');
  }
};
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() { setUserName(); }

                   docment.querySelector('html')
                       .onclick = function() { alert('别戳我，我怕疼。'); }
