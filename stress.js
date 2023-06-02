// import {array} from "./form.js";

const img = [
  '<img src="img/8e8b16732b4b356a265ee1626af91cd9.jpg" alt="img" width="100%">',
  '<img src="img/download.jpeg" alt="img" width="100%">',
  '<img src="img/Plotter-Paper-Sheets-A0-A1-A2.jpg" alt="img" width="100%">',
];
const startButton = document.getElementById("btn");
const stopButton = document.getElementById("stopbtn");
const output = document.getElementById("output");
const inputname = document.getElementById("inputName");
const output2 = document.getElementById("output2");
// console.log("hello",array)

// prompt("what's ur name", 'Tom Cruse')

let interval;
let x = 4;
function countdown() {
  interval = setInterval(() => {
    x--;
    if (x == 0) {
        clearTimeout(interval);
        x = 'Shoot';
      }
      output2.innerHTML = x;
  }, 450);
  
}

 countdown;

let time;

function rpc() {
  countdown();
  function changeImg() {
    let x = Math.floor(Math.random() * 3);
    output.innerHTML = img[x];
    
  }

  time = setInterval(changeImg, 2200);
  return;

  // if(time){
  //     output.innerHTML += "img/Thumbs Up Sticker - Thumbs Up - Discover & Share GIFs.gif"
  // }
}

stopButton.addEventListener("click", () => {
  clearTimeout(time);
});

startButton.addEventListener("click", rpc);


// stopButton.addEventListener("click", stop)

// const name = document.getElementById('name');
// const age = document.getElementById('age');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const submit = document.getElementById('submit')
// let i = 0;
// // export let array ;

// submit.addEventListener('click', (e) => {
//     e.preventDefault();

//     array = [
//         {
//             name: name.value,
//             age: age.value,
//             email: email.value,
//             password: password.value
//         },
//     ]
//     console.log(array)
// })

// function alertName () {
//     alert("hello world")
// }
