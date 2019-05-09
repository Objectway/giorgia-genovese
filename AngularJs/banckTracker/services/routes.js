let myApp=angular.module('moneyTraker',['ui.router']);

myApp.config(function($stateProvider){
    let routes=[
        {
            name:'insert',
            url: '/insert',
            component: 'mtFormTransaction'
        },
        {
            name:'list',
            url: '/list',
            component: 'mtList'
        },
        {
            name:'detail',
            url:'/list/{itemId}',
            component: 'mtListItemId'
        }
    ];
    routes.forEach(r =>{
        $stateProvider.state(r);
    })
})