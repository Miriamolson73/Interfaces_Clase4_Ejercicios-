

(function(){
    var parrafos=document.querySelectorAll('p');
    

    for (const parrafo of parrafos ){
        parrafo.addEventListener("click",function(){  
            
        parrafo.classList.toggle ("resaltar")  ; 
       });
     }
    }()); 
   
        
  
    
   
    

   