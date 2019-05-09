myApp   
    .component('mtList',{
        bindings:{
            title:'=', //variabile che si aggiorna nell'html
            lista:'='
        },
        controller : function($scope, mtServiceList){

            var ctrl=this;
            
            ctrl.$onInit=function(){
                ctrl.lista=mtServiceList.getList();
                ctrl.listaIds=mtServiceList.getListIds();
                console.log(ctrl.listaIds)

            }
            ctrl.$doCheck=function(data){
                ctrl.listaIds=mtServiceList.getListIds();
                ctrl.listaTot=mtServiceList.getTotal();
            }            
            /*ctrl.lista=[
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
            ];*/
           /* ctrl.faiCose = function(){
                ctrl.title='faccio faccio'
                //alert('faccio');
            }
            ctrl.onInit=function(){
                console.log('init')
            }
            ctrl.onChanges=function(cambiamento){
                console.log('init')
            }*/
            /*$scope.$on('listItemDelete', function(event, index){
                console.log(index)
                ctrl.lista.splice(index,1)
            })
            $scope.$on('listItemAdd', function(event, amount,scritta){
                //console.log(index)
                ctrl.lista.push({
                    amount:amount,
                    scritta:scritta
                })
            })
            $scope.$on('minusTransaction', function(event,minus){
                alert('meno selezionato');
                console.log(minus)
            })*/
        },
        controllerAs:'mtListCtrl',
        templateUrl:'components/mtList/mtList.html'
    }
    );