myApp
    .factory('mtrServiceList',[function(){
        let lista=[
            {
                artista: "Rival Sons",
                album: "Pressure and Time",
                trecce: 13,
                prezzo: 15,
                punteggio: 5
            },
            {
                artista: "Macklemore",
                album: "Brad Pit's Cousin",
                trecce: 13,
                prezzo: 18,
                punteggio: 5
            }
        ];
        return{
            getList:function(){
            return lista;
        },
        addItemToList:function(item){
          console.log(item)
                lista.push(item)
     
        }
    }
   
}])