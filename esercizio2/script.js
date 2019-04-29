

    var mesi=["gennaio","febbraio","marzo",'aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

    function myFunction(){
    
        document.getElementsByClassName("pop_up")[0].classList.add("pop_si");
        for(var i=0; i<mesi.length;i++){
            
            var q = document.createTextNode(mesi[i]);
            console.log(q)
            var t = document.getElementsByClassName("pop_scrivi")[0].appendChild(q);
            console.log(t)
            document.getElementsByClassName("pop_si")[0].appendChild(t); 
        }
    }


