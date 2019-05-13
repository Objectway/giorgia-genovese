myApp
    .component('mtrManualList',{
        bindings:{
            itemData:'='
        },
        controller : function($scope, mtrServiceList){

            var ctrl=this;
            ctrl.$onInit=function(){
                ctrl.lista=mtrServiceList.getList();
            }  
            
        },
        templateUrl: 'component/mtrManualList/mtrManualList.html'
    
    })