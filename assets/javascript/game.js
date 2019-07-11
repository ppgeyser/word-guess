$(document).ready(function () {

    $("#content").hide();
    $('#defeat').hide();
    $('#victory').hide();

    $("#intro-button").click(function(){
        $("#intro").hide();
        $("#content").show();

        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var computerChoices = [
            "beef-wellington",
            "herb-omelette",
            "lamb-sauce",
            "lobster-tortellini",
            "toffee-pudding",
            "stuffed-pork-tenderloin",
            "english-garden-salad"
            ];
    
        var chances = 10;
        var wins = 0;
        var losses = 0;
        var currentWord = [];
        var guesses = [];

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("Computer guess: " + computerGuess);

        //print blanks that correspond to string length of chosen string
            //insert spaces where applicable. spaces should not count as characters that users must guess

        function printBlanks() {
            for (var i = 0; i < computerGuess.length; i++) {
                currentWord[i] = "_";
                if (computerGuess[i] === "-") {
                    currentWord[i] = "-";
                };
                $('#currentWord-text').text(currentWord.join(" "));
            }
        }

        $('#chances-text').text(chances);
        $('#wins-text').text(wins);
        $('#losses-text').text(losses);
        $('#guesses-text').text(guesses);
        printBlanks();

        //reset function
        function reset() {
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
            chances = 10;
            currentWordStr = ''
            guesses = [];
            currentWord = [];
            printBlanks ();
            $('#guesses-text').text(guesses);
            $('#wins-text').text(wins);
            $('#losses-text').text(losses);
            $('#chances-text').text(chances);
            $("#content").show();
        }

        //onkeyup function
        $(document).keyup(function (event) {

            var userGuess = event.key;
            console.log("User Guess: " + userGuess);

            var alphIndex = $.inArray(userGuess, alphabet);
            console.log("Alpbabet Index: " + alphIndex);

            var correctIndex = $.inArray(userGuess, computerGuess);
            console.log("Correct Index: " + correctIndex);

            var guessIndex = $.inArray(userGuess, guesses);
            console.log("Guess Index: " + guessIndex);
            

            //if letter does not match, is a real letter, and hasn't already been guessed
            if ((computerGuess[j] !== userGuess) && (alphIndex !== -1) && (guessIndex === -1) && (correctIndex === -1)) {
                chances--;
                $('#chances-text').text(chances);
                guesses.push(userGuess);
                $('#guesses-text').text(guesses);
            }

            //if correct letter
            for (var j = 0; j < computerGuess.length; j++) {
                if (computerGuess[j] === userGuess) {
                     //replace blank with letter
                    currentWord[j] = userGuess;
                    $('#currentWord-text').text(currentWord.join(" "));
                }
            }

            //if user runs out of chances
            if (chances === 0) {
                losses ++;
                //show idiot sandwich gif and play again button
                $("#content").hide();
                $('#defeat').show();
                //play again button onclick
                $('#lose-button').on('click', function(){
                    $('#defeat').hide();
                    //reset function
                    reset();
                })
            }

            var currentWordStr = currentWord.join("")

            //if user fully fills in blanks
            if (computerGuess === currentWordStr) {
                //+1 wins
                wins++;
                //hide content div
                $("#content").hide();
                //show bon apetit gif and play again button
                $('#victory').show();
                //play again button onclick
                $('#win-button').on('click', function(){
                    $('#victory').hide();
                    //reset function
                    reset();
                })
            }
        });
      });
    
});