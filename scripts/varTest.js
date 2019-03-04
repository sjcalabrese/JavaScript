function add() {
    var i = 5;
    var j = " hello";
    var k = i + j;
    /*document.getElementById('result').innerHTML=k;*/
    return k;
}

function setResult(){
    document.getElementById('result').innerHTML=add();
}
