const receivesAFunction = (cb)=>cb()

function returnsANamedFunction(){
    function innerFunction (){

    }
    return innerFunction;
}
function returnsAnAnonymousFunction(){
    return  function(){
    }  
};