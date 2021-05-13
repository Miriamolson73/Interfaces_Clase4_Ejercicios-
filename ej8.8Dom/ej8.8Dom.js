
var $div = document.querySelector("div");


/*  $div.style.background="red";
$div.style.height="300px";
$div.style.width="300px";
*/

//$div.classList.add("square");



setInterval(function(){$div.classList.toggle("square");},1000);
  

var swap_1= document.getElementById("source");
var swap_2= document.getElementById("destination");


swap_2.appendChild(swap_1.getElementsByTagName('p')[0]);
swap_1.appendChild(swap_2.getElementsByTagName('p')[0]);




