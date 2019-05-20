const RxJs= require('rxjs');

function makePromise (){
    return new Promise ((resolve, seject)=>{
        console.log('promise execute');
        resolve();
    })
}
function makeObservable(){
    return new RxJs.Observable((observer)=>{
        console.log('observable execute');
        observer.next('pippo');
        observer.complete();
    })
}
makePromise();
makeObservable();

makeObservable().subscribe((response)=>{
    console.log('sub 1'+response);
})