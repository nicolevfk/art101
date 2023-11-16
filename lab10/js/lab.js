/*
    index.js - JavaScript for the Web
    Author: Nicole Van Fleet Kingery
    Date: 11/12/23
*/

// variable for call and response
var response = false;

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();

    // if response is false, grey bubble on left, if response is true, green bubble on right
    if (response == false) {
        // append a new div to our output div
        $("#output").append('<div class="text"><p>' + newText + '</p></div>');
        response = true;
    } else {
        // append a new div to our output div
        $("#output").append('<div class="response"><p>' + window.prompt() + '</p></div>');
        response = false;
    }
});