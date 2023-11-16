/*
    index.js - JavaScript for the Web
    Author: Nicole Van Fleet Kingery
    Date: 11/12/23
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.toLowerCase().split('').sort().join('');
  }

// Sorts the characters of a string into an anagram.
function anagram(inputString) {
    var array = inputString.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('').toLowerCase().replace( /\b./g, function(a) { return a.toUpperCase(); });
}

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    userNameSorted = sortString(userName);
    // now lets anagram it
    userNameAnagram = anagram(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>Sorted letters: ' + userNameSorted + '</br> Anagram: ' + userNameAnagram + '</p></div>');
});