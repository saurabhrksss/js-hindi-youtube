const name="saurabh"
const repoCount=50

console.log(name+repoCount+"Value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const newname=new String(`saurabh`)
// console.log(newname[0]);
// console.log(newname.__proto__);// run this in browser console youll see a list of prototype defined for newname
// console.log(newname);
// console.log(newname.length);
// console.log(newname.toUpperCase());
// console.log(newname.charAt(2));
// console.log(newname.indexOf('a'));

const newString =newname.substring(-6,5);
console.log(newString);

const anotherString=newname.slice(-6,5);
console.log(anotherString);

const newStringOne="    saurabh   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url="https://saurabh.com/saurabh%20yadav"
console.log(url.replace('%20','-'));

console.log(url.includes('saura'));
console.log(url.includes('sauray'));

const exampleStr=new String("saurabh yadav iiitm 220101016")

console.log(exampleStr.split(' '));
console.log(exampleStr.split());
console.log(exampleStr.split(''));


console.log(newname.substring(4,2));
console.log(newname.substr(-4,2))
