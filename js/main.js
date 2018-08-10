/*var stuff = [1, 2,4, 42, 5, 6, 8] ;
 console.log(stuff[1]);*/

/* prompt ("What is your name?");*/
/*for (var i = 0; i < 10; i++){

	console.log("iteration number", i);
}	*/
/*var questions = ["What is the weather like today?", "What do I make for dinner?"],

answers = [ "It is 15c with clear skies. ", 
"apple!"];

var user_input = prompt("Hi there. How can I help you today?");

if (user_input === questions[0]){
	console.log(answers[0]);
}
else if (user_input === questions[1]){
	console.log(answers[1]);
}
else  {
	console.log("this is no in my database!");
}*/


/*var x = 1;
var y = 4;
var z = x+y;

document.getElementById("second-display").innerHTML = x + y;*/

function readForm(){
	var name = document.querySelectorAll("input[type=text]")[0].value;
	var background = document.querySelectorAll("input[type=text]")[1].value;
	/*var price = document.querySelectorAll("input[type=number]")[0].value;*/

	var thoughts = document.querySelectorAll("textarea")[0].value;
	/*var radios = document.querySelectorAll("input[type=radio]")[0].value;

	var radioVal = '';
	for (var i = 0; i<radios.length; i++){
		if (radios[i].checked){
			radioVal = radios[i].value;
		}
		var radioVal = '';*/

	/*var radios = document.querySelectorAll("textarea")[0].value;*/


	


	var responseArea = document.getElementById("response");

	var first = document.createElement("p")

	var firstContent = document.createTextNode(name + "with the background of " +background +"want to say " + thoughts + "to his/her favorite "/*+radioVal+"faculty"*/)

	first.appendChild(firstContent)

	responseArea.appendChild(first);
}
  

  document.querySelector("form").addEventListener("submit",function(e){
  	e.preventDefault()
  	readForm();
  });














