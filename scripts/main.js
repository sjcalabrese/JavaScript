function makeX(source) {

    switch (source.id) {
        case "xbtn1":
            document.getElementById("bx1").hidden = false;
            document.getElementById("bx1").src = "images/x.png";
            document.getElementById("xbtn1").hidden = true;
            document.getElementById("obtn1").hidden = true;
            break;
        case "xbtn2":
            document.getElementById("bx2").hidden = false;
            document.getElementById("bx2").src = "images/x.png";
            document.getElementById("xbtn2").hidden = true;
            document.getElementById("obtn2").hidden = true;
            break;
        case "xbtn3":
        document.getElementById("bx3").hidden = false;  
            document.getElementById("bx3").src = "images/x.png";
            document.getElementById("xbtn3").hidden = true;
            document.getElementById("obtn3").hidden = true;
            break;
        case "xbtn4":
        document.getElementById("bx4").hidden = false;
            document.getElementById("bx4").src = "images/x.png";
            document.getElementById("xbtn4").hidden = true;
            document.getElementById("obtn4").hidden = true;
            break;
        case "xbtn5":
            document.getElementById("bx5").hidden = false;
            document.getElementById("bx5").src = "images/x.png";
            document.getElementById("xbtn5").hidden = true;
            document.getElementById("obtn5").hidden = true;
            break;
        case "xbtn6":
            document.getElementById("bx6").hidden = false;
            document.getElementById("bx6").src = "images/x.png";
            document.getElementById("xbtn6").hidden = true;
            document.getElementById("obtn6").hidden = true;
            break;
        case "xbtn7":
            document.getElementById("bx7").hidden = false;
            document.getElementById("bx7").src = "images/x.png";
            document.getElementById("xbtn7").hidden = true;
            document.getElementById("obtn7").hidden = true;
            break;
        case "xbtn8":
            document.getElementById("bx8").hidden = false;
            document.getElementById("bx8").src = "images/x.png";
            document.getElementById("xbtn8").hidden = true;
            document.getElementById("obtn8").hidden = true;
            break;
        case "xbtn9":
            document.getElementById("bx9").hidden = false;
            document.getElementById("bx9").src = "images/x.png";
            document.getElementById("xbtn9").hidden = true;
            document.getElementById("obtn9").hidden = true;
            break;

    }
}
function makeO(source) {
    switch (source.id) {
        case "obtn1":
            document.getElementById("bx1").src = "images/o.png";
            document.getElementById("xbtn1").hidden = "true";
            document.getElementById("obtn1").hidden = "true";
            break;
        case "obtn2":
            document.getElementById("bx2").src = "images/o.png";
            document.getElementById("xbtn2").hidden = "true";
            document.getElementById("obtn2").hidden = "true";
            break;
        case "obtn3":
            document.getElementById("bx3").src = "images/o.png";
            document.getElementById("xbtn3").hidden = "true";
            document.getElementById("obtn3").hidden = "true";
            break;
        case "obtn4":
            document.getElementById("bx4").src = "images/o.png";
            document.getElementById("xbtn4").hidden = "true";
            document.getElementById("obtn4").hidden = "true";
            break;
        case "obtn5":
            document.getElementById("bx5").src = "images/o.png";
            document.getElementById("xbtn5").hidden = "true";
            document.getElementById("obtn5").hidden = "true";
            break;
        case "obtn6":
            document.getElementById("bx6").src = "images/o.png";
            document.getElementById("xbtn6").hidden = "true";
            document.getElementById("obtn6").hidden = "true";
            break;
        case "obtn7":
            document.getElementById("bx7").src = "images/o.png";
            document.getElementById("xbtn7").hidden = "true";
            document.getElementById("obtn7").hidden = "true";
            break;
        case "obtn8":
            document.getElementById("bx8").src = "images/o.png";
            document.getElementById("xbtn8").hidden = "true";
            document.getElementById("obtn8").hidden = "true";
            break;
        case "obtn9":
            document.getElementById("bx9").src = "images/o.png";
            document.getElementById("xbtn9").hidden = "true";
            document.getElementById("obtn9").hidden = "true";
            break;
    }
}


    function resetgame() {
        location.reload();
    }