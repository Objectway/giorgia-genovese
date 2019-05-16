import * as Utils from "./auto.js";
import {noleggio}  from "./noleggio.js";
import * as Client from "./cliente.js";

let autonoleggio: noleggio= new noleggio();
autonoleggio.getRandomAuto();



/*
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


var c: Client.Client=new Client.ClientStandard('stqodq', 300);
var c1: Client.Client=new Client.ClientStandard('stabcd', 800);
var c2: Client.Client=new Client.ClientStandard('stefgh', 400);
var c3: Client.Client=new Client.ClientStandard('stilmn', 200);
var c4: Client.Client=new Client.ClientStandard('stopqr', 300);
let C=new Client.clientiA();
C.addClienti(c);
C.addClienti(c1);
C.addClienti(c2);
C.addClienti(c3);
C.addClienti(c4);
console.log(C)*/