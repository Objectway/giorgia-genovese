myApp
    .component('mtrSearchInsertForm',{
        binding:{
            album:'='
        },
        controller:function($scope, mtrServiceList,mtrSearchService){
            var ctrl=this;
            ctrl.searchResult=[];
            ctrl.selectedItem=null;
            ctrl.salva=function(){
                let newItem= {
                    artista: ctrl.selectedItem.artistName,
                    artistaId: ctrl.selectedItem.artistId,
                    album: ctrl.selectedItem.album,
                    trecce: ctrl.selectedItem.trackCount,
                    prezzo: ctrl.selectedItem.collectionPrice,
                    punteggio: ctrl.punteggio
                }
                mtrServiceList.addItemToList(newItem);
                //console.log(newItem)
                
            }
            ctrl.search=function(){
                mtrSearchService.searchForTitle(ctrl.album)
                //console.log(ctrl.album)
                .then(result=>{
                    ctrl.searchResult=result;
                    console.log(ctrl.searchResult)
                })
                .catch(error=>{
                    //console.log(error)
                })
            }
        },
        templateUrl: 'component/mtrSearchInsertForm/mtrSearchInsertForm.html'
    })