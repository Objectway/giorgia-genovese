"use strict";
exports.__esModule = true;
var Utils = require("./auto.js");
var noleggio = require("./noleggio.js");
var a = new Utils.Auto('Audi', 'nero', 12345, true);
var a1 = new Utils.Auto('Mercedes', 'nero', 56789, true);
var a2 = new Utils.Auto('Fiat', 'nero', 10101, true);
var a3 = new Utils.Auto('Smart', 'nero', 11111, true);
var a4 = new Utils.Auto('AlfaRomeo', 'nero', 23232, true);
var P = new noleggio.noleggio();
P.addAuto(a);
P.addAuto(a1);
P.addAuto(a2);
P.addAuto(a3);
P.addAuto(a4);
console.log(P);
