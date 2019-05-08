let myApp=angular.module('moneyTraker',[]);

myApp   
    .component('mtList',{
        bindings:{
            title:'=' //variabile che si aggiorna nell'html
        },
        controller : function($scope){

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
            $scope.$on('listItemDelete', function(event, index){
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
        },
        controllerAs:'mtListCtrl',
        templateUrl:'components/mtList/mtList.html'
    }
    );