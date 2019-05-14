export class Auto{
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
}

//console.log(noleggio)