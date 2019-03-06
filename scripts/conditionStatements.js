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

    var message = ( age >=18 && age <= 60)?"Can work":"Can't work"
    alert(message)
}

function whatPartOfTheWeekIsIt(){
    var week = new Date().getDay()

    switch(week){
        case 1:
        case 2:
        case 3:
        case 4:
            alert("Weekday")
            break;
        case 5:
            alert("Friday")
            break;
        case 6:
        case 0:
            alert("Weekend")
            break;
    }
}

function whatDayIsIt(){
    var day = new Date().getDay();

    switch(day){
        case 1:
            alert("Monday")
            break;
        case 2:
            alert("Tuesday")
            break;
        case 3:
            alert("Wednesday")
            break;
        case 4:
            alert("Thursday")
            break;
        case 5:
            alert("Friday")
            break;
        case 0:
            alert("Sunday")
            break;
        case 6:
            alert("Saturday")
            break;
}
}