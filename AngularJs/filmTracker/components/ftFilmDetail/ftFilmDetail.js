myApp

    .component('ftFilmDetail',{
        bindings:{
            imdbID:'='  
        },
        controlle:function(){
            let ctrl=this;
            ctrl.$onInit= function(ftSearchFilm){
                ftSearchFilm.getFilmById(ctrl.imdbID)
                    .then(filmData=>{
                        ctrl.filmData=filmData
                    })
                    .catch(error=>{
                        console.log(eroor)
                    })

            }
        },
        templateUrl: 'components/ftFilmDetail/ftfilmDetail.html'
    })