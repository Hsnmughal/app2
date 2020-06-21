// STRING METHODS 
// QS NO 1
var firstName = prompt("First Name");
var lastName = prompt("Last Name");
alert("HELLO! " + firstName + lastName);
// QS NO 2
var mobile = prompt("Enter your favourite Mobile");
document.write("Length of string : " + mobile.length);
document.write("<br>");
document.write("<br>");
// QS NO 3
var nationality = "Pakistani";
document.write("index of N : " + nationality.indexOf("n"));
document.write("<br>");
document.write("<br>");
// QS NO 4
var string = "Hello World”";
document.write("Last index of L : " + string.lastIndexOf("l"));
document.write("<br>");
document.write("<br>");
// QS NO 5
var character = "Pakistani";
document.write("Character at index 3 : " + character.charAt(3));
document.write("<br>");
document.write("<br>");
// QS NO 6
var firstName = prompt("First Name");
var lastName = prompt("Last Name");
document.write(firstName.concat(" " + lastName));
document.write("<br>");
document.write("<br>");
// QS NO 7
var city = "Hyderabad";
document.write("CITY : " + city + "<br>" + "After Replacement : " + city.replace("Hyder","Islam"));
document.write("<br>");
document.write("<br>");
// QS NO 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message.replace(/and/g,"&"));
document.write("<br>");
document.write("<br>");
// QS NO 9
var num = "472";
document.write("Value : " + num + "<br>" + "Type : " + typeof(num) + "<br>");
var convert = Number(num);
document.write("Value : " + convert + "<br>" + "Type : " + typeof(convert));
document.write("<br>");
document.write("<br>");
// QS NO 10
var input = prompt("Input smth");
document.write("User Input : " + input + "<br>");
document.write("Upper Case : " + input.toUpperCase());
document.write("<br>");
document.write("<br>");
// QS NO 11
var _input = prompt("Input smth");
document.write("User Input : " + _input + "<br>");
var first = _input.slice(0,1);
var upper = first.toUpperCase();
var rest = _input.slice(1);
document.write("Title Case : " + upper + rest);
document.write("<br>");
document.write("<br>");
// QS NO 12
var num = 35.36;
document.write("Number : " + num + "<br>");
document.write("Result : " + num * 100);
document.write("<br>");
document.write("<br>");
// QS NO 13

// QS NO 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter Product of Bakery");
search = search.toLowerCase();
for (var i = 0 ; i < A.length ; i++) {
    if (A[i] === search) {
        alert(A[i] + " is AVAILABLE at index " + i + " in our Bakery");
        break
    }
}
else if (sea){
    alert("Sorry! " + search + " is NOT AVAILABLE in our Bakery");
    break
}
// QS NO 15


// QS NO 16
var university = "University of Karachi";
for (var i = 0; i < university.length; i++) {
    document.write(university[i] + "<br>");
}
document.write("<br>");
document.write("<br>");
// QS NO 17
var uInput = prompt("Enter a Word");
document.write("User input : " + uInput + "<br>");
var lasChar = uInput.charAt(uInput.length -1);
document.write("Last Character : " + lasChar)
document.write("<br>");
document.write("<br>");
// QS NO 18
var txt = "The quick brown fox jumps over the lazy dog";
var n = 0;
for (var i = 0 ; i < txt.length ; i++) {
    if (txt.slice(i,i + 3) === "the" || txt.slice(i,i + 3) === "The") {
        n += 1;
    }
}
document.write("There are " + n + " Occurences of word 'the'.");
document.write("<br>");
document.write("<br>");
                                    MATH METHODS 
// QS NO 1
var number = prompt("Enter a NUMBER");
document.write("Number : " + number);
document.write("Rounded off value : " + Math.round(number) + "<br>");
document.write("Floor Value : " + Math.floor(number) + "<br>");
document.write("Ceil Value : " + Math.ceil(number) + "<br>");
document.write("<br>");
document.write("<br>");
// QS NO 2
var number = prompt("Enter a Negitive NUMBER");
document.write("Number : " + number);
document.write("Rounded off value : " + Math.round(number) + "<br>");
document.write("Floor Value : " + Math.floor(number) + "<br>");
document.write("Ceil Value : " + Math.ceil(number) + "<br>");
document.write("<br>");
document.write("<br>");
// QS NO 3
var _num = prompt("Enter a Number to Convert it to a Absolute Value");
document.write(Math.abs(_num));
document.write("<br>");
document.write("<br>");
// QS NO 4
var dice = Math.random();
var mul = (dice * 6) + 1;
document.write("Random Dice Value : " + Math.floor(mul));
document.write("<br>");
document.write("<br>");
// QS NO 5
var toss = Math.random();
var _mul = (toss * 2) + 1;
$mul = Math.floor(_mul);
if ($mul === 1) {
    document.write("Random Coin Value : TAILS");
}
else{
    document.write("Random Coin Value : HEADS");
}
document.write("<br>");
document.write("<br>");
// QS NO 6
var randomm = Math.random();
var _random = (randomm *100) + 1;
document.write("Random Number Between 1 till 100 : " + Math.floor(_random));
document.write("<br>");
document.write("<br>");
// QS NO 7
var weight = prompt("Enter Your Weight in kilograms");
weight = parseInt(weight);
document.write("The Weight Of User is " + weight + " Kilograms");
document.write("<br>");
document.write("<br>");
// QS NO 8
var secret = 7;
var guess = prompt("Enter Your guess form 1 till 10");
if (guess == secret && guess <= 10) {
    alert("Congratulations! Nice Guess.");
}
else{
    alert("Try Again!");
}
                                    DATE METHODS
