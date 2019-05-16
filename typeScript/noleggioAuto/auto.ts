export class Auto{
    [x: string]: any;
    public modello: string;
    public colore: string;
    public targa: number;
    constructor( modello: string,colore: string,targa: number){
        this.modello=modello;
        this.colore=colore;
        this.targa=targa;
    }
}

export class AutoNoleggiabile extends Auto{
    noleggiata: boolean=false;
    constructor( modello: string,colore: string,targa: number, noleggiata:boolean){
        super( modello,colore,targa);
        this.noleggiata=noleggiata;
    }
}


/*export class Auto{
    public marca: string;
    public colore: string;
    public targa: number;
    public disponibile: boolean;
    constructor( marca: string,colore: string,targa: number,disponibile: boolean){
        this.marca=marca;
        this.colore=colore;
        this.targa=targa;
        this.disponibile=disponibile;
    }
    public getDisponibility(){
        return this.disponibile;
    }
    public setDisponibility(disponibile){
        this.disponibile=disponibile;
    }
}*/

//console.log(noleggio)