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

var a = +prompt("Please enter number");
function factorialnumber() {
    let answer = 1
    if (a == 0 || a == 1) {
        document.write(answer)
    }
    else {
        for (i = a; i >= 1; i--) {
            answer = answer*i

        }
        return answer;
    }
}

factorialnumber(a)
document.write(answer)
