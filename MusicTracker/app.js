let myApp=angular.module('musicTracker',['ui.router']);
myApp.config(function($stateProvider){
    let routes=[
        {
            name:'aggiungi',
            url: '/aggiungi',
            component: 'mtrSearchInsertForm'
        },
        {
            name:'list',
            url: '/list',
            component: 'mtrManualList'
        },
        {
            name:'detail',
            url:'/list/{artistId}',
            component: 'mtrArtistInformation'
        }      
    ];
    routes.forEach(r =>{
        $stateProvider.state(r);
    })
})