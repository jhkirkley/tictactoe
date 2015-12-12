var bplane = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var player1Name = "";
var player2Name = "";
var player = "";
var hasWinner = 0;
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
  hasWinner = 0;
  moveCount=0;
  for(var i = 0; i < bplane.length; i++) {
    bplane[i] = 0;
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

        (bplane[0]==n && bplane[1]==n && bplane[2]==n) ||
        (bplane[3]==n && bplane[4]==n && bplane[5]==n) ||
        (bplane[6]==n && bplane[7]==n && bplane[8]==n) ||

        (bplane[0]==n && bplane[3]==n && bplane[6]==n) ||
        (bplane[3]==n && bplane[4]==n && bplane[5]==n) ||
        (bplane[6]==n && bplane[7]==n && bplane[8]==n) ||

        (bplane[0]==n && bplane[4]==n && bplane[8]==n)||
        (bplane[6]==n && bplane[4]==n && bplane[2]==n)


        ){
        boardMsg(playerName + " won the game!");
        hasWinner = 1;
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

    var s = $(this).index();

    if(bplane[s]!== 0){
        alert("This position is taken. Please try other position.");
        return;
    }
/*    else if(checkWinner == 1){
        alert("Please click play again");
        return;
    }
*/
    else if(player == player1Name){
        moveCount++;
        $(this).children("p").text("O");
        bplane[s] = 1;
        var ifWon = checkWinner(1, player1Name);
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#playButton").text("Play again");
                hasWinner = 1;
                return;
               }
            else{
                player = player2Name;
                $( "#player-one" ).removeClass( "active-player" );
                $( "#player-two" ).addClass( "active-player" );
                boardMsg(player2Name + "'s turn now!");
            }
            return;
        }
        else{
            return;
        }
    }
    else if(player == player2Name){
        moveCount++;
        $(this).children("p").text("X");
        bplane[s] = 2;
        var ifWon = checkWinner(2, player2Name);
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#play").text("Play again");
                hasWinner=1;
                return;
            }else{
                player = player1Name;
                ( "#player-two" ).removeClass( "active-player" );
                $( "#player-one" ).addClass( "active-player" );
                boardMsg(player1Name + "'s turn now!");
            }
            return;
        }
        else{
            return;
        }
    }

}); //end space click


});
