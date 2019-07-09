$(document).ready(function () {

    $("#content").hide();

    $("#intro-button").click(function(){
        $("#intro").hide();
        $("#content").show();

        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var computerChoices = [
            "beef wellington",
            "herb omelette",
            "lamb sauce",
            "lobster tortellini",
            "toffee pudding",
            "stuffed pork tenderloin",
            "english garden salad"
            ];
    
        var chances = 10;
        var wins = 0;
        var losses = 0;
        var guesses = [];

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("Computer guess: " + computerGuess);

        $('#chances-text').text(chances);
        $('#wins-text').text(wins);
        $('#losses-text').text(losses);
        $('#guesses-text').text(guesses);

        //reset function
            //computer selects random string from computerChoices array
            //print blanks that correspond to string length of chosen string
                //insert spaces where applicable. spaces should not count as characters that users must guess
            //var chances restored to 10
            //empty guesses array
            //show content div

        //if user fully fills in blanks
            //+1 wins
            //hide content div
            //show bon apetit gif and play again button
            //play again button onclick
                //reset function

        //if user runs out of chances
            //+1 losses
            //hide content div
            //show idiot sandwich gif and play again button
            //play again button onclick
                //reset function
        
        //onkeyup function
            //if letter has not been guessed and is an actual letter
                //if correct letter
                    //replace blank with letter
                    //guessed letter should not be able to be pressed again and count as a choice

                //else if incorrect letter
                    //-1 from chances
                    //guessed letter should not be able to be pressed again and count as a choice
      });
    
});