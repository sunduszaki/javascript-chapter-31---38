//==CHAPTER 31-34==//

//task no 1//

// var date = new Date();
// document.write(date)


//task no 2//
// var months = ["January","Feburary","March","April","May",
// "June","July","August","September","October","November","December"]
// var date = new Date();
// var month = date.getMonth();
// var currentMonth = months[month]
// document.write("Current Month : " + currentMonth )


//task no 3//
// var date = new Date();
// // console.log(date)
// var day=date.toString()
// console.log(day)
// var currentDay = day.slice(0,3)
// document.write("Today is:  " + currentDay )

//task no 4//
// var date = new Date();
// var day = date.toString();
// var currentDay = day.slice(0, 3);
// if (currentDay == "Sat" || currentDay == "Sun") {
//     alert(" It's Fun Day");
// } else {
//     alert("It's Working Day");
// }

//task no 5
// var date = new Date();
// // console.log(date);
// var currentDate = date.getDate();
// console.log(currentDate)
// if(currentDate < 16){
//     document.write("First Fifteen Days of the Month")
// }else{
//     document.write("Last Days of the Month")
// }

//task no 6
// var date = new Date();
// var todayTime = date.getTime();
// var sec = todayTime/(1000*60)

// document.write("Current Date :" + date + "<br/>")
// document.write("Elapsed milisecond since January 1,1970 :" + todayTime + "<br/>")
// document.write("Elapsed minutes since January 1,1970 : " + sec)


//task no 7
// var date = new Date();
// var currentTime = date.getHours();
// if(currentTime < 12 ){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }

//task no 8
// var date = new Date(2020,11,31)
// document.write("Later Date : " + date)

// /task no 9
// var date = new Date("Jun 18 2015")
// var time = date.getTime()

// var currentDate = new Date();
// var currentTime = currentDate.getTime();

// var diff = currentTime - time;
// // document.write(diff)

// var ramadan = diff/(1000*60*60*24);
// document.write(Math.floor(ramadan) + " days have passed since 1st ramadan 2015") 


//task 10
// var date = new Date("Dec 05 2015");
// var mili = date.getTime();

// var date2 = new Date("Jan 01 2015");
// var mili2 = date2.getTime();

// var diff = date - date2;

// var sec = diff / 1000;

// document.write(sec + " seconds have passed since beginning of 2015")

//task no 11
// var date1 = new Date();
// var hours = date1.getHours();
// var date2 = new Date()
// date2.setHours(hours - 1)
// document.write("current date : " + date1 + " 1 hour ago,It was " + date2)

//task no 12
// var date = new Date();
// var year = date.getFullYear();
// var date2 = new Date();
// date2.setFullYear(year - 100)
// document.write("current date : " + date + " 100 years back,It was " + date2)

//task no 13
// var dob = new Date(prompt("Enter your dob"));
// var today = new Date();
// var dobTime = dob.getTime();
// var year = dob.getFullYear();
// console.log(year)
// var todayTime = today.getTime();
// console.log(dob);
// console.log(today);
// accAge = todayTime-dobTime
// age=((accAge)/(1000*60*60*24*30*12));
// age = Math.floor(age);
// console.log(age)

// document.write("Your age is " + age + "<br/>")
// document.write("Your birth year is " + year)

// var dob = +prompt("Enter your dob");
// var date = new Date();
// date.setFullYear(date.getFullYear()-dob);
// document.write("Your age is " + dob + "<br/>")
// document.write("Your birth year is " + date.getFullYear())





//task no 14
// var name = prompt("What is your name?");
// document.write("Customer name : " + name + "<br/>")
// var date = new Date();
// var months = ["January", "Feburary", "March", "April", "May",
//     "June", "July", "August", "September", "October", "November", "December"]
// var month = date.getMonth();
// var currentMonth = months[month]
// document.write("Month: " + currentMonth + "<br/>")
// var units = 410
// document.write("Numbers of units: " + units + "<br/>");
// var charges = 16
// document.write("Charges per unit:" + charges + "<br/>")
// var netAmount = units * charges
// document.write("Net Amount Payable (within due date): " + netAmount + "<br/>");
// var late = 350
// document.write("Late payment surcharge: " + late + "<br/>");
// var grossAmount = netAmount + late;
// document.write("Gross Amount Payable (after Due Date): " + grossAmount)










//==COMPLETED==//


