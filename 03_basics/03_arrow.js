const user = {
    username: "saurabh",
    price: "999",
    welcomeMessage: function () {
        let a = 2
        console.log(`${this.username},welcome to website`);
        //console.log(this);
    },
}
// user.welcomeMessage()
// user.welcomeMessage()
// user.username="yadav"
//user.obj.print()
//console.log(this);

// function chai(){
//     let username="saurabh"
//     console.log(this.username);
// }
// global.chai=function(){
//     let a=2
//     let name="part of global object"
//     console.log(a);

// }

// function check(){
//     this.chai();
// }
// check()
// method1()
// function method1(){
//     console.log("hi");
// }
// const method2=function(){
//     console.log("hi2");
// }
// method2()
//global.username="saurabh-yadav-iiit-manipur"
// const method3 = function () {
//     let username = "saurabh yadav"
//     console.log(this.username);
// }
// method3()

// const method4=()=>{
//     let username="saurabh"
//     console.log(this);
// }
// method4()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,5));

//if curly braces is used then you have to write return
//const addTwo=(num1,num2)=> num1+num2
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=>({username:"saurabh"})
console.log(addTwo(2,5));