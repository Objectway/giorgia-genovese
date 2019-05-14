"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, colore, targa, disponibile) {
        this.marca = marca;
        this.colore = colore;
        this.targa = targa;
        this.disponibile = disponibile;
    }
    Auto.prototype.getDisponibility = function () {
        return this.disponibile;
    };
    Auto.prototype.setDisponibility = function (disponibile) {
        this.disponibile = disponibile;
    };
    return Auto;
}());
exports.Auto = Auto;
//console.log(noleggio)
