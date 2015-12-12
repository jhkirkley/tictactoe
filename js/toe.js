var bPlane = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var player1Name = "";
var player2Name = "";
var player = "";
var isWinner = 0;
var moveCount = 0;
boardActive = false;
spaceActive = 0;
//status = parseInt(status);
$(document).ready(function () {

function boardMsg(x){
    return $("#board").text(x);
}

function init() {
  boardMsg("");
  isWinner = 0;
  moveCount=0;
  for(var i = 0; i < bPlane.length; i++) {
    bPlane[i] = 0;
    $(".space").map(function() {
            $(this).children("p").text("");
        }).get();
  }
};


function setPlayer(){
    var status = parseInt(Math.floor(Math.random()*100) + 1);

    if (status > 50) {
      player = player1Name;
      $( "#player-one" ).addClass( "active-player" );
      boardMsg(player1Name+"'s turn now!");
    }
    else {player = player2Name;
          $( "#player-two" ).addClass( "active-player" );
          boardMsg(player1Name+"'s turn now!");
        }
}

function checkWinner(n, playerName){
    if(

        (bPlane[0]==n && bPlane[1]==n && bPlane[2]==n) ||
        (bPlane[3]==n && bPlane[4]==n && bPlane[5]==n) ||
        (bPlane[6]==n && bPlane[7]==n && bPlane[8]==n) ||

        (bPlane[0]==n && bPlane[3]==n && bPlane[6]==n) ||
        (bPlane[3]==n && bPlane[4]==n && bPlane[5]==n) ||
        (bPlane[6]==n && bPlane[7]==n && bPlane[8]==n) ||

        (bPlane[0]==n && bPlane[4]==n && bPlane[8]==n)||
        (bPlane[6]==n && bPlane[4]==n && bPlane[2]==n)


        ){
        boardMsg(playerName + " won the game!");
        isWinner = 1;
        moveCount = 0;
        $('#play').css("display","block")
        $("#play").text("Play Again");
        return true;
    }
    return false;
}


$("#play").click(function(){

    init();

    player1Name = $("#player-1-input").val();
    player2Name = $("#player-2-input").val();

    if(player1Name == "" || player2Name == ""){
        boardMsg("Please enter all of the player names");

    }
    else {
      setPlayer();
      $('#play').css("display","none")
      boardActive = true;
    }
});

//$(".space").click(function() {
//     $(this).html("<p>Something</P>");
//});

$(".space").click(function (){

    if(player1Name == "" || player2Name == ""){
        alert("Please set all names.");
        return;
    }
    var space = $(this).index();

    if(bPlane[space]!==0){
        alert("This position is taken. Please try other position.");
        return;
    }
    if(isWinner == 1){
        alert("Please click play again");
        return;
    }

    if(player==player1Name){
        moveCount++;
        $(this).children("p").text("O");
        bPlane[space] = 1;
        var ifWon = checkWinner(1,player1Name);
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#play").text("Play again");
                isWinner=1;
                return;
            }else{
                player = player2Name;
                $( "#player-two" ).addClass( "active-player" );
                $( "#player-one" ).removeClass( "active-player" );
                boardMsg(player2Name+"'s turn now!");
            }
            return;
        }
        else{
            return;
        }
    }
    else if(player==player2Name){
        moveCount++;
        $(this).children("p").text("X");
        bPlane[space] = 2;
        var ifWon = checkWinner(2,player2Name);
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#play").text("Play again");
                isWinner=1;
                return;
            }else{
                player = player1Name;
                $( "#player-one" ).addClass( "active-player" );
                $( "#player-two" ).removeClass( "active-player" );
                boardMsg(player1Name+"'s turn now!");
            }
            return;
        }
        else{
            return;
        }
    }
});


});
