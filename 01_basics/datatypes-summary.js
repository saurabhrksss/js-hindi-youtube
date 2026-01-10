//Primitive
// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

//Reference Type(Non-primitive)
//Array,Objects,Function

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id===anotherId);


const bigNumber=12555615651611211111111n
console.log(typeof bigNumber);

const heros=["shaktiman","nagraaj","doga"];
let myObj={
    name:"saurabh",
    age:22,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
