$(document).ready(function() {
    
    var redGem = $("#red-gem");
    var blueGem = $("#blue-gem");
    var greenGem = $("#green-gem");
    var yellowGem = $("#yellow-gem");

// Generate a random magic number between 19 and 120
    var magicOptions = [];
    for (var i = 19; i <= 120; i++) {
        magicOptions.push([i]);
    }
    var magicNum = 0;
    function generateMagic() {
        magicNum = magicOptions[Math.floor(Math.random()*magicOptions.length)];
    }


// USER SCORE
    var userScore = 0;

    // wins and losses
    var wins = 0;
    var losses = 0;


// Generate random gem values
    var gemOptions = [];
    for (var i = 1; i <= 12; i++) {
        gemOptions.push([i]);
    }

    reset();
    function reset() {
        userScore = 0;
        generateMagic();
        generateGems();
        $(".magic-number").html(magicNum);
        $(".user-score").html(0);
    }

    function generateGems() {
        redGem.attr("data-crystalvalue", gemOptions[Math.floor(Math.random()*gemOptions.length)]);
        blueGem.attr("data-crystalvalue", gemOptions[Math.floor(Math.random()*gemOptions.length)]);
        greenGem.attr("data-crystalvalue", gemOptions[Math.floor(Math.random()*gemOptions.length)]);
        yellowGem.attr("data-crystalvalue", gemOptions[Math.floor(Math.random()*gemOptions.length)]);
    }

    $(".crystal-image").on("click", function() {
    
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        console.log(magicNum);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        userScore += crystalValue;
    
        // All of the same game win-lose logic applies. So the rest remains unchanged.
        $(".user-score").html(userScore);

        result();
      });

      function result() {
        if (userScore == magicNum) {
            alert("You win!");
            reset()
            wins++;
            $(".wins").html(wins);
          }
      
          else if (userScore > magicNum) {
            alert("You lose!!");
            reset()
            losses++;
            $(".losses").html(losses);
          }
      }





// END OF JS
// *** *** ***
});