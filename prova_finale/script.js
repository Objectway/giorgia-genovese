class Persona{
    nome;
    numero;
    email;
    constructor(nome, numero, email){
        this.nome=nome;
        this.numero=numero;
        this.email=email;
    }
}

document.addEventListener('DOMContentLoaded', function(event){
    var bottone=document.getElementsByClassName("send")
    bottone[0].addEventListener("click",mostra);
    
    function mostra(){
        var nome = document.getElementById("name").value;
        var numero = document.getElementById("number").value;
        var mail = document.getElementById("email").value;
        var div_si=document.getElementsByClassName("div_noForm")       
        
        if(nome!="" && numero!="" && mail!= ""){
            div_si[0].classList.add("disp_on")
            let p1= new Persona(nome,numero,mail);
            var risposta_n=document.querySelector('.div_noForm');
            var node_n = document.createElement('p');
            node_n.setAttribute('p1', p1.nome);
            //console.log(p1.nome)
            risposta_n.appendChild(node_n);
            node_n.innerText=p1.nome ;
            var risposta_t=document.querySelector('.div_noForm');
            var node_t = document.createElement('p');
            node_t.setAttribute('p1', p1.numero);
            //console.log(p1.nome)
            risposta_t.appendChild(node_t);
            node_t.innerText=p1.numero ;
            var risposta_e=document.querySelector('.div_noForm');
            var node_e= document.createElement('p');
            node_e.setAttribute('p1', p1.mail);
            //console.log(p1.nome)
            risposta_e.appendChild(node_e);
            node_e.innerText=p1.mail ;
            console.log("ok")
        }
        /* TEORICAMENTE CONTROLLA E COLORA DI ROSSO I BORDI DEI CAMPI CHE MANCANO MA NON SONO RIUSCITA A CAPIRE L'ERRORE*/ 
        /* else{            
            if(nome==""){                
                nome.classList.add("errore")
            }else if(numero==""){
                numero.classList.add("errore")
            }else if(mail== ""){
                mail.classList.add("errore")
            }
        }*/
        console.log("no")
    }
})