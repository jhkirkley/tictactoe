var bplane = [null, null, null, null, null, null, null, null, null];
var player1Name = "";
var player2Name = "";
var player = "";
var turn = "";
//status = parseInt(status);
$(document).ready(function () {

function boardMsg(x){
    return $("#board").text(x);
}

function init() {
  turn = "";
  boardMsg("");
  for(var i = 0; i < bplane.length; i++) {
    bplane[i] = "";
    $(".space").map(function() {
            $(this).p.text("");
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



$("#play").click(function(){

    init();

    player1Name = $("#player-1-inp").val();
    player2Name = $("#player-2-inp").val();

    if(player1Name=="" || player2Name==""){
        boardMsg("Please enter all of the player names");

    }
    else { setTurn()}
});

$(".space").click(function() {
      $(this).html("<p>Something</P>");
});



});
