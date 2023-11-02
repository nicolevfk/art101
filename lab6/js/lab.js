// index.js - Using Arrays and Objects
// Author: Nicole Van Fleet Kingery
// Date: 10/26/23

// Variables
var myTransport = [' car', ' bus', ' walking']

// Oject for Main Ride
var myMainRide = {
  make: 'Honda',
  model: 'CR-V',
  color: 'white',
  year: 2019,
  age: function() {
      return 2023 - this.year
  }
}

// Writing Array in Document
document.writeln("My forms of transport include: ", myTransport, "</br>");

// To Write Object into Document
document.writeln("My dad's car: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
    