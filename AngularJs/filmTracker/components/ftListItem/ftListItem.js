myApp
    .component('ftListItem',{
        bindings:{
            itemData:'='
        },
        controller: function($scope, ftServiceList){
            
            var ctrl=this;
            ctrl.$onInit=function(){
                // ctrl.lista=ftServiceList.getList();
                console.log(ctrl.itemData)
                
            }
        },
        templateUrl: 'components/ftListItem/ftListItem.html/'
    })