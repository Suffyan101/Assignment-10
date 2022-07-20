// Question 1
// function dispalydate(){
//     document.write(Date())
// }

// dispalydate();

// Question 2

// var a = prompt("Please enter your First Name");
// var b = prompt("Please enter your Last Name");

// function greet(){
//     document.write("Welcome "+a+" "+b)
// }
// greet(a,b)

// Question 3

// var a = +prompt("Please enter First Number");
// var b = +prompt("Please enter Second Number");
// var c = a+b
// function Sum(){
//     document.write("The Sum of first and second number is "+ c)
// }
// Sum(a,b)

// Question 4

// var a = +prompt("Please enter First Number");
// var b = +prompt("Please enter Second Number");
// var c = prompt("Please enter operator e.g +,-,/,*")

// function calculator(){
//     if(c === "+"){
//         document.write(a+b)
//     }
//     else if(c==="-"){
//         document.write(a-b)
//     }
//     else if(c==="*"){
//         document.write(a*b)
//     }
//     else if(c==="/"){
//         document.write(a/b)
//     }
//     else{
//         document.write("Entries not correct please retry")
//     }
// }

// calculator(a,b,c)


// Question 5

// var a = +prompt("Please enter the number")

// function square(){
//     document.write(a**a);

// }
// square(a)

// Question 6

// var a = +prompt("Please enter number");
// function factorial(a){
//     var answer = 1
//     if(a === 1 || a=== 0){
//         document.write(answer);
//     }
//     else{
//         for(i = a ; i >= 1 ; i--){
//             answer = answer*i
//         }
//         document.write(answer)
//     }
    
// }

// factorial(a)

// Question 7

// var a = +prompt("Please Enter start number")
// var b = +prompt("Please Enter End number")

// function counting(){
//     for(i=a; i<=b;i++){
//         document.write(i+"<br>")
//     }
// }
// counting(a,b)


// Question 8

// var a = +prompt("Please enter Base Value");
// var b = +prompt("Please enter Perpendicular Value")

// function calculateHypotenuse(){ 
    
//     var c = a + b
//     document.write("Hypotenuse value "+ c +"<br>")
//     function calculateSquare(){
//         var h = a**2 + b**2
//         document.write("Hypotenuse value sqaure is "+ h)
//     }
//     calculateSquare(a,b)

// }
// calculateHypotenuse(a,b)


// Question 9

// var d = 25
// var e = 2
// function rectangular(a,b){
//     return a*b
// }
// var a = rectangular(25,225)
// var f = rectangular(d,e)
// document.write(a+"<br>")
// document.write(f)

// Question 10 

// var a = prompt("Please Enter the word to check its palindrome or not")
// function palindrome(){
//     var b = a.split("").reverse().join("")
//     if (a === b){
//         document.write(a+" Its palindrome")
//     }
//     else{
//         document.write(a+" Its not palindrome")
//     }
// }
// palindrome(a)


// Question 11

// var a =  prompt("Please enter the pharase")

// function uppercase(){
//     var result = a.split(" ").map((value)=>value.slice(0,1).toUpperCase() +
//     value.slice(1)).join(" ")
//     console.log(result)
// } 

// uppercase(a)