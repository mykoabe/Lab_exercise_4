var height = Number(prompt("enter the height"))
var weight = Number(prompt("enter the weight"))
function funBMi(height, weight){
    var bmi = weight/(Math.pow(height,2));
    var answer = ((bmi<18.5) ? (bmi + " " + "underweight") : (bmi>18.5) ? (bmi +" " + "Normal or healthy")
    :(bmi>25) ? (bmi + " " + "overWeight") : "Obese" )
    return (answer)
}
var sol = funBMi(height, weight)
window.Number(alert(sol));