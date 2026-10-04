// Nishant saini sir crazy

// que 1 - done
// const a = 1;
// const b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// que 2 - done

// let a = 10;
// let b = 20;

// console.log("Before Swapping");
// console.log("a = ",a);
// console.log("b = ",b);

// let c = a; // 10
// a = b;    //  20
// b = c;   //   10

// console.log("After Swapping");
// console.log("a =" ,a);
// console.log("b =" ,b);


// que 3 - done

// const maths = 99;
// const science = 90;
// const computer = 100;

// //calculation

// const total = maths + science + computer
// const percentage =  total/300 *100
// average = total/3

// console.log("Total Marks: ", total);
// console.log("Average: ", average);
// console.log(percentage)


// Que 4 - done

// const price = 999;
// const quantity = 5;

// const total = price*quantity;
// const discount = total * 0.10;
// const final = total - discount;

// console.log("Original Bill:",total);
// console.log("Original Bill:",discount);
// console.log("Original Bill:",final);


// que 5 - done

// const length = 10;
// const width  = 15;

// // cal

// const areaofrec = length * width;
// // const periofrec = 2*length + 2*width;
// const periofrec = 2*(length + width);

// console.log("Area of Rectange         : ",areaofrec);
// console.log("Perimiter of Rectange    : ",periofrec);


//                                                  Section 2 - Comparison & Logical Operators

// que 6 - done 

// let n = 0;

// if (n % 2 === 0) {
//     console.log("Number is even");
// } else {
//     console.log("Number is odd");
// }


// que 7 - done

// let n = 0;

// if (n > 0) {
//     console.log("Number is positive");
// } else if (n < 0) {
//     console.log("Number is negative");
// } else {
//     console.log("Number is zero");
// }


// que 8 - done

// n1 = 0;
// n2 = 0;

// if (n1>n2) {
//     console.log("Number 1 is greater than 2 :",n1)
// }
// else if (n1<n2) {
//     console.log("Number 2 is greater than 1 :",n2 )
// }
// else {
//     console.log("Both number are equal")
// }


// que 9 - done

// a = 7;
// b = 10;
// c = 9;

// if ((a>b) && (a>c)) {
//     console.log("A is greatest")
// }
// else if ((b>a) && (b>c)) {
//     console.log("B is greatest")
// }
// else if ((c>b) && (c>a)) {
//     console.log("C is greatest")
// }
// else {
//     console.log("Numberis invalid")
// }


// que 10 - done

// let age = 18;

// if (age >= 18) {
//     console.log("Eligible to vote :", age)
// }
// else {
//     console.log("Not Eligible to vote :", age);
// }


// que 11 - done

// age = 19;
// hasLicense = true;

// const canDrive = age >= 18 && hasLicense === true;
// console.log(canDrive)


// que 12 - done

// let n = 67;

// if ((n >= 10) && (n <= 100)) {
//     console.log("Number is between 10 and 100")
// }
// else {
//     console.log("Number is Not between 10 and 100")
// }


// que 13 - done

// const sp = 85;

// if (sp < 0 || sp > 100) {
//     console.log("Invalid percentage");
// } 
// else if (sp >= 90) {
//     console.log("Grade: A");
// } 
// else if (sp >= 80) {
//     console.log("Grade: B");
// } 
// else if (sp >= 70) {
//     console.log("Grade: C");
// } 
// else if (sp >= 60) {
//     console.log("Grade: D");
// } 
// else if (sp >= 40) {
//     console.log("Grade: E");
// } 
// else {
//     console.log("Grade: F");
// }



// que 14 - done

// const m1 = 40;
// const m2 = 50;
// const m3 = 50;

// if (m1 >= 40 && m2 >= 40 && m3 >= 40) {
//     console.log("Your passed");


// let average = (m3 + m2 + m1) / 3;
//     if (average >= 75) {
//         console.log("Distinction")
//     }
//     else if (average >= 60) {
//         console.log("First Division")
//     }
//     else if (average >= 50) {
//         console.log("Second Division")
//     }
//     else {
//         console.log("Pass")
//     }

// }
// else {
//     console.log("Fail")
// }


// que 15 - done

// const unit = 215; 
// let bill;

// if (unit < 0) {
//     console.log("Invalid units");
// }
// else if (unit <= 100){
//     bill = unit * 5;
// }
// else if (unit <= 200){
//     bill = 100 * 5 + ((unit - 100) * 7);
// }
// else {
//     bill = 
//         (100 * 5) + (100 * 7) + ((unit - 200) * 10);
// }
// if (unit >= 0) {
//     console.log("Bill Charges: ", bill)
// }



// que 16 - done

