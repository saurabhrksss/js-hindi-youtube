// var c=300

let a = 3000
if (true) {
  let a = 10
  const b = 20
  // console.log(`INNER-${a}`);
  // console.log("INNER",a);
  //var c=30
}
//console.log(a);
//console.log(b);
// console.log(c);

function one(){
  const username="saurabh"
  function two(){
    const website="youtube"
    console.log(username);
  }
  //console.log(website);
  two()
}

//one()

// if(true)
// {
//   const username="saurabh"
//   if(username==="saurabh"){
//     const website ="youtube"
//     console.log(username+website);
//   }
// }

////+++++++++INTERESTING++++++++////

console.log(addone(5));
function addone(value)
{
  return value+1;
}
//console.log(addtwo(23));
const addtwo=function(value){
  return value+2;
}
console.log(addtwo(23));