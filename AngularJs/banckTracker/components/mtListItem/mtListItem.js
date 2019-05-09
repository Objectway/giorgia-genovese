myApp
    .component('mtListItem', {
        bindings:{

            itemData:'=', //variabile che si aggiorna nell'html
            itemIndex:"=",
            isPositive:"="

        },
        controller: function($scope, mtServiceList){
            
            var ctrl=this;
            ctrl.isPositive=$scope.isPositive;
            /*ctrl.deleteItem=function(){
            console.log('cancello')
            $scope.$emit('listItemDelete',ctrl.itemIndex)
           }*/
          /* ctrl.$onInit=function(){
               ctrl.itemData=mtServiceList.getItem(ctrl.itemIndex);
           }*/
           ctrl.deleteItem=function(){
            
            console.log(ctrl.itemIndex)
            mtServiceList.deleteItemToList(ctrl.itemIndex);                
        }
        },
        
        templateUrl: 'components/mtListItem/mtListItem.html/'
        
    })
