var space = [null, null, null, null, null, null, null, null, null];
var player = "null";
var status = 0;
//status = parseInt(status);
$(document).ready(function () {

$("#play").click(function(){
    console.log("Clicked Play");
    var status = parseInt(Math.random()*100 + 1);

    if (status > 50) {
      player = "host";
      $( "#player-one" ).addClass( "active-player" );
    }
    else {player = "guest";
          $( "#player-two" ).addClass( "active-player" );
        }
});



});
