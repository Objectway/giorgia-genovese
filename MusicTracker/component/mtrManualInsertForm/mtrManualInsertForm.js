myApp
    .component('mtrManualInsertForm',{
        controller:function($scope, mtrServiceList){
            var ctrl=this;
            
            ctrl.salva=function(){
                let newItem= {
                    artista: $scope.artista,
                    album: $scope.album,
                    trecce: $scope.tracce,
                    prezzo: $scope.prezzo,
                    punteggio: ctrl.punteggio
                }
                mtrServiceList.addItemToList(newItem);
                console.log(punteggio)
                
            }
        },
        templateUrl: 'component/mtrManualInsertForm/mtrManualInsertForm.html'
    })