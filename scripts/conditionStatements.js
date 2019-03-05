var x = 5;
var a = 5;
var b = 10;

function printConditions(){
    if(true || false && true && false){
        alert("cond1")
    } /*true*/
    if(true || (false && true) && false){
        alert("cond2")
    }/*true*/
    if(true && false)
        alert("cond3")/*false*/
    if(true || false)
        alert("cond4")/*true*/
    if(true && false || true && false)
        alert("cond5")/*false*/
}

function checkAge(){
    var age=document.getElementById("age").value;

    if( age >= 18 && age <= 60)
        alert("you can work")
    else
        alert("Not eligible")
}