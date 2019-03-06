function foobar(){
    var x = 15;
    var y = "hello";
    alert(x)
}

function foo(){
    var x = 10;
    document.getElementById("line1").innerHTML = "x = " + x;
    {
        var x = 25;
        var age = 45;
        document.getElementById("line2").innerHTML = "x =" + x
    }
    document.getElementById("line3").innerHTML = "age = " + age;
    document.getElementById("line4").innerHTML = "x = " + x;
    foobar();
    document.getElementById("line5").innerHTML ="x = " + x;
    document.getElementById("line6").innerHTML ="y = " + y;
}

function test() {
    var x = 10;
    alert(x);
    {
        let x = 25;
        alert(x);
        let name = "Ajay"
        alert(name)
    }
    alert(x);
    alert(name);
}