// Chapter 1
// Q 1:
// alert("Good Morning");

// Q 2:
// alert("Error! Please enter a valid password.");

// Q 3:
// alert("Welcome to JS Land... \nHappy Coding!");

// Q 4:
// alert("Welcome to JS Land...");
// alert("Happy Coding! \nPrevent this page from creating additional dialogs");

// Q 5:
// alert("Hello... I can run JS through my web browser's console");
// console.log("Hello... I can run JS through my web browser's console");

// Q 6:
// alert("Hellow World");

// Chapter 2
// Q 1:
// var userName = ;

// Q 2:
// var myName = "Hanzala Ahmed"; //string

// Q 3:
// var message = "Hello World";
// alert (message);

// Q 4:
// var name = "Hanzala Ahmed";
// var age = "15 year old";
// var certified = "Certified Mobile Application Development";
// alert (name);
// alert (age);
// alert(certified);

// Q 5:
// var pizza = "Pizza \nPizz \nPiz \nPi \nP";
// alert(pizza);

// Q 6:
// var email = "hanzala.ahmed181@gmail.com";
// alert("My email address is " + email);

// Q 7:
// var book = "A smarter way to learn JavaScript";
// alert ("I am trying to learn from the Book " + book);

// Q 8:
// document.write ("Yah! I can write HTML content through JavaScript");

// Q 9:
// var show = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert (show);
// document.write(show);

// Chapter 3
// Q 1:
// var age = 18 ;
// alert("I am " + age + " years old");

// Q 2:
// var numVisits = 10;
// alert("You have visited this site " + numVisits + " times");

// Q 3:
// var birthYear = 2003;
// document.write("My birth year is " + birthYear + " <br> Data type of my declared variable is number");

// Q 4:
// var visitorName = "<strong> John Doe </strong>";
// var quantity = "<strong> 5 </strong>";
// var productTittle = "<strong> T-shirt</strong>(s) ";
// document.write(visitorName + "ordered " + quantity + productTittle + "on XYZ Clothing Store." );

// Chapter 4
// Q 1:
// var name = "Hanzala Ahmed", age = 18, birthYear = 2003 ;

// Q 2:
// 5 legal variable names
// var name = "";
// var Father_name = ""; //use underscore
// var userName = ""; //camelCase
// var user1 = ""; //you can wirte name with numbers
// var $name = ""; // you can aslo write a name with $ sign

//illegal variable name
// var user name = ""; //can't use any space betwwen a variable name
// var user%name = ""; //can't use any characters except $_
// var username = ""; //use camelCase
// var  1name = ""; //don't start a variable name with number
// var Right = ""; //case sensitive and also variable should not be js keywords

// Q 3:
// document.write ("<h4>Rules for naming JS variables</h4>");
// document.write("<br> Variable names can only contain, numbers, $ and _. For example: $ny_1stVariable");
// document.write("<br> Variable must begin with a letter. $ or _ . For example: $name, _name or name");
// document.write("<br> Variable names are case sensitive");
// document.write("<br> Variable name should not be JS keywords");

// Chapter 5:
// Q 1:
// var a = 3 ;
// var b = 5 ;
// var c = a + b;
// document.write("Sum of 3 and 5 is " + c);

// Q 2: subtraction
// var a = 3 ;
// var b = 5 ;
// var c = a - b;
// document.write("Sub of 3 and 5 is " + c);

// Q 2: Multiplication
// var a = 3 ;
// var b = 5 ;
// var c = a * b;
// document.write("Multiplication of 3 and 5 is " + c);

// Q 2: division
// var a = 3 ;
// var b = 5 ;
// var c = a/b;
// document.write("Division of 3 and 5 is " + c);

// Q 2: Modulus
// var a = 3 ;
// var b = 5 ;
// var c = a % b;
// document.write("Modulus of 3 and 5 is " + c);

// Q 3:
// var a = 5;
// var b = 7;
// var c = ++a + b
// var d = --a + b
// document.write("Value after variable declaration is " + a);
// document.write("<br>Initial value: " + a);
// document.write("<br>Value after increment is: " + ++a);
// document.write("<br>Value after addition is: " + c);
// document.write("<br>Value after decrement is: " + d);
// document.write("<br>The remainder is: " + d%3);

// Q 4:
// var ticketPrice = 600;
// var buyTickets = 5;
// var result = ticketPrice * buyTickets;
// document.write("Total cost to buy 5 tickets to a movie is " + result + "PKR");

// Q 5:
// var a = 4;
// document.write("Table of " + a);
// document.write(" <br> <br> 4 x 1 = " + a*1);
// document.write(" <br> 4 x 2 = " + a*2);
// document.write(" <br> 4 x 3 = " + a*3);
// document.write(" <br> 4 x 4 = " + a*4);
// document.write(" <br> 4 x 5 = " + a*5);
// document.write(" <br> 4 x 6 = " + a*6);
// document.write(" <br> 4 x 7 = " + a*7);
// document.write(" <br> 4 x 8 = " + a*8);
// document.write(" <br> 4 x 9 = " + a*9);
// document.write(" <br> 4 x 10 = " + a*10);

