document.addEventListener('DOMContentLoaded', function(event) {
    const button = document.querySelector('.click');

    // add some style
   
    button.addEventListener('click', myFunction) 
    
    function myFunction(){
      document.getElementsByClassName("popupNo")[0].classList.add("popupSi");
      document.getElementsByClassName("popupSi")[0].classList.remove("popupNo");
      var a=document.getElementsByClassName("popupSi")[0];
      
    }
    var mesi=["gennaio","febbraio","marzo",'aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
      
    for(var i in mesi){
      var t =  document.createElement("p");
      var q = document.createTextNode(mesi[i]); 
      t.appendChild(q);
      document.getElementsByClassName("popupNo")[0].appendChild(t);
    } 
    const button1 = document.querySelector('.close');
    button1.addEventListener('click', myClose) 
     function myClose(){
      document.getElementsByClassName("popupSi")[0].classList.add("popupNo");
      document.getElementsByClassName("popupNo")[0].classList.remove("popupSi");
     } 
  
     
    })