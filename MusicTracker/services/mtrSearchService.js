myApp
    .factory('mtrSearchService',['$http', '$q', function($http, $q){ 
        
        const endpoint= 'https://itunes.apple.com/search?entity=album&term=';
        const endpoint2='https://itunes.apple.com/lookup?id=';
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
            getArtistInformation:function(artistId){
                let deferred= $q.defer();
                    let searchEndpoint= endpoint2+artistId;                             
                        $http({
                            method:'GET',
                            url:searchEndpoint
                            }).then(function(responseJson){
                                if(responseJson.data.result!==null){
                                    deferred.resolve(responseJson.data.results)
                                }else{
                                    deferred.resolve(responseJson.data.Error)
                                }     
                            }).catch(function(error){
                                deferred.reject(error)
                            }) 
                    return deferred.promise;
            }
        }
          
        
}])  