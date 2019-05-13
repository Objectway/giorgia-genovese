myApp
    .component('mtrSearchInsertForm',{
        controller:function($scope, mtrServiceList,mtrSearchService){
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
            ctrl.search=function(){
                mtrSearchService.searchForTitle($scope.album)
                //console.log(ctrl.album)
                .then(result=>{
                    ctrl.searchResult=result;
                    console.log(result)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },
        templateUrl: 'component/mtrSearchInsertForm/mtrSearchInsertForm.html'
    })