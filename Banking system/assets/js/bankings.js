var myData = [];
var myData2 = [];
// the immidiate invoking functions
(function(){
    do{
        var choice = prompt(`please enter from the following
           1. Create Account
           2. another account
           3. Account balance 
           4. withdraw
           5. Transfer to another account
           6. display`);
           if(choice == 1){
             creatFirstAccount();
           }
           else if(choice==2){
            createThesecondAccount();
           }
           else if(choice==3){
            displayAccount();
           }
           else if(choice==4){
            withdraw();
           }
           else if(choice==5){
            transfer();
           }
           else if(choice==6){
            display();
           }
    }while(choice != 0)
}());

// creating the first account

function creatFirstAccount(){
    var accountOwner = prompt("Please insert full name")
    var accountNum =prompt("please enter the acount number")
    var balance = prompt("please enter the balance deposited") 
    myData.push(accountOwner,accountNum,balance)}
function displayAccount(){
    alert(myData)
}
// creating the second account
function createThesecondAccount(){
    var accountOwner = prompt("Please insert full name")
    var accountNum =prompt("please enter the acount number")
    var balance = prompt("please enter the balance deposited") 
    myData2.push(accountOwner,accountNum,balance)
}
function withdraw(){
    let withdrawAmount = prompt("Please insert the Withdraw Amount")
    if (parsFloat(myData[2]) >= 400){
        if(parseFloat(myData[2]) >= parseFloat(withdrawAmount)){
            alert(`You withdraw ${withdrawAmount} and the current balance is ${(myData[2] - withdrawAmount)}`)
            alert("Thanks for banking with us")
            myData[2].push((myData[2] - withdrawAmount))
        }else{
          alert("you can\'t do this operation")
        }
    }else{
        alert("You are at the small amount if it is less than 400 you can't withdraw")
    } 
}
function display(){
    alert(myData2)
}

function transfer(){
    var transferAccunt = prompt("Please insert the account number you wanna transfer")
    if (parseFloat(transferAccunt) === parseFloat(myData2[1])){
        let transferValue = prompt("Please enter the amount you want to transfer")
        if(parseFloat(transferValue) <= myData2[1]){
            myData2[2] = myData2[2] + transferValue
            alert(`You transfered ${transferValue} to ${myData2[1]}
            and ${myData[1]} have a balance of ${(myData[2] - transferValue)}`)
        }
    }else{
        alert("you can't transfer")
    }
}