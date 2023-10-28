document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").onsubmit=function(event){
        
        const color = document.getElementById("color").value;

        document.getElementById("hello").style.color=color;

        
            event.preventDefault();
    

    

        

        //change color here


    };
});