// QS NO 1
var date = new Date();
document.write(date);
document.write("<br>");
document.write("<br>");
// QS NO 2
var _date = new Date();
$date = _date.toString();
document.write("Current Month : " + $date.slice(4,8));
document.write("<br>");
document.write("<br>");
// QS NO 3
var _date = new Date();
_date = _date.toString();
document.write("Current Day : " + _date.slice(0,3));
document.write("<br>");
document.write("<br>");
// QS NO 4
var $date = new Date();
$date = $date.toString();
if ($date.slice(0,3) == "Sun" || $date.slice(0,3) == "Sat"){
    alert("It's Fun Day!");
}
document.write("<br>");
document.write("<br>");
// QS NO 5
var _date1 = new Date();
var _date1 = _date1.getDate();
if (_date1 < 16) {
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month");
}
document.write("<br>");
document.write("<br>");
// QS NO 6
var _date2 = new Date();
document.write("Current Time : " + _date2 + "<br>");
var time = _date2.getTime();
document.write("Elapsed Miliseconds since January 1st 1970 : " + time + "<br>");
var minutes = time/120;
document.write("Elapsed Minutes since January 1st 1970 : " + minutes + "<br>");
document.write("<br>");
document.write("<br>");
// QS NO 7
var date3 = new Date();
var hours = date3.getHours();
if (hours > 0 && hours < 12) {
    alert("It's AM");
}  
else{
    alert("It's PM");
}
document.write("<br>");
document.write("<br>");
// QS NO 8
var date4 = new Date("December 31, 2020");
document.write("Later Date : " + date4);
document.write("<br>");
document.write("<br>");
// QS NO 9
var date5 = new Date("April 25, 2020");
var msec1 = date5.getTime(); 
var date6 = new Date();
var msec2 = date6.getTime(); 
var date7 = msec2 - msec1;
var date8 = Math.floor(date7 / (1000 * 60 * 60 * 24));
document.write(date8 + " Days Have passed since 1st Ramadan 2020");
document.write("<br>");
document.write("<br>");
// QS NO 10
var _date3 = new Date("December 5, 2015"); 
$date3 = _date3.getTime();
var _date4 = new Date("January 1, 2015"); 
$date4 = _date4.getTime();
var _date5 = $date3 - $date4;
_date5 = _date5 / 1000;
document.write("On reference Date " + _date3 + " " + _date5 + " seconds have passed since begining of 2015");
document.write("<br>");
document.write("<br>");
// QS NO 11
var date9 = new Date();
document.write("Current Date : " + date9 + "<br>");
var string2 = date9.toString();
var hour1 = date9.getHours();
hour1 = hour1 -1;
document.write("1 Hour ago it was ," + string2.slice(0, 16) + hour1 + string2.slice(18))
document.write("<br>");
document.write("<br>");
// QS NO 12
var date10 = new Date();
document.write("Current Date : " + date10 + "<br>");
var string2 = date10.toString();
var years1 = date10.getFullYear();
years1 = years1 - 100;
document.write("100 Years ago it was ," + string2.slice(0, 8) + years1 + string2.slice(15))
document.write("<br>");
document.write("<br>");
// QS NO 13
var age1 = prompt("Enter Your Age");
document.write("Your Age is " + age1 + "<br>");
var date11 = new Date();
date11 = date11.getFullYear();
var date12 = date11 - age1;
document.write("Your Birth Year is " + date12);
document.write("<br>");
document.write("<br>");
// QS NO 14
document.write("<h3>K-Electric Bill</h3>");
var customerName = prompt('Enter your name');
var month = prompt('Enter the month');
var units = +prompt('Enter the units');
var charges = 16;
var latePay = 350;
var netAmount = unit * charges;
var conversion = netAmount.toFixed(2);
var grossAmount = netAmount + latePay;
var conversion1 = grossAmount.toFixed(2);
document.write('Customer Name: '+ customerName+'<br>'+'Month: '+ month +'<br>'+ 'Number of units: '+ units +'<br>'+'Charges per unit: '+ charges +'<br>'+'<br>'+'Net Amount Payable(within Due Date): '+ conversion + '<br>'+'Late payment surcharges: '+ latePay +'<br>'+'Gross Amount Payable (After Due Date): '+ conversion1 +'<br>'+'<br>');













