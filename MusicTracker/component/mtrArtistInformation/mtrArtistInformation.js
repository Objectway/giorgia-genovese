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
                getArtistData();

            },
            ctrl.$doCheck=function(){
                getArtistData();
            }

        },
        templateUrl:'component/mtrArtistInformation.html'
    })