// JAVASCIPT IS CASE SENSIVITE
//                                                         Arithemetic operators

const { Egg, Sun } = require("lucide-react");
const { flushSync } = require("react-dom");

// let num1 = 2;
// let num2 = 4;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num1);
// console.log(num1 ** num2);

/* num++ --> num = num+1 (inshort) */
// eq.
// let num = 49
//   console.log(++num) // 50 -> pre increment
// console.log(num++); // 50 -> future increment
// console.log(num);  //  51 -> printed value 
// num = num-1
// console.log(--num); // 48 -> pre decrinment
// console.log(num--); // 48 -> future decrinment
// console.log(num);  //  47 -> printed value



//           Assignment Operators

// let num = 2;
// num += 5;
// console.log(num)
// num -= 5;
// console.log(num)
// num *= 5;
// console.log(num)
// num /= 5;
// console.log(num)
// num **= 5;
// console.log(num)


//            Comparison Operators -> always return boolean

// > Greater Than
// <   Less Than
// >=  Greater Than or equal
// <=  Less than or equal
// ==  loose equality
// === strict equality
// !   not equaly too


// const num1 = 3;
// const num2 = 6;

// console.log( 3 > 6);
// console.log( 3 < 6);
// console.log( 3 >= 6);
// console.log( 3 <= 6);
// console.log( 3 == 6);
// console.log( 3 != 6);



//            Loose equality (==) - type check nhi krta

// console.log("5" == 5); // true

//           Strict equality (===) - always checks type | type must be same | we use always triple

// console.log("5" === 5); // false
// console.log(5 === 5); // true




//            Logical Operator 

// && -> And -> dono value true honi chahiye true k liye otherwise false
// || -> Or  -> ek bhi true hoga to chalega
// !  -> Not -> opposite krdo


// console.log(true && false); // false
// console.log(true || false); // true

// Eg for && if only both things match than true
// const age = 17;
// const hasId = true;

// const canEnterClub = age >= 18 && hasId === true;
// console.log(canEnterClub);


//   ! eq->

// console.log(!0); // false original 0 = true but reversed then false



//            If and Else


// const isLoggedIn = true
// if (isLoggedIn) {
// console.log("You can like, comment");

// }
// else {
// console.log("Please login first");
// }

// let temp = 23

// if (temp >= 25) {
// console.log("ac chalo jaldi");
// }
// else {
//     console.log("Ac mt chalo");
// }


// eq
// let day = "fri";

// if (day === "mon") {
// console.log("1st Day of the week")
// }
// else if (day === "tue") {
// console.log("2nd Day of the week")
// }
// else if (day === "wed") {
// console.log("3rd Day of the week")
// }
// else if (day === "thru") {
// console.log("4th Day of the week")
// }
// else if (day === "fri") {
// console.log("5th Day of the week")
// }
// else if (day === "sat") {
// console.log("6th Day of the week")
// }
// else if (day === "sun") {
// console.log("7th Day of the week")
// }
// else {
//     console.log("wrong day")
// }



// Nested if else jio hotstar

// const isLoggedIn = true;
// const isSubscribed = true;

// if (isLoggedIn) {
//     if(isSubscribed) {
//         console.log("Hi! you can access premium content")
//     }
//     else {
//         console.log("You dont have subscribed Yet, Please Subscribe")
//     }
// }
// else {
//     console.log("Please Login")
// }




// switch case

const day = "tue";

switch (day) {
    case "mon":
        console.log("1st day of the week")
        break;
    case "tue":
        console.log("2nd day of the week")
        break;
    case "wed":
        console.log("3rd day of the week")
        break;
    case "thru":
        console.log("4th day of the week")
        break;
    case "fri":
        console.log("5th day of the week")
        break;
    case "sat":
        console.log("6th day of the week")
        break;
    case "sun":
        console.log("7th day of the week")
        break;

    default:
        console.log("Wrong day")

}