// let user = "admin";
// let pass = "12345";

// const canLogin = user === "admin" && pass === "12345";

// if (canLogin) {
//     console.log("Login Successfull");
// }

// else {
//     console.log("Invalid username or Password");
// }


// que 17 - done

// let salary = 50000;
// let exper = 10;

// if (exper >= 10) {
//      bonus = salary * 0.20;
// }
// else if (exper >= 5) {
//      bonus = salary * 0.10;
// }
// else if (exper >= 2) {
//    bonus = salary * 0.05;
// }
// else if (exper < 2) {
//     bonus = salary;
// }
// else {
//     console.log("Numbers are invalid")
// }

// console.log("Original Salary: ", salary)
// console.log("Bonus          : ", bonus)
// console.log("Final Salary   : ", salary + bonus)


// que 18 - done

// const age =  17;

// if (age > 0) {
//     if (age <= 12){
//         console.log("Child")
//     }
//     else if (age >= 13 && age <= 19) {
//         console.log("Teenager")
//     }
//     else if (age >= 20 && age <= 59) {
//         console.log("Adult")
//     }
//     else if (age >= 60) {
//         console.log("Senior Citizen")
//     }
// }
// else {
//     console.log("Invalid Number")
// }



// que 19 - done

// const day = "2";

// switch (day) {
//     case "1":
//         console.log("1 --> Monday")
//         break;
//     case "2":
//         console.log("2 --> Tuesday")
//         break;
//     case "3":
//         console.log("3 --> Wednesday")
//         break;
//     case "4":
//         console.log("4 --> Thrusday")
//         break;
//     case "5":
//         console.log("5 --> Friday")
//         break;
//     case "6":
//         console.log("6 --> Saturday")
//         break;
//     case "7":
//         console.log("7 --> Sunday")
//         break;

//         default:
//             console.log("Wrong Day Input")
// }



// que 20 - done

// let n1 = 25;
// let n2 = 5;
// let operator = "/";

// switch (operator) {
//     case "+":
//         console.log(n1 + n2)
//         break;
//     case "-":
//         console.log(n1 - n2)
//         break;
//     case "*":
//         console.log(n1 * n2)
//         break;
//     case "/":
//        if (n2 === 0) {
//         console.log("Cannot divide by zero")
//        }
//        else {
//         console.log(n1 / n2)
//        }
//        break;
//     case "%":
//        if (n2 === 0) {
//         console.log("Cannot Calculate  remainder with zero")
//        }
//        else {
//         console.log(n1 % n2)
//        }
//        break;

//        default:
//         console.log("Invalid operator")
// }


// que 21 - 


// const month = "7";

// switch (month) {
//     case "1":
//         console.log("Januray")
//         break;
//     case "2":
//         console.log("February")
//         break;
//     case "3":
//         console.log("March")
//         break;
//     case "4":
//         console.log("April")
//         break;
//     case "5":
//         console.log("May")
//         break;
//     case "6":
//         console.log("June")
//         break;
//     case "7":
//         console.log("july")
//         break;
//     case "8":
//         console.log("August")
//         break;
//     case "9":
//         console.log("September")
//         break;
//     case "10":
//         console.log("October")
//         break;
//     case "11":
//         console.log("November")
//         break;
//     case "12":
//         console.log("December")
//         break;

//         default:
//             console.log("Invaild Month")
// }


// que 22 - done

// const n1 = 20;
// const n2 = 10;
// const choice = 1 ;

// switch (choice) {
//     case 1:
//         console.log("Addition:", n1 + n2);
//         break;

//     case 2:
//         console.log("Subtraction:", n1 - n2);
//         break;

//     case 3:
//         console.log("Multiplication:", n1 * n2);
//         break;

//     case 4:
//         if (n2 === 0) {
//             console.log("Cannot divide by zero");
//         } else {
//             console.log("Division:", n1 / n2);
//         }
//         break;

//     case 5:
//         if (n2 === 0) {
//             console.log("Cannot calculate modulus with zero");
//         } else {
//             console.log("Modulus:", n1 % n2);
//         }
//         break;

//     default:
//         console.log("Invalid menu choice");
// }


// que 23 - done

// let signalcolor = "yellow";

// switch (signalcolor) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Wait");
//         break;
//     case "green":
//         console.log("Go");
//         break;
// default:
//     console.log("Invalid Signal")
// }



// que 24 - done

// let balance = 11000;
// let withdrawAmount = 4000;

// if (withdrawAmount <= 0) {
//     console.log("Invalid withdrawal amount");
// }
// else if (withdrawAmount > balance) {
//     console.log("Insufficient balance");
// }
// else {
//     balance = balance - withdrawAmount;
//     console.log("Withdrawal successful");
//     console.log("Remaining balance:", balance);
// }


