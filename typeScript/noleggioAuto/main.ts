import * as Utils from "./auto.js";
import * as noleggio from "./noleggio.js";
import * as cliente from "./cliente.js";

var a: Utils.Auto= new Utils.Auto('Audi','nero',12345,true);
var a1: Utils.Auto= new Utils.Auto('Mercedes','nero',56789,true);
var a2: Utils.Auto= new Utils.Auto('Fiat','nero',10101,true);
var a3: Utils.Auto= new Utils.Auto('Smart','nero',11111,true);
var a4: Utils.Auto= new Utils.Auto('AlfaRomeo','nero',23232,true);

let P=new noleggio.noleggio();
P.addAuto(a);
P.addAuto(a1);
P.addAuto(a2);
P.addAuto(a3);
P.addAuto(a4);

console.log(P)