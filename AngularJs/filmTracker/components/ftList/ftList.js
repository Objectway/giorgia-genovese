myApp
    .component ('ftList',{
        bindings:{
        },
        controller : function($scope, ftServiceList){

            var ctrl=this;
            ctrl.$onInit=function(){
                ctrl.lista=ftServiceList.getList();
            }  
            
        },
        templateUrl: 'components/ftList/ftList.html'
    })