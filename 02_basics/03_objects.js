//singleton

//object literal
const mySym=Symbol("key1")

const JsUser={
    name: "saurabh",
    "full name":"saurabh yadav",
    age:18,
    [mySym]:1,
    location:"lko",
    email:"saurabh@gmail.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"]
} 
JsUser.mySym="saurabh";
const mySym2=Symbol("keys1")
JsUser[mySym2]=2;
JsUser.mySym2=22;
console.log(JsUser[0]);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["mySym2"]);
console.log(JsUser);
console.log(JsUser[mySym]);
  
JsUser.email="saurabh@chatgpt@gmail.com"
//Object.freeze(JsUser)
JsUser.email="saurabh@microgmail.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js users")
}
console.log(JsUser.greeting());

console.log(JsUser.greeting);

JsUser.greetingTwo=function(){
    console.log(`hello js users,${this.name}`);
}
console.log(JsUser.greetingTwo());

 