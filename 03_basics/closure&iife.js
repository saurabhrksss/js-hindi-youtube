// const counter=(function(){
//     var count=5
//     return function(){
//         return count;
//     }
// })()
// console.log(counter);
// console.log(counter());

// function myName(value){
//     var name=value
//     return function(){
//         return name;
//     }
// }
// console.log(myName("saurabh")());

// var cpc=[]
// for(let i=0;i<5;i++)//different result on let and globally
// {
//     cpc[i]=function(){ return i};
// }
// cpc[0]=cpc[0]()
// cpc[1]=cpc[1]()
// cpc[2]=cpc[2]()
// console.log(cpc);

// var cpc = []
// for (i = 0; i < 5; i++) {
//     (()=>{
//         var z=i;
//         cpc[i]=function(){return z}
//     }
//     )();
// }
// cpc[0] = cpc[0]()
// cpc[1] = cpc[1]()
// cpc[2] = cpc[2]()
// console.log(cpc);

const getx=(function(){
    let x=10
    return function(){
        x++;
        return x;
    }
})()
console.log(getx());
console.log(getx());



