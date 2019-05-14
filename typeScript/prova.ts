import * as Utils from "./provaImport.js";
var a: Utils.Capelli= new Utils.Capelli();
a.setcolore("biondi");
console.log(a.getColore())

class Person {
    public firstName: string;
    public lastName: string;
    public getName(): string{
        return this.firstName;
    }
    public getlastName(): string{
        return this.lastName;
    }
    public setName(fisrtName): string{
        return this.firstName=fisrtName;
    }
    public setlastName(lastName): string{
        return this.lastName=lastName;
    }
}
class Donna extends Person{
    public gender: string;
    public getGender(): string{
        return this.gender;
    }
    public setGender(gender): string{
        return this.gender=gender;
    }
}
class Uomo extends Person{
    public gender: string;
    public getGender(): string{
        return this.gender;
    }
    public setGender(gender): string{
        return this.gender=gender;
    }
}
var Maria= new Donna();
var Giuseppe=new Uomo();

Maria.setGender('femmina');
console.log(Maria.getGender())
Maria.setName('giorgia');
console.log(Maria.getName())