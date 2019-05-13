myApp
    .component('mtrRankingStar',{
        bindings:{
            punTeggio:'='
        },
        controller:function($scope){
            let ctrl=this;
            ctrl.$onInit=function(){
                ctrl.array=new Array(ctrl.punTeggio);
                console.log(ctrl.punTeggio)
            }  
            
        },
        templateUrl: 'component/mtrRankingStar/mtrRankingStar.html'
    })