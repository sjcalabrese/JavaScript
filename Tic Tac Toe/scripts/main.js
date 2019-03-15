//declare variables
var boxes;
var turn= 0;//determines players turn
var playerTurn; //output to let the players know whose turn it is
var player1Score;
var player2Score;


function init() {
    console.log("running")//confirmt the game is running in the console log
    boxes = document.querySelectorAll("#board div") //create a list of the board div's and assign to boxes variable
    playerTurn = document.getElementById("turnbx") //assign the turn header to playerTurn variable
   /*main function for the tic tac toe game
   iterates through the array of boxes creating the onclick event listener
   then waits for player to click to run the function.
   */
  
    player1Score = 0;
    player2Score = 0;
    updatePlayer();
    for (let i = 0; i < boxes.length; i++) {        
        boxes[i].onclick = function () {

            if (this.innerHTML !== "X" && this.innerHTML !== "O" && getWinner() !== true) { //verifies the box is empty and that there is no winner
                //if (turn === 0) { //runs if it is player ones turn
                    console.log(turn);
                    this.innerHTML = (turn === 0)? "X":"O"; //Marks an "X" in the box for player 1 or O for player 2
                    turn = (turn === 0)?1:0;
                    playerTurn.innerHTML = (turn === 0)?"Turn = Player 1":"Turn = player 2";
                    getWinner(); //test to see if the player one                   
                    //turn = 1; //switch to player 2
                //} else { //run if it is player 2's turn
                  //  console.log(turn);
                  //  this.innerHTML = "O"; //marks an "O" if it is player 2's turn
                  //  playerTurn.innerHTML = "Turn = Player 1"
                  //  getWinner(); //test for a winner
                  //  turn = 0; //switch back to player 1
                
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
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        selectWinnerBoxes(box1, box2, box3);
        return true;
    }
    //1st row horizontal win
    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
        selectWinnerBoxes(box4, box5, box6);
        return true;
    }
    //2nd row horizontal win
    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
        selectWinnerBoxes(box7, box8, box9)
        return true;
    }
    //3rd row horizontal win
    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
        selectWinnerBoxes(box1, box4, box7);
        return true;
    }
    //1 column verticle win
    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
        selectWinnerBoxes(box2, box5, box8)
        return true;
    }
    //2nd column verticle winner
    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
        selectWinnerBoxes(box3, box6, box9)
        return true;
    }
    //3rd column verticle
    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
        selectWinnerBoxes(box1, box5, box9)
        return true;
    }
    //top left to bottom right diaginal
    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
        selectWinnerBoxes(box3, box5, box7)
        return true;
    }
    //top right to bottom left diaginal
    if(box1.innerHTML !=="" && box2.innerHTML !== "" && box3.innerHTML !== "" && box4.innerHTML !== ""
    && box5.innerHTML !== "" && box6.innerHTML !== "" && box7.innerHTML !== "" && box8.innerHTML !== ""
    && box9.innerHTML !== ""){
        draw();
        return true;
    }
       
}

function draw(){
    playerTurn.innerHTML = "DRAW";  
    playerTurn.style.fontSize = "25px";
}


function selectWinnerBoxes(b1, b2, b3) {
    b1.className = "win"; 
    b2.className = "win";
    b3.className = "win";
    playerTurn.innerHTML = b1.innerHTML + " Won, Congrats";
    playerTurn.style.fontSize = "25px";
    if(b1.innerHTML === "X"){
        player1Score++;
        ;
    }else{
        player2Score++;
    }
    updatePlayer();
}

function resetgame() {
    for (let i = 0; i < boxes.length; i++){         
        boxes[i].innerHTML = "";
        boxes[i].className = "";
        turn = 0;
    }
}
function resetScore(){
    location.reload();
    
}

function updatePlayer() {
    document.getElementById("player1").innerHTML = player1Score;
    document.getElementById("player2").innerHTML = player2Score;
}