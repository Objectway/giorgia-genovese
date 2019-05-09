myApp
    .component('mtListItemId', {
        bindings:{
            itemId:'='
            

        },
        controller: function($scope, mtServiceList){
            
            var ctrl=this;
            ctrl.$onInit=function(){
                ctrl.itemData=mtServiceList.getItemById(ctrl.itemId);
                console.log(ctrl.itemData)
                
            }
            ctrl.deleteItem= function(){
                mtServiceList.removeItemById(ctrl.itemId)
            }
        },
        
        templateUrl: 'components/mtListItemId/mtListItemId.html/'
        
    })
