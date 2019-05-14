"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Utils = require("./auto.js");
var a = new Utils.Auto(marca, colore, targa, disponibile);
a.setDisponibility(false);
var ClientStandard = /** @class */ (function () {
    function ClientStandard() {
    }
    return ClientStandard;
}());
var ClientBusiness = /** @class */ (function (_super) {
    __extends(ClientBusiness, _super);
    function ClientBusiness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientBusiness;
}(ClientStandard));
console.log(a.getDisponibility);
