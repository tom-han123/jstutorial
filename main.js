const username = "Kyaw Kyaw";
const age = 30;
const balance = 30.5;
const address = "USA";
const issingle = true;
var hobbies = null;


var a = 10;
var b = 20;

// console.log("A + B = "+(a+b));
// console.log(" B- A = " + (b-a));
// console.log("A * B = "+(a*b));
// console.log("B / A = "+(b/a));
// console.log("B / A = "+(b%a));
// a++;
// console.log(a);
// b++;
// console.log(b); 

// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// console.log(!(a==b));
console.log(a);
// a += 20;
// a *= 2;
console.log(a);

console.log(a==b?"a is equal to b":"a is not equal to b");




// if(a < b){
//     console.log("a is smaller than b");
// }else if (a > b){
//     console.log("a is greater than b");
// }else{
//     console.log("a is equal to b");
// }
// const noofleg=2;
// const height = 5;
// const bodyhair = "some";
// if(noofleg==2){
//     if(height>=5){
//         if(bodyhair=="some"){
//             console.log("Human");
//         }else{
//             console.log("Not Human");
//         } 
//     }else{
//         console.log("Not Human");
//     }
// }else {
//     console.log("Not Human");
// }

// if(noofleg==2 && height >=5 && bodyhair=="some"){
//     console.log("Human")
// }else{
//     console.log("Not Human");
// }
// var drink = "";
// if (drink == "cola" || drink == "pespsi" || drink == "speed"){
//     console.log("Buy");
// }else{
//     console.log("Not buy");
// }

// var lightoff = false;
// if(!lightoff){
//     console.log("Join Class")
// }else{

// }


var tday = "wednesday";

// if (tday == "monday"){
//     console.log("Orange");
// }else if(tday == "tuesday"){
//     console.log("Yellow");
// }else if (tday == "wednesday"){
//     console.log("Green");
// }else if(tday == "thursday"){
//     console.log("Red");
// }else if(tday == "friday"){
//     console.log("Blue");
// }else{
    // console.log("No color for that date");
// }



// switch (tday){
//     case "monday":
//         console.log("Orange");
//         break;
//     case "tuesday":
//         console.log("Yellow");
//         break;
//     case "wednesday":
//         console.log("Green");
//         break;
//     case "thursday":
//         console.log("Red");
//         break;
//     case "friday":
//         console.log("Blue");
//         break;
//     default:
//         console.log("Input data is not a day of week.");
//         break;
// }

// var num1 = 1;
// while(num1 <= 100){
//     console.log(num1);
//     num1 = num1 + 1;
// }
// console.log("");
// var num2 = 0;
// while (num2 <= 10){
//     console.log(num2);
//     num2++;
// }

// var istankfull = false;
// while(istankfull){
//     console.log("Filling the gas");
//     istankfull = true;
// }

// for (let i = 1;i<=100; i++){
//     console.log(i);
// }


// var isarrive = false;
// while (!isarrive){
//     console.log("keep going");
//     isarrive = true;
// }


// for (let i = 1; i<=10; i++){
//     if (i%2 == 0){
//         console.log(i + "is even number");
//     }else {
//         console.log(i + "is odd number.");
//     }
// }

// var personlist = [
//     {
//         "name":"kyaw kyaw",
//         "age":30
//     },
//     {
//         "name":"ko ko",
//         "age":25
//     },
//     {
//         "name":"mg mg",
//         "age":28
//     }
// ]

// for (i in personlist){
//     console.log(personlist[i]);
// }

// var fruits = ["apple", "orange", "banana", "pineapple"];
// for (let i = 3 ; i >=0;i--){
//     console.log(fruits[i]);
// }

// var des = "BOC";
var busstoplist = ["A", "B", "C", "D", "BOC", "E", "F"]
// for (i in busstoplist){
//     console.log(busstoplist[i]);
//     if (busstoplist[i] == "BOC"){
//         console.log("Arrive");
//         break;
//     }
// }

for (let bs of busstoplist){
    console.log(bs);
}


// for (let i = 1;i<=10;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }
function addtwonum(num1=0, num2=0){
    console.log(`${num1} + ${num2} = `+(num1+num2))
}

addtwonum(1,2);
addtwonum(3,3);
addtwonum();


function greeting(name="tim"){
    console.log(`Hello I'm ${name}`);
    
}

greeting("Kyaw Kyaw");

// const myage = 20;
// console.log("I am "+myage+" years old.");
// console.log(`I am ${myage} years old.`);

function sayhello(){
    document.write("Hi, how is going?");
}



