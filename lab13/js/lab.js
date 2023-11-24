/*
    index.js - JavaScript for the Web
    Author: Nicole Van Fleet Kingery
    Date: 11/22/23
*/

function FizzBuzz() {
    for (var n = 0; n <= 120; n++) {
        word = ""
        if (n % 3 == 0) {
            word = "Fizz";
        }
        if (n % 5 == 0) {
            word = word + "Buzz";
        }
        if (n % 7 == 0) {
            word = word + "Boom";
        }
        if (word.length > 0) {
            word = word + "!";
        }
        $("#output").append(n + " - " + word + "</br>")
    }
}

