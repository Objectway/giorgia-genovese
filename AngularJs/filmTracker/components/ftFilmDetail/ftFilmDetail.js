myApp

    .component('ftFilmDetail',{
        bindings:{
            imdbID:'='  
        },
        controlle:function(){
            let ctrl=this;
            function getFilmData(){
                ftSearchFilm.getFilmById(ctrl.imdbID)
                    .then(filmData=>{
                        ctrl.filmData=filmData
                    })
                    .catch(error=>{
                        console.log(eroor)
                    })
            },
            ctrl.$onInit= function(ftSearchFilm){
                getFilmData();

            },
            ctrl.$doCheck=function(){
                getFilmData();
            }

        },
        templateUrl: 'components/ftFilmDetail/ftfilmDetail.html'
    })