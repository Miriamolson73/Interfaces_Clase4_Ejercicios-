
(function(){
var body=document.querySelector("#body");


document.getElementById('button').addEventListener("click", function(){
 
 var parrafoNuevo= document.createElement("p");
 var contenidoParrafo=document.createTextNode("BEEP");
 parrafoNuevo.appendChild(contenidoParrafo);
 document.getElementById("button").appendChild(parrafoNuevo);
	
 body.classList.toggle("color");
 
 
 }	);
 

}()); 



	