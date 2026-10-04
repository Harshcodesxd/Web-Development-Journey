// let student = {
//     name : "Harshit",
//     rollNo : 21,
//     subject : ["Physics", "Chemistry", "Maths", "English", "Computer Science"]
// }

// how to remane a key
// let { subject : padhle ,...hello } = student
// console.log(padhle,hello );

// object merging using spread operator
// let obj1 = {
//     name : "harsh",
//     phone: 4919414141
// }

// let obj2 = {
//     address : "india",
//     adharcard: 1417471481874,
//     name : "naman",
// }

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);

// array and object updation

// const arr = [ 1, 2, 3, 4]

// arr[1] = "Updated"

// console.log(arr);

// const obj = {
//     name : "ksaturi",
//     rollno : 21,
//     address : null

// }

// obj["name"] = "Harshit" // both same methods
// obj.name = "Harshu"     // both same methods

//  delete obj.rollno  // Used for deleting properties

// console.log(obj);

// console.log(obj.address?.street);

let arr = [1, 2, 3, 4, 5, 6];

// arr.splice(0,6); // (start, delete count)
// arr.splice( 2,0 , ["ADD"]) // add
// arr.splice( 2,1 , ["Replace"]) // replace

// let trimArr = arr.slice(0,2);

//  console.log(trimArr);

// console.log(arr.indexOf(7)); // value present nhi h arr m -1 show krta h ye vrna index bta dega uska hoga to

// let res = arr.find((value) => {
//     if(value === 6){
//         return value;
//     }
// });

// console.log(res);

// let resindex = arr.findIndex((value) => {
//     return value === 1 ;
// });

// console.log(resindex);

// flat

// let arr1 = [1, 2, 4, 5, [6, 7, 8, [ 9 ,10 ,11]]]

// console.log(arr1.flat(Infinity)); // flating arr



// Mutability

// let arr4 = [4, 5, 6, 7, 41, 145];

// let arrCopy = arr4;
// let arrCopy2 = [...arr4];

// arrCopy2.pop

// console.log(arrCopy2);


