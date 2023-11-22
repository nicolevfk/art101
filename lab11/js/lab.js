/*
    index.js - JavaScript for the Web
    Author: Nicole Van Fleet Kingery
    Date: 11/12/23
*/

// variables to make sure the function doesn't repeat
var sorted_item = "";
var anagramed_item = "";

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

// click listener for sorting button
$("#submit").click(function(){
    // get value of input field with val()
    const userName = $("#user-name").val();
    // now let's sort it
    userNameSorted = sortString(userName);
    // append a new div to our output div
    if (userNameSorted != sorted_item && userName.length != 0) {
        $("#output").append('<p>' + userName + ' sorted is ' + userNameSorted + '</p>');
        sorted_item = userNameSorted;
    }
});

// click listener for anagram button
$("#submit2").click(function(){
    // get value of input field with val()
    const userName = $("#user-name2").val();
    // now lets anagram it
    userNameAnagram = anagram(userName);
    // append a new div to our output div
    if (userName != anagramed_item && userName.length != 0) {
        $("#output").append('<p>An anagram of ' + userName + ' is ' + userNameAnagram + '</p>');
        anagramed_item = userName;
    } else if (userName.length != 0) {
        $("#output").append('<p>Another anagram of ' + userName + ' is ' + userNameAnagram + '</p>');
    }
});

// party button
// when button is clicked, class party gets added which in turn causes all the CSS to change
// runs party for a time period before stopping
// during time period, button text is replaced with countdown
$("#party-mode").click(function() {
    if (!$("body").hasClass("party")) {
        // runs animation and stops after a certain amount of time
        $("#party-mode").html("Ends in 15");
        var sec = 14;
        $("body").addClass("party");
        var timer = setInterval(function(){
            $("#party-mode").html("Ends in " + sec);
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                $("body").removeClass("party");
                $("#party-mode").html("Let's Party");
            }
        }, 1000);   
    }
});
