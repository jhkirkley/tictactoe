//Style
//function
var bPlane = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var isWinner = 0;
var moveCount = 0;
boardActive = false;
spaceActive = 0;
var turn = "";
var playerOne = new Object();
playerOne.score = 0;
var playerTwo = new Object();
playerTwo.score = 0;

//status = parseInt(status);
$(document).ready(function() {

    $("#p-one-score").children("p").text(playerOne.score);
    $("#p-two-score").children("p").text(playerTwo.score);

    function boardMsg(x) {
        return $("#board").text(x);
    };

    function setBoard() {
        boardMsg("");
        isWinner = 0;
        moveCount = 0;
        $("#player-one").removeClass("active-player");
        $("#player-two").removeClass("active-player");
        for (var i = 0; i < bPlane.length; i++) {
            bPlane[i] = 0;
            $(".space").map(function() {
                $(this).children("p").text("");
            }).get();
        }
    };


    function setPlayer() {
        var status = parseInt(Math.floor(Math.random() * 100) + 1);

        if (status > 50) {
            turn = playerOne.name;
            $("#player-one").addClass("active-player");
            boardMsg(playerOne.name + "'s turn");
        } else {
            turn = playerTwo.name;
            $("#player-two").addClass("active-player");
            boardMsg(playerTwo.name + "'s turn");
        }
    }

    function checkWinner(n, playerName) {

  function wins(x) {
    if (playerName == playerOne.name) {
        playerOne.score = playerOne.score + 1;
        $("#p-one-score").children("p").text(playerOne.score);
    } else if (playerName == playerTwo.name) {
        playerTwo.score = playerTwo.score + 1;
        $("#p-two-score").children("p").text(playerTwo.score);
    }
}
    function havaWinner(x, y, z) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( x )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( y )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( z )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[0] == n && bPlane[1] == n && bPlane[2] == n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 1 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 2 )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[3] == n && bPlane[4] == n && bPlane[5] == n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 3 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 4 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 5 )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[6] == n && bPlane[7] == n && bPlane[8] == n) {
     wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 6 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 7 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 8 )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[0] == n && bPlane[3] == n && bPlane[6] == n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 3 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 6 )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[1] == n && bPlane[4] == n && bPlane[7] == n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 1 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 4 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 7 )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[2] == n && bPlane[5] == n && bPlane[8] == n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 2 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 5 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 8 )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 }

 if (bPlane[0] == n && bPlane[4] == n && bPlane[8] == n) {
          wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 0 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 4 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 8 )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 }
 if (bPlane[6] == n && bPlane[4] == n && bPlane[2] == n) {
    wins(playerName);
     boardMsg(playerName + " won the game!");
     isWinner = 1;
     moveCount = 0;
     $( ".space:eq( 6 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 4 )" ).css( "background-color", "#DCC6E0" );
     $( ".space:eq( 2 )" ).css( "background-color", "#DCC6E0" );
     $('#play').css("display", "inline")
     $("#play").text("Play Again");
     return true;
 } else return false;

    }


    $("#play").click(function() {

        setBoard();

        playerOne.name = $("#player-one-input").val();
        playerOne.mark =  $("#player-one-mark").val();
        $("#p-one-score").children("p").text(playerOne.score);
        playerTwo.name = $("#player-two-input").val();
        playerTwo.mark =  $("#player-two-mark").val();
        $("#p-two-score").children("p").text(playerTwo.score);

        if (playerOne.name == "" || playerTwo.name == "") {
            boardMsg("Please enter all of the player names");

        } else {
            setPlayer();
            $('#play').css("display", "none")
            boardActive = true;
        }
    });

    //$(".space").click(function() {
    //     $(this).html("<p>Something</P>");
    //});

    $(".space").click(function() {

        if (playerOne.name == "" || playerTwo.name == "") {
            alert("Please set all names.");
            return;
        }
        var space = $(this).index();

        if (bPlane[space] !== 0) {
            $(this).addClass('shake');
            return;
        }
        if (isWinner == 1) {
            $(this).addClass('shake');
            return;
        }

        if (turn == playerOne.name) {
            moveCount++;
            $(this).children("p").text(playerOne.mark);
            bPlane[space] = 1;
            var ifWon = checkWinner(1, playerOne.name);
            if (!ifWon) {
                if (moveCount >= 9) {
                    boardMsg("Match Drawn!");
                    moveCount = 0;
                    $("#play").text("Play again");
                    $('#play').css("display", "inline");
                    isWinner = 1;
                    return;
                } else {
                    turn = playerTwo.name;
                    $("#player-two").addClass("active-player");
                    $("#player-one").removeClass("active-player");
                    boardMsg(playerTwo.name + "'s turn");
                }
                return;
            } else {
                return;
            }
        } else if (turn == playerTwo.name) {
            moveCount++;
            $(this).children("p").text(playerTwo.mark);
            bPlane[space] = 2;
            var ifWon = checkWinner(2, playerTwo.name);
            if (!ifWon) {
                if (moveCount >= 9) {
                    boardMsg("Match Drawn!");
                    moveCount = 0;
                    $("#play").text("Play again");
                    $('#play').css("display", "inline");
                    isWinner = 1;
                    return;
                } else {
                    turn = playerOne.name;
                    $("#player-one").addClass("active-player");
                    $("#player-two").removeClass("active-player");
                    boardMsg(playerOne.name + "'s turn");
                }
                return;
            } else {
                return;
            }
        }
    });

    //style




});
