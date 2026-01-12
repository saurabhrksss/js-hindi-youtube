// const tinderUser=new Object();
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="saurabh"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"saurabh@gmail.com",
    fullname:  {
        userfullname:{
            firstname:"saurabh",
            lastname:"yadav"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",3:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3);

const obj=Object.assign({},obj1,obj2);//obj1 remains unchanged and new object is returned
// console.log(obj);

// Object.assign(obj1,obj2);//this changes in obj1
// console.log(obj1);

const objans={...obj1,...obj2}
// console.log(objans);

const users=[
    {
        id:1,
        email:"xyz@gmail.com"
    },
    {
        id:2,
        email:"abc@gmail.com"
    },
]

console.log(users[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"saurabh"
}

// const {courseInstructor}=course
// console.log(courseInstructor); 

const {courseInstructor:Instructor}=course
console.log(Instructor);

// {
//     "name":"saurabh",
//     "coursename":"js in hindi",
//     "prince":"free"
// }
// [
//     {},
//     {},
//     {}
// ]
