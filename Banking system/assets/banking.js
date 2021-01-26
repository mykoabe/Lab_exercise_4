(function(){
    let banckAccount =  {
        accountOwner: " ",
        accountNum: " ",
        accountBalance: " ",
        createAcount: function () {
            var accountOwner = prompt("Please insert full name")
            var accountNum =prompt("please enter the acount number")
            var balance = prompt("please enter the balance deposited")
            this.accountOwner = accountOwner
            this.accountNum = accountNum
            this.balance = balance
            alert(`you have created account successfuly
            with full_name = ${this.accountOwner}
            and accountNumber ${this.accountNum}`)
        },  
        balance: function(){
            alert(this.accountBalance)
        },
        // for withdraw amount
        withdrawAmount: function (){
        var withdrawAmount = prompt("Tell me the amount you wanna to withdraw")
        var withdraw = (parseFloat(this.accountBalance) >= parseFloat(withdrawAmount))? alert(`You withdraw ${withdrawAmount} and your current balance is ${parseFloat(this.accountBalance) - parseFloat(withdrawAmount)}`)
        : alert('You can\'t do this operation')
        alert(withdraw)
        },
        // for the transfer amount
        Transfer: function(){
            let accountNumber = prompt("Please enter the account number you wanna transfer")
            let transferValue = Number(prompt("Enter the amount to transfer"))
            let transaction = ((transferValue <= this.accountBalance)? alert(`You transferd to account number ${transferValue} to ${accountNumber}`)
            : "Please enter the valid value")
            alert(transaction)
        }
    }
    do{
        var choice = prompt(`please enter from the following
           1. Create Account
           2. Withdraw money
           3. your current 
           4. Transfer To another account`)
           if(choice == 1){
            banckAccount.createAcount();
           }
           else if(choice==2){
            banckAccount.withdrawAmount();
           }
           else if(choice==3){
            banckAccount.balance();
           }
           else if(choice==3){
            banckAccount.balance();
           }
           else if(choice==4){
               banckAccount.Transfer();
           }
    }while(choice != 0)
}())






// (function(){
//     let TheChoice = prompt(`
//                 Please enter your choice from the following functions
//                         ===========================
//                         1. Deposite your money
//                         2. Withdraw your money
//                         3. See your balance
//                         4. Transfer to another account
//                         `);
//         // using the teranary operator.
//     var Choice = (
//         (TheChoice == 1)? createAcount()
//         :(TheChoice==2)? Withdraw()
//         :(TheChoice==3)? multiplication()
//         :(TheChoice==4)? Division()
//         :(TheChoice==5)? Power()
//         :(TheChoice==6)? Average()
//         :'Choose the correct from the choices')
// }());
//     var bankAccount =  {
//         accountOwner: " ",
//         accountNum: " ",
//         accountBalance: " "
//     }
//     function createAcount(){
//         bankAccount.accountOwner = prompt("Please insert full name")
//         bankAccount.accountNum = prompt("please enter the acount number")
//         bankAccount.accountBalance = prompt("please enter the balance deposited")
//         alert(`${accountOwner} has ${accountNum} account number and ${balance} balance `)
//     }
//     function Withdraw(){
//       var withdrawAmount = prompt("Tell me the amount you wanna to withdraw")
//       if(bankAccount.balance < withdrawAmount){
//           alert("you can't do that please insert a small amount")
//       }
//       else{
//           alert(`You withdraw ${withdrawAmount} and your account balance is ${balance}`)
//       }
//     }
   

