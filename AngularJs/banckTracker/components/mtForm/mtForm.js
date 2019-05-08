myApp
    .component ('mtForm',{
        
        controller: function($scope, $rootScope){
            var ctrl= this;
            ctrl.addItem=function(){
                $rootScope.$broadcast('listItemAdd', $scope.amount, $scope.scritta); 
                console.log($scope.amount)
                // console.log($rootScope)
            }
            
        },
        templateUrl: 'components/mtForm/mtForm.html'
    })