// Q 6:
// var a = 25;
// var b = 70;
// var c = (b -32) * 5/9;
// var f = (a*9/5) + 32;
// document.write (a + "<sup>o</sup>C is " + f + "<sup>o</sup>F <br>");
// document.write (b + "<sup>o</sup>F is " + c + "<sup>o</sup>C");

// Q 7:
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (priceItem1*quantityItem1) + (priceItem2*quantityItem2) + 100;

// document.write("<h1>Shopping Cart</h1>");
// document.write("<br>Price of item 1 is " + priceItem1);
// document.write("<br>Quantity of item 1 is " + quantityItem1);
// document.write("<br>Price of item 2 is " + priceItem2);
// document.write("<br>Quantity of item 2 is " + quantityItem2);
// document.write("<br><br>Total cost of your order is " + totalCost);

// Q 8:
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks/totalMarks)*100;
// document.write("<h1>Marks Sheet</h1>");
// document.write("<br>Total Marks: " + totalMarks);
// document.write("<br>Marks Obtained: " + obtainedMarks);
// document.write("<br>Percentage: " + percentage);

// Q 9:
// var usDollarToPkr = 104.80, saudiRiyalToPkr = 28;
// var usDollar = 10, saudiRiyal = 25;
// var totalcurrency = (usDollarToPkr*usDollar)+(saudiRiyalToPkr*saudiRiyal);
// document.write("<h1> Currency in PKR</h1>")
// document.write("<br>Total Currency in PKR: " + totalcurrency);

// Q 10:
// var a = 4;
// var result = ((a+5)*10)/2 ;
// document.write(result);

// Q 11:
// var currentYear = 2016;
// var birthYear = 1992;
// var age = currentYear-birthYear;
// document.write("<h1>Age Calculator</h1>");
// document.write("<br>Current Year " + currentYear);
// document.write("<br>Birth Year " + birthYear);
// document.write("<br>Your Age is: " + age);

// Q 12:
// var r = 20;
// var pi = 3.142;
// var circumference = (2*pi)*r;
// var area = pi*(r*r);
// document.write("<h1>The Geometrizer</h1>");
// document.write("<br>Radius of a circle is: " + r);
// document.write("<br>The circumference is: " + circumference);
// document.write("<br>The area is: " + area);

// Q 13:
// var favoriteSnack = "Chocolate Chip";
// var currentAge = 15;
// var maxAge = 65;
// var snackPerAge = 3;
// var totalSnack = (maxAge - currentAge) * snackPerAge;
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("<br>Favorite Snack: " + favoriteSnack);
// document.write("<br>Current Age: " + currentAge);
// document.write("<br>Estimated Maximum Age: " + maxAge);
// document.write("<br>Amount of snacks per day: " + snackPerAge);
// document.write(
//   "<br>You will need " +
//     totalSnack +
//     favoriteSnack +
//     " to last you until the ripe old age of " +
//     currentAge
// );

// Chapter 6-9:
// Q 1:
// var a = 10;
// document.write("Result");
// document.write("<br>The value of a is: " + a);
// document.write("<br><br>The value of ++a is: " + ++a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br>The value of a++ is: " + a++);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br>The value of --a is: " + --a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br>The value of a-- is: " + a--);
// document.write("<br>Now the value of a is: " + a);

// Q 2:
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
//            // 1  -  0  +  1  +  1
//            //  3
// document.write("a is: " + a);
// document.write("<br>b is: " + b);
// document.write("<br>result is: " + result);

// Q 3:
// var name = prompt("Enter your name");
// document.write("Good Morning! " + name);

// Q 5:
// var number = parseInt(prompt("Enter a number"));
// document.write(number + "x 1 = " + number*1);
// document.write("<br>" + number + "x 2 = " + number*2);
// document.write("<br>" + number + "x 3 = " + number*3);
// document.write("<br>" + number + "x 4 = " + number*4);
// document.write("<br>" + number + "x 5 = " + number*5);
// document.write("<br>" + number + "x 6 = " + number*6);
// document.write("<br>" + number + "x 7 = " + number*7);
// document.write("<br>" + number + "x 8 = " + number*8);
// document.write("<br>" + number + "x 9 = " + number*9);
// document.write("<br>" + number + "x 10 = " + number*10);

// Q 6:
// var totalMarksOfSubj = 100;
// var firstSubject = prompt("Enter Your First Subject Name");
// var firstSubjectObtainMarks = +prompt("Enter Your First Subject Obtained Marks");
// var firstSubjectpercentage = (firstSubjectObtainMarks / totalMarksOfSubj) * 100;

// var secondSubject = prompt("Enter Your Second Subject Name");
// var secondSubjectObtainMarks = +prompt("Enter Your Second Subject Obtained Marks");
// var secondSubjectpercentage = (secondSubjectObtainMarks/totalMarksOfSubj)*100;

