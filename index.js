function callback(){
}
function receivesAFunction (callback){
    callback();
}

function returnsAnAnonymousFunction(){
    return function(){};
}

function returnsANamedFunction(){
    return function AnAnonymousFunction(){
        console.log(receivesAFunction)
    }
}
