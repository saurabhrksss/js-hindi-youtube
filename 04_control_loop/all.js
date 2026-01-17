//for of


// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     // console.log(num);
// }
// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//Maps

// const map=new Map()
// map.set(`IN`,"INDIA")
// map.set(`USA`,"UNITED STATES OF AMERICA")
// map.set(`IN`,"INDIA(BHARAT)")
// console.log(map);

// for (const [key,value] of map) {
//     console.log(`${key}->${value}`);
// }
// const myObject={
//     "game1" : 'nfs',
//     "game2" : 'spiderman'
// }
// for (const [key,value] of myObject) {
// dont work for objects ---use for in
// }


// const myObject={
//     js:"javascript",
//     cpp:"C++",
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`); 
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(`${key}-${programming[key]}`);
// }

// const map=new Map()
// map.set(`IN`,"INDIA")
// map.set(`USA`,"UNITED STATES OF AMERICA")
// map.set(`IN`,"INDIA(BHARAT)")

// for (const key in map) {
//     console.log(key); 
// }

// const myObject={
//     js:"javascript",
//     cpp:"C++",
//     rb:"ruby",
//     swift:"swift by apple"
// }
// const arrofkey=Object.entries(myObject)
// for (const [key,value] of arrofkey) {
//     console.log(`${key}->${value}`);
// }

/************/
// const coding=["js","ruby","java","python"]
// coding.forEach( function(item){
//     console.log(item);
// } )
// coding.forEach((item)=>{
//     console.log(item);
// } )

// const printMe=(item)=>{
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// const myCoding=[
//     {
//         languageName:"javascipt",
//         languageFilename:"js"
//     },
//     {
//         languageName:"python",
//         languageFilename:"py"
//     }
// ]
// // myCoding.forEach((it)=>{
// //     console.log(it);
// // })
// // for (const element in myCoding) {
// // console.log(myCoding[element]);
// // }
// myCoding.forEach((item,index, )=>{
// console.log(`${item},${index},${arr}`);

// })
//for each dont return anything

/*************************/
// const myCoding=[
//     {
//         languageName:"javascipt",
//         languageFilename:"js"
//     },
//     {
//         languageName:"python",
//         languageFilename:"py"
//     }
// ]
// // myCoding.forEach((element)=>(console.log(element)))
// // console.log(myCoding.forEach((element)=>(console.log(element))));
// const newarr=myCoding.map((element)=>element)
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNums.filter((num)=>{return num>4})
// console.log(newNums);
// console.log(((num)=>num>4)(4));
// console.log(newNums);

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4) newNums.push(num)
// })
// console.log(newNums);



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// const userBooks=books.filter((item)=>{return item.genre==="History"})
// console.log(userBooks);
// const userBooks=books.filter((item)=>{return item.publish>=1999 && item.genre==="History"})
// console.log(userBooks);



// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newNums=myNumber.map((num)=>(num+10))
// // console.log(newNums);

// const newNums=( myNumber.map((num)=>(num*10)) ).map((num)=>num+1).filter(num=>num>40)
// console.log(newNums);

/*************************************************************/
/* REDUCE*/

const nums=[1,2,3,4,5,6]

const sum=nums.reduce((acc,curr)=>{
    // console.log(`${acc} and ${curr}`);
    return acc+curr},0)
console.log(sum);
const max=nums.reduce((max,curr)=>(curr>max?curr:max));
console.log(max);

// Rule for reduce:

// If no initial value is provided:

// acc = first element of array

// curr = second element

// iteration starts from index 1


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const totalprice=shoppingCart.reduce((acc,curr)=>(acc+curr.price),0)
// console.log(totalprice);

// const totalprice=shoppingCart.reduce((acc,curr)=>{
//     return {price:acc.price+curr.price}
// })
// console.log(totalprice); 
