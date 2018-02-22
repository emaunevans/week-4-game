$(document).ready(function () {
  //an array of character objects needed: health, powers, etc refer to instruct...// 
  var charPowers = [17, 15, 33, 27];
  for (var i = 0; i < numberOptions.length; i++) {
    var CharPowers = ($(this).attr("data-charpowers"));
    charPowers = parseInt(charPowers);
  }
  //keep track of kill counts, turns //  
  var kills = 0;
  var defeats = 0;
  var enemies = [];
  // This function is run whenever the user presses a key.
  document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userAttack = event.key;
    // store the attacker in variable and defender in variable // 
    // function to reset game//
    $('.RickandMorty-image').each(function () {
      //console.log($(this));
    });

    function resetGame() {
      //set all game variables to their original values//
      //all characters should be set to their original place//
    }

    function moveImage() {
      $('.RickandMorty-image').each(function () {
        var xPos = $(this).offset().left;
        var yPos = $(this).offset().top;

        xPos -= 250;
        yPos += 300; //y position needs to be greater not equal to x in order to have the image shift down left
        $(this).offset({
          'left': xPos
        });
        $(this).offset({
          'top': yPos
        });
      });
    }

    $('.image-button').click(function () {
      alert("");

      // $(".RickandMorty-image").on("click", function () {
      //     $("#RickandMorty").animate({ top: "+=250px" }, "normal");

      //     $(".MrPoopyButthole-image").on("click", function () {
      //         $("#MrPoopyButthole").animate({ left: "+=250px" }, "normal");

      //         $(".Birdperson-image").on("click", function () {
      //             $("#birdperson").animate({ left: "+=250px" }, "normal");

      //             $(".Zeep-image").on("click", function () {
      //                 $("#Zeep").animate({ left: "+=250px" }, "normal");
      //             });

      //         });
      //     });
      // });
    });
  };
});