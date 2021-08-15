

// personal greeting
let mybutton = document.querySelector('button');
let myheader = document.getElementById('hw');

function setUserName() {
  let myname = prompt('Please enter your name.');
  if(!myname) {
    setUserName();
  } else {
  localStorage.setItem('name', myname);
  myheader.textContent = 'Hello World, ' + myname;
} }

if(!localStorage.getItem('name')) {setUserName();}
else {
    let storedname = localStorage.getItem('name');
    myheader.textContent = 'Hello World, ' + storedname;
}

mybutton.onclick = function() {setUserName();}

//goodbye và loveyou
let saybye = document.getElementById('Bye');
saybye.onclick = function textchange() {saybye.textContent = 'LoVe you~'}

if (saybye.textContent = 'LoVe you~') {saybye.onclick = saybye.textContent = 'Goodbye!'}
