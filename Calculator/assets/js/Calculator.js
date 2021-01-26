(function(){
    let TheChoice = prompt(`
                Please enter your choice from the following functions
                        ===========================
                        1. Addition of numbers
                        2. Substraction of two numbers
                        3. Product of numbers
                        4. division of two numbers
                        5. Power of Two numbers
                        6. average of two numbers
                        7. maximum of the two numbers
                        8. minimum the two numbers
                        `);
        // using the teranary operator.
        var Choice = (
            (TheChoice == 1)? addition()
            :(TheChoice==2)? substraction()
            :(TheChoice==3)? multiplication()
            :(TheChoice==4)? Division()
            :(TheChoice==5)? Power()
            :(TheChoice==6)? Average()
            :(TheChoice==7)? maximum()
            :'Choose the correct from the choices')
            console.log(Choice) 
}());


// for addition of the number
function addition(){
    var arrayLength = prompt("Please enter the size of numbers you wanna calculate");
    if (!parseInt(arrayLength)){
        alert("Please insert the Number not text ")}
    var sum = 0;
    for (i=0; i < arrayLength; i++){
        var x =window.prompt("please enter " + (i + 1) + " " + "element")
        sum+=parseInt(x)}
    window.alert(sum)
}

// substraction function
function substraction(){
    var first = Number(prompt("enter the first number"))
    var second = Number(prompt("enter the second number"))
    let difference = (!parseInt(first) && !parseInt(second))? alert("please insert the number")
    : alert(`The difference between ${first} and ${second} is : ` + (parseInt(first) - parseInt(second)))
    alert(difference)
 }
//  for the multiplication
function multiplication(){
    var arrayLength = prompt("Please enter the size of numbers you wanna calculate");
    if (!parseInt(arrayLength)){
        alert("Please insert the Number not text ")}
    var sum = 0;
    for (i=0; i < arrayLength; i++){
        var x =window.prompt("please enter " + (i + 1) + " " + "element")
        sum*=parseInt(x)}
    window.alert(sum)
}
// Division of the numbers here I have seen how to use parse float instead of parsint
function Division(){
    var first = prompt("enter the first number");
    var second = prompt("enter the second number");
    if (!parseFloat(first) && (!parseFloat(second))){
       alert("you must insert the correct number")}
    else if (parseFloat( second) == 0){
        alert("Division by zero is not possible")
    }else{
        var answer = parseFloat(first)/ parseFloat( second);
    }
    window.alert(parseFloat(answer))
 }
//  the power function
 function Power(){
    var num = prompt("Enter the number you wanna square")
    var power = prompt("Enter the power")
    var answer = (!parseFloat(num) && parseFloat(power))? alert("Please insert Number")
     : alert(`The power of ${num} to ${power} is = ` + Math.pow(num,power));
     alert(answer)
 }
//  the average function
 function Average(){
    var arrayLength = prompt("please the size of numbers you wanna to calculate");
    let summ = 0
    let average = 0
    for (i=0; i < arrayLength; i++){
        var x = Number(window.prompt("please enter " + i + " element"))
        summ += x;
        average = summ/arrayLength
   }
    window.Number(alert("The average of the numbers is: " + average))
}

function maximum(){
    var first = prompt("enter the first number")
    var second = prompt("please enter the second number")
    var max = (first>second)? first : second;
    alert("The maximum is " + max)
}








