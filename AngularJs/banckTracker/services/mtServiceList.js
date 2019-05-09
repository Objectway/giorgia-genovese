myApp
    .factory('mtServiceList', [function(){
        
        let lista=[
            {
                id:'sjdk',
                isPositive:false,
                amount:10,
                scritta:'pranzo'
            },
            {
                id:'sdfdg',
                isPositive:true,
                amount:4,
                scritta:'stipendio'
            },
            {
                id:'sdrqa',
                isPositive:false,
                amount:22,
                scritta:'metro'
            }
        ];
        return {
            getList:function(){
                console.log(lista)
                return lista;
            },
            getListIds:function(){
                return lista.map(elementoLista => elementoLista.id)
            },
            getItemById:function(id){
                let itemFind=lista.filter(function(item){
                    return item.id==id;
                });
                return itemFind.length ? itemFind[0] : false;
            },
            removeItemById:function(id){
                let arrId= lista.map(elementoLista => elementoLista.id);
                let toRem= arrId.indexOf(id);
                if(toRem!=-1){
                    lista.splice(toRem,1)
                }
            },
            getTotal:function(){
                let value=0;
                lista.forEach(item=>{
                    if(lista.isPositive==true){
                        value=value+item.amount;
                    }else
                        value=value-item.amount;
                })
                return value; console.log(value)
            },
            addItemToList:function(item){
                lista.push(item);
                console.log(lista)
            },
            deleteItemToList:function(index){
                lista.splice(index,1);
                console.log(lista)
            }
        }
    }])