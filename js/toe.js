//Style
//function
var bPlane = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var isWinner = 0;
var moveCount = 0;
boardActive = false;
spaceActive = 0;
var turn = "";
var playerOne = new Object();
var playerTwo = new Object();

//status = parseInt(status);
$(document).ready(function() {

    //var playerOne = new Player('john', 'x');

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
            boardMsg(playerOne.name + "'s turn now!");
        } else {
            turn = playerTwo.name;
            $("#player-two").addClass("active-player");
            boardMsg(playerTwo.name + "'s turn now!");
        }
    }

    function checkWinner(n, playerName) {

/*        function wins(playerName) {
    playerName.score++;
    if (playerName == playerOne.name) {
        playerOne.score++;
        $("#p-one-score").children("p").text(playerOne.score);
    } else if (playerName == playerTwo.name) {
        playerTwo.score++;
        $("#p-two-score").children("p").text(playerOne.score);
    }
}
*/
        if (

            (bPlane[0] == n && bPlane[1] == n && bPlane[2] == n) ||
            (bPlane[3] == n && bPlane[4] == n && bPlane[5] == n) ||
            (bPlane[6] == n && bPlane[7] == n && bPlane[8] == n) ||

            (bPlane[0] == n && bPlane[3] == n && bPlane[6] == n) ||
            (bPlane[3] == n && bPlane[4] == n && bPlane[5] == n) ||
            (bPlane[6] == n && bPlane[7] == n && bPlane[8] == n) ||

            (bPlane[0] == n && bPlane[4] == n && bPlane[8] == n) ||
            (bPlane[6] == n && bPlane[4] == n && bPlane[2] == n)


        ) {
            boardMsg(playerName + " won the game!");
            isWinner = 1;
            moveCount = 0;
            $('#play').css("display", "block")
            $("#play").text("Play Again");
            return true;
        }
        return false;
    }


    $("#play").click(function() {

        setBoard();

        playerOne.name = $("#player-one-input").val();
        playerOne.mark =  $("#player-one-mark").val();
        playerOne.score = 0; $("#p-one-score").children("p").text(playerOne.score);
        playerTwo.name = $("#player-two-input").val();
        playerTwo.mark =  $("#player-two-mark").val();
        playerTwo.score = 0; $("#p-two-score").children("p").text(playerTwo.score);

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
            alert("This position is taken. Please try other position.");
            return;
        }
        if (isWinner == 1) {
            alert("Please click play again");
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
                    isWinner = 1;
                    return;
                } else {
                    turn = playerTwo.name;
                    $("#player-two").addClass("active-player");
                    $("#player-one").removeClass("active-player");
                    boardMsg(playerTwo.name + "'s turn now!");
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
                    isWinner = 1;
                    return;
                } else {
                    turn = playerOne.name;
                    $("#player-one").addClass("active-player");
                    $("#player-two").removeClass("active-player");
                    boardMsg(playerOne.name + "'s turn now!");
                }
                return;
            } else {
                return;
            }
        }
    });

    //style




});
