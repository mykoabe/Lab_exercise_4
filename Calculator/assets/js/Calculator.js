
let TheChoice = prompt(`

                Please enter your choice from the following functions
                        ===========================

                        1. Addition of Two numbers
                        2. Substraction of Two numbers
                        3. Product of Two numbers
                        4. division of Two numbers
                        5. Power of Two numbers
                        `)
if(TheChoice == 1){
    var first = Number(prompt("enter the first number"))
    var second = Number(prompt("enter the second number"))
    function addition(){ 
        var summ = first + second;
        return summ
    }
    Number(alert(addition()))
}
else if(TheChoice == 2){
    var first = Number(prompt("enter the first number"))
    var second = Number(prompt("enter the second number"))
    function Substraction(){ 
        var answer = first - second;
        return answer
    }
    Number(alert(Substraction()))
}
else if(TheChoice == 3){
    var first = Number(prompt("enter the first number"))
    var second = Number(prompt("enter the second number"))
    function Product(){ 
        var answer = first * second;
        return answer
    }
    Number(alert(Product()))
}
else if(TheChoice == 4){
    var first = Number(prompt("enter the first number"))
    var second = Number(prompt("enter the second number"))
    function Division(){ 
        if (second == 0){
            alert("Division by zero is not possible")
        }else{
            var answer = first / value;
        }
        return answer
    }
    Number(alert(Division()))
}
else if(TheChoice == 5){
    var first = Number(prompt("enter the first number"))
    var second = Number(prompt("enter the second number"))
    function power(){ 
        var answer = first ** second;
        return answer
    }
    Number(alert(power()))
}


