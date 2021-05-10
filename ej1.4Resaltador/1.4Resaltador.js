

(function(){
    var parrafos=document.querySelectorAll('p');
    console.log(parrafos);
    for (var i=0 ;i<parrafos.length;i++){
        parrafos[i].addEventListener("click",function(){   
        parrafos[i].classList.toggle("resaltar")});
     }
    }()); 
        
        
  
    
   
    

   