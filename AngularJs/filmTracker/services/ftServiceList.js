myApp
    .factory('ftServiceList',[function(){
        let lista=[
            {
                id:'jgur',
                vistoOk:true,
                title:'EndGame',
                voto:5
            },
            {
                id:'jguddddr',
                vistoOk:true,
                title:'Avatar',
                voto:10 
            },
        ];
        return{
            getList:function(){
            return lista;
        },
            addItemToList:function(item){
                if(!item.vistoOk){
                    let itemT={
                        title:item.title
                    }
                    lista.push(itemT)
                }else{lista.push(item)}      
            }
        }
       
    }])