// var thirdSubject = prompt("Enter Your Third Subject Name");
// var thirdSubjectObtainMarks = +prompt("Enter Your Third Subject Obtain Marks");
// var thirdSubjectpercentage = (thirdSubjectObtainMarks/totalMarksOfSubj)*100;

// var totalMarks = 300;
// var totalObtainMarks = firstSubjectObtainMarks + secondSubjectObtainMarks + thirdSubjectObtainMarks;
// var totalPercentgae = (totalObtainMarks / totalMarks) * 100;

// document.write(
//   "<table>" +
//     "<tr>" +
//     "<th>" +
//     "Subject" +
//     "</th>" +
//     "<th>" +
//     " Total Marks" +
//     "</th>" +
//     "<th>" +
//     "Obtained Marks" +
//     "</th>" +
//     "<th>" +
//     "Percentage" +
//     "</th>" +
//     "</tr>" +

//     "<tr>" +
//     "<td>" +
//     firstSubject +
//     "</td>" +
//     "<td>" +
//     totalMarksOfSubj +
//     "</td>" +
//     "<td>" +
//     firstSubjectObtainMarks +
//     "</td>" +
//     "<td>" +
//     firstSubjectpercentage +
//     "</td>" +
//     "</tr>" +

//     "<tr>" +
//     "<td>" +
//     secondSubject +
//     "</td>" +
//     "<td>" +
//     totalMarksOfSubj +
//     "</td>" +
//     "<td>" +
//     secondSubjectObtainMarks +
//     "</td>" +
//     "<td>" +
//     secondSubjectpercentage +
//     "</td>" +
//     "</tr>" +

//     "<tr>" +
//     "<td>" +
//     thirdSubject +
//     "</td>" +
//     "<td>" +
//     totalMarksOfSubj +
//     "</td>" +
//     "<td>" +
//     thirdSubjectObtainMarks +
//     "</td>" +
//     "<td>" +
//     thirdSubjectpercentage +
//     "</td>" +
//     "</tr>" +

//     "<tr>" +
//     "<td>" +
//     " " +
//     "</td>" +
//     "<td>" +
//     totalMarks +
//     "</td>" +
//     "<td>" +
//     totalObtainMarks +
//     "</td>" +
//     "<td>" +
//     totalPercentgae +
//     "</td>" +
//     "</tr>" +
//     "</table>"
// );

// Chater 9-11
// Q 1:
// var city = prompt("Enter your City name");
// if (city === "Karachi"){
//     document.write("Welcome to City Of Lights")
// }
// else {
//     document.write("Welcome to " + city)
// }

// Q 2:
// var gender = prompt("Enter your gender");
// if (gender === "male") {
//     document.write("Good Morning Sir");
// }

// else if (gender === "female") {
//     document.write("good Morning Ma'am");
// }
// else {
//     document.write("Sorry");
// }

// Q 4:
// var remainFuel = parseInt(prompt("Enter remaining fuel in car in litres"));
// if (remainFuel <= 0.25) {
//     document.write("Please refill the fuel in your car");
// }

// else {
//     document.write("Good");
// }

// Q 5: a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// Q 5: b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } //alert message not displayed

// Q 5: c 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// else if (c === 13){
// alert("condition 2 is true");
// } //this alert is correct
// else if (++c < 14){
// alert("condition 3 is true");
// }
// else if(c === 14){
// alert("condition 4 is true");
// }

// Q 5: d 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } //alert is correct

// Q 5: e 
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// Q 5: f 
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     } //alert is true

// Q 7 : 
// var secretNumber = 6;
// var guessNumber = parseInt(prompt("Guess the secret number"));
// if (guessNumber === secretNumber){
//     alert("Bingo! Correct Answer");
// }

// else if (guessNumber === ++secretNumber) {
//     alert("Close enough to the correct answer")
// }

// else {
//     alert("Try Again")
// }

// Q 8:
// var number = parseInt(prompt("Enter the number"));
// if (number % 3 == 0) {
//     alert("Your number is divisible by 3");
// }

// else {
//     alert("Your number is not divisible by 3")
// }

// Q 9:
// var number = parseInt(prompt("Enter a number"));
// if (number % 2 == 0) {
//     alert("The number is even");
// }
// else {
//     alert("The number is odd")
// };

// Q 10:
// var t = parseInt(prompt("Enter Tempreture"));
// if (t > 40) {
//     alert("It is too hot outside");
// }

// else if (t > 30){
//     alert("The Wheather Today is Normal");
// }

// else if (t > 20){
//     alert("Today Weather is Cool");
// }

// else if (t > 10){
//     alert("OMG! Today's Weather is so Cool");
// }

// Q 11:
var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter second number"));
var operators = prompt("Operation (+, -, *, /, %)");

if (operators === "+" ) {
    alert(firstNumber + secondNumber);
}
else if (operators === "-" ) {
    alert(firstNumber - secondNumber);
}
else if (operators === "*" ) {
    alert(firstNumber * secondNumber);
}
else if (operators === "/" ) {
    alert(firstNumber / secondNumber);
}
else if (operators === "%" ) {
    alert(firstNumber % secondNumber);
}