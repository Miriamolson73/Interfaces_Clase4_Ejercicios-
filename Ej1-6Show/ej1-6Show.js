(function(){
    var divs=document.querySelectorAll('div');
    var botones=document.querySelectorAll('button');
    

    for (const div of divs ){
        var esteButton=div.querySelector('button');
        esteButton.addEventListener("click",function(){  
        var imagen=div.querySelector('img');    
            
        imagen.classList.toggle ("oculto")  ; 
       });
     }
    }()); 
   