// que 25 - done

// const age = 60;
// const nofticket = 3;

// if (age < 12) {
//     console.log("Total :", nofticket * 100)
// }
// else if (age >= 12 && age <= 59) {
//     console.log("Total :", nofticket * 200)
// }
// else if (age >= 60) {
//     console.log("Total : ", nofticket * 120)
// }
// else {
//     console.log("Invalid Entries")
// }



// que 26 - done

// const choice = 4;
// const quantity = 2;


// switch (choice) {
//     case 1:
//         item = "burger";
//         price = 100;
//         break;
//     case 2:
//         item = "Pizza";
//         price = 150;
//         break;
//     case 3:
//         item = "Pasta";
//         price = 120;
//         break;
//     case 4:
//         item = "Sandwich";
//         price = 80;
//         break;
//         default:
//             console.log("Invalid Choice")
// }

// if (price !== undefined) {
//     const total = price * quantity;
//     console.log(item);
//     console.log("Total", total)
// }


// que 27 - done

// const unit = 410;
// let price;
// let discount;

// if (unit < 0) {
//     console.log("Invalid Units");
// }
// else if (unit <= 100) {
//     price = unit * 5;
// }
// else if (unit <= 200) {
//     price = unit * 7;
// }
// else {
//     price = unit * 10;
// }

// if (unit >= 0) {
//     if (price >= 2000) {
//         discount = price * 0.10;
//     }
//     else {
//         discount = 0;
//     }

//     console.log("Units      :", unit);
//     console.log("Original   :", price);
//     console.log("Discount   :", discount);
//     console.log("Final Bill :", price - discount);
// }


// que 29 - done

// const menu = 3;
// let balance = 21;
// const deposit = 100;
// const withdrawAmount = 1;

// const goodbye = `Good Bye!
// Thanks for visiting.`;

// switch (menu) {
//     case 1:
//         console.log("Current Balance:", balance);
//         break;

//     case 2:
//         balance = balance + deposit;
//         console.log("Deposit:", deposit);
//         console.log("New Balance:", balance);
//         break;

//     case 3:
//         if (withdrawAmount <= 0) {
//             console.log("Invalid withdrawal amount");
//         }
//         else if (withdrawAmount > balance) {
//             console.log("Insufficient balance");
//         }
//         else {
//             balance = balance - withdrawAmount;
//             console.log("Withdraw:", withdrawAmount);
//             console.log("Remaining Balance:", balance);
//         }
//         break;

//     case 4:
//         console.log(goodbye);
//         break;

//     default:
//         console.log("Invalid choice");
// }



// que 29 - done

// const n = 100;

// if (n > 0) {
//     console.log("Positive")
// }
// else if (n < 0) {
//     console.log("Negative")
// }
// else {
//     console.log("Zero")
// }

// if (n % 2 === 0) {
//     console.log("even")
// }
// else {
//     console.log("Odd")
// }

// if (n < 100) {
//     console.log("Less than 100")
// }
// else if (n > 100) {
//      console.log("Greater than 100")
// }
// else if (n == 100) {
//      console.log("Equal than 100")
// }



// // que 30 - done

// const studentName = "Harshit";
// const rollNumber = 21;
// const mathMarks = 100;
// const scienceMarks = 40;
// const englishMarks = 100;

// //cal

// const total = mathMarks + scienceMarks + englishMarks;
// const percent = total / 300 * 100;



// let result;
// // pass or fail 

// if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
//     result = "PASS"
// }
// else {
//     result = "FAIL"
// }

// let grade;
// // grade 
// if (percent >= 90 && percent <= 100) {
//     grade = "A"
// }
// else if (percent >= 80 && percent <= 89) {
//     grade = "B"
// }
// else if (percent >= 70 && percent <= 79) {
//     grade = "C"
// }
// else if (percent >= 60 && percent <= 69) {
//     grade = "D"
// }
// else if (percent >= 40 && percent <= 59) {
//     grade = "E"
// }
// else if (percent < 40) {
//     grade = "F"
// }



// // display

// console.log(`------------------------------------------------------
//                    STUDENT RESULT
// ------------------------------------------------------`)

// console.log("Name          :", studentName);
// console.log("Roll No.      :", rollNumber);

// console.log("Maths         :", mathMarks);
// console.log("Science       :", scienceMarks);
// console.log("English       :", englishMarks);

// console.log("Total         :", total);
// console.log("Percentage    :", percent);
// console.log("Grade         :", grade);
// console.log("Result        :", result);


