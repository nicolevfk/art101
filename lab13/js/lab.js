/*
    index.js - JavaScript for the Web
    Author: Nicole Van Fleet Kingery
    Date: 11/22/23
*/

// get values and sort them in a map with {num: word} for every one where both exist (used some code from Wes' page)
function getFactors() {
    var factors = {};
    for (factor = 1; factor <= 4; factor++) {
        numId = "num" + factor;
        wordId = "w" + factor;
        numValue = document.getElementById(numId).value;
        wordValue = document.getElementById(wordId).value;
        if (numValue && wordValue) {
            factors[numValue] = wordValue;
        }
    }
    return factors
}

function FizzBuzz(factors) {
    maxValue = document.getElementById("max").value;
    console.log(maxValue);
    for (var n = 0; n <= maxValue; n++) {
        var word = "";
        // factors is {number: text}
        // for every number in factors, it checks to see if it's divisible by the current n, and 
        // if it is, it attaches the text associated with the number to the current string var "word"
        for (i in factors) {
            if (n % i == 0) {
                word += factors[i];
            }
        }
        // if it's the first item, it uses html, otherwise it appends the word value
        if (n == 0) {
            $("#output").html(n + " - " + word + "!</br>");
        } else if (word.length > 0) {
            $("#output").append(n + " - " + word + "!</br>");
        } else {
            $("#output").append(n + "</br>");
        }
    }
}

// get input from input fields when button is clicked
$("#button").click(function() {
    // get inputs and run FizzBuzz function
    FizzBuzz(getFactors());
});
