import {Auto, AutoNoleggiabile}  from "./auto";

export class noleggio{
    parcoAuto: Array<Auto>;
    constructor(){
        var a =new AutoNoleggiabile('Audi','nero',12345,false);
        var a1= new AutoNoleggiabile('Mercedes','nero',56789,false);
        var a2= new AutoNoleggiabile('Fiat','nero',10101,false);
        this.parcoAuto=[];
        this.parcoAuto.push(a);
        this.parcoAuto.push(a1);
        this.parcoAuto.push(a2);
    }
    public getRandomAuto():AutoNoleggiabile{
        let autoNoleggiata!:AutoNoleggiabile;
        this.parcoAuto.forEach((auto)=>{
            if(Math.round(Math.random())===1 && !!auto.noleggiata){
                autoNoleggiata=auto;
            }
        });
        if(!autoNoleggiata){
            autoNoleggiata=new AutoNoleggiabile('Mercedes', 'blu', 24680, false);
        }       
        return autoNoleggiata;
    }
}


/*export class noleggio<Auto>{
    parcoAuto: Array<Auto>;
    constructor(){
        this.parcoAuto=[];
    }
    addAuto(macchina){
        this.parcoAuto.push(macchina);
    }
    noleggiaAuto(auto:auto.Auto, id:string){
        if(auto.disponibile==false){

        }
    }
}*/