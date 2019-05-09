myApp
    .component('mtTraker',{
        bindings:{
            title:'=' //variabile che si aggiorna nell'html
            
        },
        controller: function(){
        var ctrl=this;
        ctrl.lista=[
                {
                    amount:10,
                    scritta:'pranzo'
                },
                {
                    amount:4,
                    scritta:'caffe'
                },
                {
                    amount:22,
                    scritta:'metro'
                }
            ];
        },
       /* $scope.$on('listItemDelete', function(event, index){
            console.log(index)
            ctrl.lista.splice(index,1)
        })
        $scope.$on('listItemAdd', function(event, amount,scritta){
            //console.log(index)
            ctrl.lista.push({
                amount:amount,
                scritta:scritta
            })
        }),*/
        templateUrl: 'components/mtTraker/mtTraker.html'
    })