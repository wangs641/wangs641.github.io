var megaMenu = document.getElementById("overlay");
var ham_layers = document.getElementsByClassName("ham-layer");
var toggle = false;//creates two states;
function toggleHamMenu(){
	if (toggle == true ){
		document.getElementById("top_bun").style.top="11px";
		document.getElementById("top_bun").style.transform="rotate(45deg)";
		document.getElementById("meat").style.opacity="0";
		document.getElementById("bottom_bun").style.top="-11px";
		document.getElementById("bottom_bun").style.transform="rotate(-45deg)";
        

        for (var i = 0; i < ham_layers.length;i++){

        	ham_layers[i].style.backgroundColor = "white";
        }  


		megaMenu.style.height="100vh";
		toggle = false;


	}else{
		document.getElementById("top_bun").style.top="-0.05px";
		document.getElementById("top_bun").style.transform="rotate(0deg)";
		document.getElementById("meat").style.opacity="1";
		document.getElementById("bottom_bun").style.top="0.05px";
		document.getElementById("bottom_bun").style.transform="rotate(0deg)";


        for (var i = 0; i < ham_layers.length;i++){

        	ham_layers[i].style.backgroundColor = "#333";}  
		megaMenu.style.height="0vh";
		toggle = true;
	}
}