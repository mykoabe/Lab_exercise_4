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
        :'Choose the correct from the choices')
        console.log(Choice)
}());
function addition(){
    var arrayLength = prompt("Please enter the size of numbers you wanna calculate");
    var sum = 0;
    for (i=0; i < arrayLength; i++){
        var x = Number(window.prompt("please enter " + i + "element"))
        sum+=x
 }
    window.Number(alert(sum))
}
// substraction function
function substraction(){
    var first = Number(prompt("enter the first number"))
    var second = Number(prompt("enter the second number"))
    var difference = first -second
    window.Number(alert(difference))
 }
//  for the multiplication
function multiplication(){
    var arrayLength = prompt("please the size of numbers you wanna to calculate");
    var product = 1;
    for (i=0; i < arrayLength; i++){
        var x = Number(window.prompt("please enter " + i + "element"))
        product+=x
 }
    window.Number(alert(product))
}
function Division(){
    var first = Number(prompt("enter the first number"))
    var second = Number(prompt("enter the second number"))
    if (second == 0){
        alert("Division by zero is not possible")
    }else{
        var answer = first / second;
    }
    window.Number(alert(answer))
 }
 function Power(){
     var num = Number(prompt("Enter the number you wanna square"))
     var power = Number(prompt("Enter the power"))
     var answer = Math.pow(num, power)
     window.Number(alert(answer))
 }
 function Average(){
    var arrayLength = prompt("please the size of numbers you wanna to calculate");
    let summ = 0
    let average = 0
    for (i=0; i < arrayLength; i++){
        var x = Number(window.prompt("please enter " + i + "element"))
        summ += x;
        average = summ/arrayLength
   }
    window.Number(alert(average))
}








