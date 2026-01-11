//Dates

// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());///IMP
// console.log(myDate.toDateString())//IMP
// console.log(myDate.toLocaleString());///IMP//
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2002,10,24,22,15,36)
// console.log(myCreatedDate.toLocaleString());

// let newdate=new Date(1970,0,1,5,30,0)
// console.log(newdate.toLocaleString());

// let myTimeStamp=Date.now();
// console.log(myTimeStamp)
// console.log(newdate.getTime())

// console.log(Math.floor(Date.now()/1000))

let datenew=new Date();
// console.log(datenew.toString());
// console.log(datenew.getMonth()+1);
// console.log(datenew.getDate());
// console.log(datenew.getDay());

// console.log(`Date:${datenew.getDate()}`);

let formatted=datenew.toLocaleString(`default`,{
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:'numeric'
});
console.log(formatted);
