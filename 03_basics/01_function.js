function saymyname() {
    console.log("hi");
    console.log("ho are you");
}
//saymyname()
// function addTwoNumbers(number1,number2)
// {
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2) {
    // let result=number1+number2
    // return result
    return number1+number2
}
const result=addTwoNumbers(5,6)

// console.log(`Result:${result}`);

function loginUserMessage(username="yadav")
{
    //username===undefined
    if(!username){
    console.log("Please enter the username");
    return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("saurabh"));
// console.log(loginUserMessage(null));
// console.log(loginUserMessage(undefined));

function calculateCartPrice(val1, val2 ,...num1)//rest operator
{
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"saurabh",
    prices:199
}

function handleObject(anyobject){
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({username:"sa",price:23})

const myNerArray=[200,300,400,100]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNerArray));
console.log(returnSecondValue([2,14]));