//===CHAPTER 35- 38==//

//task no 1//
// function date(){
//     var date = new Date();
//     document.write(date)
// }
// date();

// function greeting(){
//   var fisrt = prompt("Enter your fisrt name");
//   var last = prompt("Enter your last name");
//   alert("Hello" + " " +  fisrt + " " + last)
// }
// greeting();

// function add(){
//     var fisrt = +prompt("Enter your fisrt num");
//     var second = +prompt("Enter your second num");
//     var add = fisrt + second;
//     alert(add)
//   }
//   add();

//task no 4
// function calc(num1,sign,num2){
//     if(sign == "+"){
//         sum = num1 + num2
//         return sum
//     }if (sign == "-"){
//         sub = num1 - num2
//         return sub
//     }else if(sign == "*"){
//         multi = num1*num2
//         return multi
//     }else{
//         return "wrong"
//     }
// }
// var result = calc(8,"+",6);
// var result2 = calc(8,"-",6);
// var result3 = calc(8,"*",6);
// var result4 = calc(8,"/",6);
// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);


//task no 5
// function sq(num){
//     alert(num * num)
// }

// sq(5);

//task no 6
// function fac(num) {
//     var factorial = 1;

//     for (var i = num; i >= 1; i--) {
//         factorial = factorial * i;
//         console.log(i)
//     }
//     document.write(factorial)
// }

// fac(5);
// function coun(){
//     var count1 = +prompt("Enter fisrt num")
//     var count2 = +prompt("enter second num")
//     for(var i = count1; i < count2;i++){
//         document.write(i + "<br/>")
//     }
// }
// coun();

//task no 8
// function hyp(){
//     var base= +prompt("Enter the value of base");
//     var prependicular = +prompt("Enter the value of prependicular")
//     var squ1 = (base*base);
//     var sq2 = (prependicular*prependicular);
//     var hypotenuse = squ1 + sq2
//     var hyp2 =(hypotenuse*hypotenuse);
//       alert(hyp2)
// }

// hyp();

//task n0 9//

// function area(widht, height) {

//     var a = widht * height
//     alert("area of the rectangle " + a)
// }

// area(10, 5);

// function area(width,height){
//     var a = width * height
//     alert("area of the rectangle " + a)
// }
// var width = +prompt("Enter the width");
// var height = +prompt("Enter the height");
// area(width,height);


//task no 10
// var name = prompt("Enter any input?");
// function check() {
//     var nameReverse = "";
//     for (var i = name.length - 1; i >= 0; i--) {

//         // console.log(name[i])
//         nameReverse += name[i]
//         console.log(nameReverse)

//     }

//    console.log(nameReverse)
//    if(nameReverse == name){
//        document.write( name + " is a palindrome word")
//    }else{
//        document.write( name + " is not a palindrome word")
//    } 
// }
// check();

//task no 11
// function upper(sentence) {
//     console.log(sentence)
//     var senSplit = sentence.split(" ")
//     var upperCase = []
//     for (var i = 0; i < senSplit.length; i++) {
//         var capital = senSplit[i][0]
//         upperCase[i] = capital.toUpperCase() + senSplit[i].slice(1)
//     }
//     console.log(upperCase)
//     var joinSen = upperCase.join(" ")
//     console.log(joinSen)
// }
// upper("the quick brown fox");

//task no 12
// function word(sentence) {
//     var senSplit = sentence.split(" ")
//     var longest = 0;
//     var word = "";
//     for (var i = 0; i < senSplit.length; i++) {
//         if (senSplit[i].length > longest) {
//             longest = senSplit[i].length;
//             word = senSplit[i]
//         }
//     }

//     document.write(word)
// }
// word("Web Development Tutorial");

//task no 13//
// function count(sentence, letter) {
//     var count = 0;
//     for (var i = 0; i < sentence.length; i++) {
//         if (sentence[i] == letter) {
//             count++
//         }
//     }
//     document.write(letter + " is found " + count + " times")
// }
// count("JSResourceS.com", "o");


//task no 14
// function calCircumference(radius){
//    var circle = 2 * 3.14 * radius
//    document.write("The circumference is " + circle.toFixed(3))
// }
// calCircumference(5);


// function calcArea(radius){
// var area = 3.14 * radius * radius
// document.write("The area is " + area)
// }
// calcArea(5);



//==FINISHED==//