// index.js - Anon Functions and Callbacks
// Author: Nicole Van Fleet Kingery
// Date: 11/3/23

// set arrays
var a = [15, 26, 71, 5, 23, 100];
var b = ["henry", "tully", "bart", "kingsly", "elliot", "martha"];

// function
function quarter(n) {
    var result = n / 4;
    console.log("A quarter of", n, "is", result);
    return result;
};

// map using defined function and anon function
var resultA = a.map(quarter)
var resultB = b.map(function capitalize(n) {
    result = n.charAt(0).toUpperCase() + n.slice(1);
    console.log(n + ", more like " + result);
    return result;
});

// LAB 14 DEBUGGING, function that orders things with spaces
function spaced(list) {
    for (item in list) {
        if (item == 0) {
            var str = list[item];
        } else {
            str = str + ", " + list[item];
        }
    }
    return str
}

// print output in html
var outputEl = document.getElementById("output"); 
outputEl.innerHTML = "Array of numbers: " + spaced(a) + "</br>Those numbers quartered: " + spaced(resultA) +
                    "</br></br>Array of names: " + spaced(b) + "</br>Those names capitalized: " + spaced(resultB);
