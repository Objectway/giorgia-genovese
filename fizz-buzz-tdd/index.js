//io faccio cose inutili
// module.exports.fizzBuzz = (arrayTest) => {
//     for(var a=0; a<arrayTest)
// }
// var arrayNum= new Array();
//     for(var i=0; i<101; i++){
//         if(i%3==0 && i%5==0){
//             arrayNum.push('FizzBuzz');
//         }
//         else if(i%3==0){
//             arrayNum.push('Fizz');
//         }else if(i%5==0){
//             arrayNum.push('Buzz');
//         }
        
//         else
//             arrayNum.push(i);
//         console.log(arrayNum[i])
//     }
//     return arrayNum;
  
    
    const bythree = number => number % 3 === 0
const byfive = number => number % 5 === 0

module.exports = {
    fizzbuzz: () => {
        const numbers = new Array(100);
        let printers = [];

        numbers.forEach( n => printers.push(`\n${fizzOrBuzz(n)}`));
    },
    fizzOrBuzz: (number) => {
        if(bythree(number) && byfive(number)) return 'FizzBuzz';
        if(byfive(number)) return 'Buzz';
        if(bythree(number)) return 'Fizz';
        return number;
    }
}