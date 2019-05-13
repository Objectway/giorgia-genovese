myApp
    .component('mtrArtistInformation',{
        bindings:{
            artistId:'='  
        },
        controlle:function(){
            let ctrl=this;
            function getArtistData(){
                mtrSearchService.getArtistInformation(ctrl.artistId)
                    .then(artistData=>{
                        ctrl.artistData=artistData
                    })
                    .catch(error=>{
                        console.log(eroor)
                    })
            }
            ctrl.$onInit= function(mtrSearchService){
                mtrSearchService.getArtistInformation(artistId);

            },
            ctrl.$doCheck=function(){
                getArtistData();
            }

        },
        templateUrl:'component/mtrArtistInformation/mtrArtistInformation.html'
    })