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
        }      
    ];
    routes.forEach(r =>{
        $stateProvider.state(r);
    })
})