myApp
    .factory('mtrSearchService',['$http', '$q', function($http, $q){ 
        
        const endpoint= 'https://itunes.apple.com/search?entity=album&term=';
        return{
            searchForTitle: function( searchString){
                let deferred= $q.defer();
                    let searchEndpoint= endpoint+searchString;                                   
                        $http({
                            method:'GET',
                            url:searchEndpoint
                            }).then(function(responseJson){
                                if(responseJson.data.result!==null){
                                    deferred.resolve(responseJson.data.results)
                                }else{
                                    deferred.resolve(responseJson.data.Error)
                                }  
                                //console.log(responseJson)  
                            }).catch(function(error){
                                deferred.reject(error)
                            }) 
                    return deferred.promise;
            },
            getFilmById:function(imdbID){
                let deferred= $q.defer();
                    let searchEndpoint= endpoint+'&i='+imdbID;                                   
                        $http({
                            method:'GET',
                            url:searchEndpoint
                            }).then(function(responseJson){
                                if(responseJson.data.result!==null){
                                    deferred.resolve(responseJson.data.results)
                                }else{
                                    deferred.resolve(responseJson.data.Error)
                                }  
                                console.log(responseJson)  
                            }).catch(function(error){
                                deferred.reject(error)
                            }) 
                    return deferred.promise;
            }
        }
}])  