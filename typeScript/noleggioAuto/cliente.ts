export class Client{
    id: string;
    name:string;
    surname:string;
    constructor(id:string,name:string,surname:string){
        this.id=id;
        this.name=name;
        this.surname=surname;
    }
}




/*export interface Client{
    id: string;
    spesa: number;
}
class ClientStandard implements Client{
    id: string;
    spesa: number;
    constructor(id:string,spesa:number){
        this.id=id;
        this.spesa=spesa;
    }
}
class ClientBusiness extends ClientStandard{
    sconto: number;
    constructor(sconto:number){       
        super(id,spesa);
        this.sconto=sconto;
    }
}
class clientiA<Client>{
    clientiA: Array<Client>;
    constructor(){
        this.clientiA=[];
    }
    addCliente(cliente){
        this.clientiA.push(cliente);
    }
}*/