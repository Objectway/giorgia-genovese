myApp
    .component ('mtFormTransaction',{

        controller: function($scope, $rootScope, mtServiceList){
            var ctrl= this;
            ctrl.isPositive=true;
           
            
            ctrl.addItem=function(){
                let expense={
                    id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
                    isPositive:ctrl.isPositive,
                    amount: $scope.amount,
                    description: $scope.scritta
                } 
                mtServiceList.addItemToList(expense);
                
            }
           
          
            /*ctrl.addItem=function(){
                $rootScope.$broadcast('listItemAdd', $scope.amount, $scope.scritta); 
                console.log($scope.amount)
                // console.log($rootScope)
            },
            ctrl.minusTransaction=function(){
                $rootScope.minus=true;  
                $rootScope.$broadcast('minusTransaction',$scope.minus)
  
            }  */         
        },
        templateUrl: 'components/mtFormTransaction/mtFormTransaction.html'
    })