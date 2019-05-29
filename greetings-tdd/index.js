//mio codice
// module.exports.greet=(name)=>{
//     if(name==null){
//         return ("hello my friend")
//     }
//     else if(name.toUpperCase()===name) {
//         return (`HELLO ${name}`);
//         //console.log(name.toUpperCase())
//     }
//     else if(Array.isArray==(name)){
//         if(name[1].toUpperCase()===name[length]&&name[0].toUpperCase()===name[0])
//             return (`HELLO ${name[1]} ${name[0]}`);
//         return (`hello ${name[1]} ${name[0]}`);
//     }
//     else 
//         return (`hello ${name}`);
// }


//console.log(this.greet('bob'))

// module.export = {
//     greet: function(name) {
//     return `HELLO ${name}`;
//     }
// }

isUppercase = string => string.toUpperCase() === string;
module.exports.greet = (name) => {

    if(!!name) {
        // Ohohoh here comes arrays...
        if(Array.isArray(name)) {
            if(isUppercase(name[0]) && isUppercase(name[1])) {
                return `HELLO ${name[0]} ${name[1]}`;
            }
            return `hello ${name[0]} ${name[1]}`;
        }

        // Check if the unique name is uppercase and reply shouting
        if(isUppercase(name))
            return `HELLO ${name.toUpperCase()}`;
        // Well...Hello buddy!
        return `hello ${name}`;
    }
    // Damn, I just got a new friend! Hi buddy :)
    return `hello my friend`;
}