import { Auto } from "./auto";

export class noleggio<Auto>{
    parcoAuto: Array<Auto>;
    constructor(){
        this.parcoAuto=[];
    }
    addAuto(macchina){
        this.parcoAuto.push(macchina);
    }
    noleggiaAuto(auto<Auto>, id){
        if(auto.disponibile==false){

        }
    }
}