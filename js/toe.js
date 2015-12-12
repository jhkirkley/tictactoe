var bplane = [null, null, null, null, null, null, null, null, null];
var player1Name = "";
var player2Name = "";
var player = "";
var turn = "";
var hasWinner = 0;
var moveCount = 0;
//status = parseInt(status);
$(document).ready(function () {

function boardMsg(x){
    return $("#board").text(x);
}

function init() {
  turn = "";
  boardMsg("");
  hasWinner = 0;
  moveCount=0;
  for(var i = 0; i < bplane.length; i++) {
    bplane[i] = "";
    $(".space").map(function() {
            $(this).children("p").text("");
        }).get();
  }
};


function setTurn(){
    var status = parseInt(Math.floor(Math.random()*100) + 1);

    if (status > 50) {
      player = "host";
      $( "#player-one" ).addClass( "active-player" );
      boardMsg(player1Name+"'s turn now!");
    }
    else {player = "guest";
          $( "#player-two" ).addClass( "active-player" );
          boardMsg(player1Name+"'s turn now!");
        }
}

function checkWinner(n,playerName){
    if(

        (grid[0]==n && grid[1]==n && grid[2]==n) ||
        (grid[3]==n && grid[4]==n && grid[5]==n) ||
        (grid[6]==n && grid[7]==n && grid[8]==n) ||

        (grid[0]==n && grid[3]==n && grid[6]==n) ||
        (grid[3]==n && grid[4]==n && grid[5]==n) ||
        (grid[6]==n && grid[7]==n && grid[8]==n) ||

        (grid[0]==n && grid[4]==n && grid[8]==n)||
        (grid[6]==n && grid[4]==n && grid[2]==n)


        ){
        boardMsg(playerName+" won the game!");
        hasWinner = 1;
        moveCount=0;
        $('#play').css("display","block")
        $("#play").text("Play again");
        return true;
    }
    return false;
}


$("#play").click(function(){

    init();

    player1Name = $("#player-1-inp").val();
    player2Name = $("#player-2-inp").val();

    if(player1Name=="" || player2Name==""){
        boardMsg("Please enter all of the player names");

    }
    else {
      setTurn();
      $('#play').css("display","none")
    }
});

$(".space").click(function() {
      $(this).html("<p>Something</P>");
});



});
