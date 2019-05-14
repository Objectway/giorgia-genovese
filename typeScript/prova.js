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
var Utils = require("./provaImport.js");
var a = new Utils.Capelli();
a.setcolore("biondi");
console.log(a.getColore());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        return this.firstName;
    };
    Person.prototype.getlastName = function () {
        return this.lastName;
    };
    Person.prototype.setName = function (fisrtName) {
        return this.firstName = fisrtName;
    };
    Person.prototype.setlastName = function (lastName) {
        return this.lastName = lastName;
    };
    return Person;
}());
var Donna = /** @class */ (function (_super) {
    __extends(Donna, _super);
    function Donna() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Donna.prototype.getGender = function () {
        return this.gender;
    };
    Donna.prototype.setGender = function (gender) {
        return this.gender = gender;
    };
    return Donna;
}(Person));
var Uomo = /** @class */ (function (_super) {
    __extends(Uomo, _super);
    function Uomo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uomo.prototype.getGender = function () {
        return this.gender;
    };
    Uomo.prototype.setGender = function (gender) {
        return this.gender = gender;
    };
    return Uomo;
}(Person));
var Maria = new Donna();
var Giuseppe = new Uomo();
Maria.setGender('femmina');
console.log(Maria.getGender());
Maria.setName('giorgia');
console.log(Maria.getName());
