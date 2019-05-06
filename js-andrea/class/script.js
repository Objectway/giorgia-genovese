//ES5
function Persona(color_hair){
    this.capelli = color_hair;
    this.alzaLaMano=function(){
        return "salve";
    }
}
function maschio(color_hair){
    Persona.call(this, color_hair);
    this.forza = 'si';
    this.intelligenza = 'no';
}
maschio.prototype=Object.create(Persona.prototype);
maschio.prototype.constructor=maschio;
function femmina(color_hair){
    Persona.call(this, color_hair);
    this.forza = 'no';
    this.intelligenza = 'si';
}
femmina.prototype=Object.create(Persona.prototype);
femmina.prototype.constructor=femmina;

var maschio = new maschio("rossi");
var femmina = new femmina("blu");
console.log(maschio);
console.log(femmina);


//ES6
class animale{
    tipo;
    zampe;
    constructor(tipo, zampe){
        this.tipo=tipo;
        this.zampe=zampe;
    }
}
class Cane extends animale{
    constructor(){
        super("canide",3);
    }
    saluto(){
        return "ciao";
    }
}
class Gatto extends animale{
    constructor(){
        super("felino",8);
    }
}
const gatto = new Gatto();
const cane = new Cane();
console.log(cane);
console.log(gatto);
console.log(cane.saluto());