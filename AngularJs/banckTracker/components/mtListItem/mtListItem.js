myApp
    .component('mtListItem', {
        bindings:{

            itemData:'=', //variabile che si aggiorna nell'html
            itemIndex:"="
        },
        controller: function($scope){

            var ctrl=this;
           
            ctrl.deleteItem=function(){
            console.log('cancello')
            $scope.$emit('listItemDelete',ctrl.itemIndex)
           }
           
        },
        
        templateUrl: 'components/mtListItem/mtListItem.html/'
        
    })
