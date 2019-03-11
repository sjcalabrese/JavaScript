//declare local variables
var boxes;
var turn = 0;
var playerTurn;

function init() {
    console.log("running")//confirmt the game is running in the console log
    boxes = document.querySelectorAll("#board div") //create a list of the bard div's and assign to boxes
    playerTurn = document.getElementById("turnbx") //assign the turn header to playerTurn variable
   /*main function for the tic tac toe game
   iterates through the array of boxes and then waits for a click
   */
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function () {
            if (this.innerHTML !== "X" && this.innerHTML !== "O") { //verifies the box is empty
                if (turn === 0) { //runs if it is player ones turn
                    console.log(turn);
                    this.innerHTML = "X"; //Marks an "X" in the box for player 1
                    playerTurn.innerHTML = "Turn = player 2"
                    getWinner(); //test to see if the player one
                    turn = 1; //switch to player 2
                } else { //run if it is player 2's turn
                    console.log(turn);
                    this.innerHTML = "O"; //marks an "O" if it is player 2's turn
                    playerTurn.innerHTML = "Turn = Player 1"
                    getWinner(); //test for a winner
                    turn = 0; //switch back to player 1
                } 
            } 
        } 
    } 
}

function getWinner() { //assign each div to a box variable
    var box1 = document.getElementById("div1")
    var box2 = document.getElementById("div2")
    var box3 = document.getElementById("div3")
    var box4 = document.getElementById("div4")
    var box5 = document.getElementById("div5")
    var box6 = document.getElementById("div6")
    var box7 = document.getElementById("div7")
    var box8 = document.getElementById("div8")
    var box9 = document.getElementById("div9")

    //test all posibilities
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectWinnerBoxes(box1, box2, box3);
    //1st row horizontal win
    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinnerBoxes(box4, box5, box6);
    //2nd row horizontal win
    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box7, box8, box9)
    //3rd row horizontal win
    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box1, box4, box7);
    //1 column verticle win
    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinnerBoxes(box2, box5, box8)
    //2nd column verticle winner
    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box3, box6, box9)
    //3rd column verticle
    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box1, box5, box9)
    //top left to bottom right diaginal
    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box3, box5, box7)
    //top right to bottom left diaginal

}




function selectWinnerBoxes(b1, b2, b3) {
    b1.className = "win"; 
    b2.className = "win";
    b3.className = "win";
    playerTurn.innerHTML = b1.innerHTML + " Won, Congrats";
    playerTurn.style.fontSize = "40px";
}






function resetgame() {
    location.reload();
}