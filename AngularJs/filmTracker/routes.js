let myApp=angular.module('filmTracker',[]);
myApp.config(function(){
    let routes=[
        {
            name:'form',
            url: '/form',
            component: 'ftInputForm'
        },
        {
            name:'list',
            url: '/list',
            component: 'ftList'
        }
    ];
    
})