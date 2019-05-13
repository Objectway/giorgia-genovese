myApp
    .factory('mtrSearchService',['$http', '$q', function($http, $q){ 
        const titolo='Poetica';
        const endpoint= 'https://itunes.apple.com/search?entity=album&term='+titolo;
        return{
            searchForTitle: function( searchString){
                let deferred= $q.defer();
                    let searchEndpoint= endpoint+'&s='+searchString;                                   
                        $http({
                            method:'GET',
                            url:searchEndpoint
                            }).then(function(responseJson){
                                if(responseJson.data.result!==null){
                                    deferred.resolve(responseJson.data.result)
                                }else{
                                    deferred.resolve(responseJson.data.Error)
                                }  
                                console.log(responseJson)  
                            }).catch(function(error){
                                deferred.reject(error)
                            }) 
                    return deferred.promise;
            },
         /*   getFilmById:function(imdbID){
                let deferred= $q.defer();
                    let searchEndpoint= endpoint+'&i='+imdbID;                                   
                        $http({
                            method:'GET',
                            url:searchEndpoint
                            }).then(function(responseJson){
                                if(responseJson.data.Response==='True'){
                                    deferred.resolve(responseJson.data)
                                }else{
                                    deferred.resolve(responseJson.data.Error)
                                }    
                            }).catch(function(error){
                                deferred.reject(error)
                            }) 
                    return deferred.promise;
            }*/
        }
}])  