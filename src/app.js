import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
  
window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'A stranger'];
  let action = ['ate', 'peed', 'crushed', 'broke', 'stole'];
  let what = ['my homework', 'my phone', 'the car', 'my food', 'the fridge'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  function num() {
		let randomNumber = Math.floor((Math.random() * 5 ) + 1);
		return randomNumber
	}

  let text = who[num()] + ' '+ action[num()] + ' '+ what[num()] + ' '+ when[num()];
  const excusa = excuse.innerHTML;
  excuse.innerHTML= text;
}

