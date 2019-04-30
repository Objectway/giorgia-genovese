class Persona {
    id;
    name;
    cognome;
    genere;
    professione;

    constructor(id,name,cognome,genere,professione) {
        this.id = id;
        this.name = name;
        this.cognome = cognome;
        this.genere = genere;
        this.professione = professione;
    }
}

fetch("./response.json").then(response=>
    response.json().then(data=>({
        data:data,
        status:response.status   
    })
).then(res=>{
    let listaUtenti = res.data;
    const lista=document.querySelector('.lista');

    listaUtenti.forEach((item, index, array)=> {
    
        var node = document.createElement("li"); 
        node.setAttribute('id',item.id); 
        node.setAttribute('onclick','alert_costum('+item.id+')'); 
        lista.appendChild(node);                              
        node.innerText = item.name ;
        console.log(item,index)
    });
}));
function alert_costum(id){
    fetch("./response.json").then(response=>
        response.json().then(data=>({
            data:data,
            status:response.status   
        })
    ).then(res=>{
        const item = res.data.filter(item=> item.id==id);
        let pippo=new Persona(item[0].id,item[0].name,item[0].cognome,item[0].genere,item[0].professione);
        console.log(item[0])
        pippo.forEach((item,index)=> {
            console.log(item)
            /*const risposta=document.querySelector(Persona[index]);
            var node = document.createElement('p');
            node.setAttribute('item', item);
            risposta.appendChild(node);
            node.innerText=item[0] ;*/
        });
    }
))}
