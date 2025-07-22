///DATE///
const myDate = new Date()
console.log(myDate.toString());


console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleString());

console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,14,6,4)
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getDate()+ 1);

newDate.toLocaleString('default',{
    weekday : "short"
})



let car1 = "civic"
let car3 = "civic"
let car2 = "civic"

console.log([typeof "car1","car2",car3])

const cars = new Array("car1","car1","car1")
console.log(cars);
