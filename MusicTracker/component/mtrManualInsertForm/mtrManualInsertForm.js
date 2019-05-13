myApp
    .component('mtrManualInsertForm',{
        controller:function($scope, ftServiceList, ftSearchFilm){
            var ctrl=this;
            ctrl.punteggio=0;
            ctrl.searchResult=[];
            ctrl.selectedItem=null;
            ctrl.salva=function(){
                let newItem= {
                    id:ctrl.selectedItem.imdbID,
                    vistoOk:ctrl.visto,
                    title:ctrl.selectedItem.Title,
                    voto:ctrl.punteggio
                }
                ftServiceList.addItemToList(newItem);
                
            }
            ctrl.search=function(){
                ftSearchFilm.searchForTitle(ctrl.title)
                .then(result=>{
                    ctrl.searchResult=result;
                    console.log(result)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
    
        },
        templateUrl: 'component/mtrManualInsertForm/mtrManualInsertForm.html'
    })