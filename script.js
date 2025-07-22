// let,var,const
const accountId = 12235
let accoountEmail = "shagi@google.com"
var accountPassword = "7654e"
accountCity = "Multan"
let accountState;



// accountId = "2" not allowed//

accoountEmail = "shahzaib@.com"
accountPassword = "888888"
accountCity = "lahore"

console.log(accountId);

//  prefer not to use var
//  because of issue in block scope and functional scope


console.table([accountId,accoountEmail, accountPassword, accountCity, accountState])
 

// datatype and ECMA 
 "use strict"  //treat all js code as new version

// alert(3+3) // we are using node js, not browser


let name = "shahzaib" //string type
let age = "17" // number type
let isLoggedIn = false   // boolean type


// number = 2 to power 53
// bigint  use to big number
// string = ""
// boolean = true/false
// null = standa lone  value // representation to empty value
// undefined
// symbol // unique


// object


console.log(typeof undefined); // type undefined
console.log(typeof null);  // type object


//datatype conversion confusion
let score = 33
//let score = null
//let score = undefined
//let score = true/false


console.log(typeof score);

console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" = "33"
// "22abg" nan
// true = 1, false = 0

let IsLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 = true , 0 = faslse
// "" = false
// "shagi" true




//operations//

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "3");

console.log(null>0);
console.log(null>=0);
console.log(undefined== 0);


console.log(typeof bigNumber);


let myYoutube = "shagi"
let anothername = myYoutube
anothername = "shahzaib"

console.log(myYoutube);
console.log(anothername);

let userOne = {
    email : "user@google.com"
    // Gender = "male"
}
let userTwo = userOne
userTwo.email = "shahzaib.com"

console.log(userTwo);
console.log(userOne);
  


let myName = "khalid"
let anotherName = myName
anothername = "shahzaib"

console.log(anotherName);
console.log(myName);


let userthree = {
    email : "shagi.com"
}
let userFour = userOne
userTwo.email = "shahzaib.com"


console.log(userFour);
console.log(userthree);

const accountId = "124345"
let accoountEmail = "son.com"
let accountPassword = "88888"
accountState ;

console.table([accountId,accoountEmail,accountPassword,accountState])






