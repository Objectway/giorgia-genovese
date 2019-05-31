
module.exports.clickHandlerAdd = (valuta:number) => {
  
    if(valuta>=0){
      return valuta=valuta+1;
    }else{
      return valuta=valuta-1;
    }

}