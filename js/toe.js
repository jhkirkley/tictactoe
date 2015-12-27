var bPlane = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
var isWinner = 0;
var moveCount = 0;
boardActive = false;
spaceActive = 0;
var turn = "";
var playerOne = {};
playerOne.score = 0;
playerOne.num = 1;
var playerTwo = {};
playerTwo.score = 0;
playerTwo.num = 2;


//status = parseInt(status);
$(document).ready(function() {

    $("#p-one-score").children("p").text(playerOne.score);
    $("#p-two-score").children("p").text(playerTwo.score);

    function boardMsg(x) {
        return $("#board").text(x);
    }

    $("#glasses").click(function() {

        $("#bcontainer").toggleClass("one");
        $("#bcontainer").toggleClass("three");
        $("#acontainer").toggleClass("hidden");
        $("#ccontainer").toggleClass("hidden");
        $("#acontainer").toggleClass("three");
        $("#ccontainer").toggleClass("three");
    });

    //style

    function setBoard() {
        boardMsg("");
        isWinner = 0;
        moveCount = 0;
        $("#player-one").removeClass("active-player");
        $("#player-two").removeClass("active-player");
        for (var i = 0; i < bPlane.length; i++) {
            bPlane[i] = 0;
            $(".space").map(function() {
                $(this).html("");
            }).get();
            $(".space").map(function() {
                $(this).css("background-color", "#446CB3");
            }).get();
        }
    }


    function setPlayer() {
        var status = parseInt(Math.floor(Math.random() * 100) + 1);

        if (status > 50) {
            turn = playerOne;
            $("#player-one").addClass("active-player");
            boardMsg(playerOne.name + "'s turn");
        } else {
            turn = playerTwo;
            $("#player-two").addClass("active-player");
            boardMsg(playerTwo.name + "'s turn");
        }
    }

      function wins(x) {
    if (x === playerOne.name) {
        playerOne.score = playerOne.score + 1;
        $("#p-one-score").children("p").text(playerOne.score);
    } else if (x === playerTwo.name) {
        playerTwo.score = playerTwo.score + 1;
        $("#p-two-score").children("p").text(playerTwo.score);
    }
}

   function havaWinner(x, y, z, name) {
     wins(name);
     boardMsg(name + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( x )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( y )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( z )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

    function checkWinner(n, playerName) {

 if (bPlane[0] === n && bPlane[1] === n && bPlane[2] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 1 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 2 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[3] === n && bPlane[4] === n && bPlane[5] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 3 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 4 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 5 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[6] === n && bPlane[7] === n && bPlane[8] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 6 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 7 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[0] === n && bPlane[3] === n && bPlane[6] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 3 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 6 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[1] === n && bPlane[4] === n && bPlane[7] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 1 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 4 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 7 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[2] === n && bPlane[5] === n && bPlane[8] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 2 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 5 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[0] === n && bPlane[4] === n && bPlane[8] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 4 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[6] === n && bPlane[4] === n && bPlane[2] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 6 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 4 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 2 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
  if (bPlane[9] === n && bPlane[10] === n && bPlane[11] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 9 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 10 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 11 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[12] === n && bPlane[13] === n && bPlane[14] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 12 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 14 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[15] === n && bPlane[16] === n && bPlane[17] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 15 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 16 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 17 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[9] === n && bPlane[12] === n && bPlane[15] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 9 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 12 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 15 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[10] === n && bPlane[13] === n && bPlane[16] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 10 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 16 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[11] === n && bPlane[14] === n && bPlane[17] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 2 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 5 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[9] === n && bPlane[13] === n && bPlane[17] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 9 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 17 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[15] === n && bPlane[13] === n && bPlane[11] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 15 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 11 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
  if (bPlane[18] === n && bPlane[19] === n && bPlane[20] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 18 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 19 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 20 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[21] === n && bPlane[22] === n && bPlane[23] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 21 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 22 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 23 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[24] === n && bPlane[25] === n && bPlane[26] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 24 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 25 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 26 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[18] === n && bPlane[21] === n && bPlane[24] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 18 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 21 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 24 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[19] === n && bPlane[22] === n && bPlane[25] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 19 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 22 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 25 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[20] === n && bPlane[23] === n && bPlane[26] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 20 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 23 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 26 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[19] === n && bPlane[22] === n && bPlane[26] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 19 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 22 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 26 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[24] === n && bPlane[22] === n && bPlane[20] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 24 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 22 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 20 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
  if (bPlane[0] === n && bPlane[9] === n && bPlane[18] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 9 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 18 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[2] === n && bPlane[11] === n && bPlane[20] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 2 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 11 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 20 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[3] === n && bPlane[12] === n && bPlane[21] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 3 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 12 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 21 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[4] === n && bPlane[13] === n && bPlane[22] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 4 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 22 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[5] === n && bPlane[14] === n && bPlane[23] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 5 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 14 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 23 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[6] === n && bPlane[15] === n && bPlane[24] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 2 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 5 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[7] === n && bPlane[16] === n && bPlane[25] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 4 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[8] === n && bPlane[17] === n && bPlane[26] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 17 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 26 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
  if (bPlane[0] === n && bPlane[12] === n && bPlane[24] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 12 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 24 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[1] === n && bPlane[13] === n && bPlane[25] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 1 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 25 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[2] === n && bPlane[14] === n && bPlane[26] === n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 2 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 4 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 26 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[8] === n && bPlane[12] === n && bPlane[6] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 12 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 6 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[19] === n && bPlane[13] === n && bPlane[7] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 19 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 7 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[20] === n && bPlane[14] === n && bPlane[8] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 20 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 14 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[0] === n && bPlane[13] === n && bPlane[26] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 26 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[2] === n && bPlane[13] === n && bPlane[24] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 2 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 24 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
  if (bPlane[18] === n && bPlane[13] === n && bPlane[8] === n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 18 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 8 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[20] === n && bPlane[13] === n && bPlane[6] === n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 20 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 13 )" ).css( "background-color", "#C5EFF7" );
     $( ".space:eq( 6 )" ).css( "background-color", "#C5EFF7" );
     $('#play').css("display", "inline");
     $("#play").text("Play Again");
     return true;
 }
  else {return false;}

    }


    $("#play").click(function() {

        setBoard();

        playerOne.name = $("#player-one-input").val();
        playerOne.mark =  $("#player-one-mark").val();
        //if (playerOne.mark === "X") {
        //} else if (playerOne.mark === "X") {
         //   playerOne.image = "<img src="img/O.png"/>"
        //}
        playerOne.image = playerOne.mark === "X" ? '<img src="img/X.png" alt="X" class="mark"/>': '<img src="img/O.png" alt="O" class="mark"/>';

        $("#p-one-score").children("p").text(playerOne.score);
        playerTwo.name = $("#player-two-input").val();
        //playerTwo.mark =  $("#player-two-mark").val();
        playerTwo.mark = playerOne.mark === "X" ? "O": "X";
        playerTwo.image = playerTwo.mark === "X" ? '<img src="img/X.png" alt="X" class="mark"/>': '<img src="img/O.png" alt="O" class="mark"/>';
        $("#p-two-score").children("p").text(playerTwo.score);

        if (playerOne.name === "" || playerTwo.name === "") {
           boardMsg("Please enter all of the player names");

        } else {
            setPlayer();
            $('#play').css("display", "none");
            boardActive = true;
        }
    });

    //$(".space").click(function() {
    //     $(this).html("<p>Something</P>");
    //});

    $(".space").click(function() {
        var ifWon = "";
        var space = $(this).index(".space");
        if (playerOne.name === "" || playerTwo.name === "") {
            alert("Please set all names.");
            return;
        }

        if (bPlane[space] !== 0) {
            $(this).addClass('shake');
            return;
        }
        if (isWinner === 1) {
            $(this).addClass('shake');
            return;
        }

        else {
            moveCount++;
            $(this).append(turn.image);
            bPlane[space] = turn.num;
            ifWon = checkWinner(turn.num, turn.name);
            if (!ifWon) {
                if (moveCount >= 27) {
                    boardMsg("Match Drawn!");
                    moveCount = 0;
                    $("#play").text("Play again");
                    $('#play').css("display", "inline");
                    isWinner = 1;
                    return;
                } else {
                    turn = turn === playerOne? playerTwo: playerOne;
                    $("#player-two").toggleClass("active-player");
                    $("#player-one").toggleClass("active-player");
                    boardMsg(turn.name + "'s turn");
                }
                return;
            } else {
                return;
            }
        }
    });

});
