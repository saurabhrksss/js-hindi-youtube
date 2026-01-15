//IMMEDIATELY INVOKED FUNCTION EXPRESSION

//NAMED IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

//use semicolon btw IIFE
//ANONYMOUS IIFE
(
    (name)=>{console.log(`DB CONNECTED ${name}`)
    }
)('saurabh');

const getx=(()=>{
    var x=10
    return function(it=0){
        x=x+it;
        return x;
    }
})()

console.log(getx());
console.log(getx(1));
console.log(getx(1));

