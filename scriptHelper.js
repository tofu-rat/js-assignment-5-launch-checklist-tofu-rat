// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let userInput = Number(testInput);

   if (userInput === ""){
    return "Empty"
   } else if (isNaN(userInput === true)){
    return "Not a Number"
   } else if(isNaN(userInput)=== false){
    return "Is a Number"
   }
       
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    
    let pilotStatus = document.getElementById.pilotStatus
    let copilotStatus = document.getElementById.copilotStatus
    let fuelStatus = document.getElementById.fuelStatus
    let launchStatus = document.getElementById.launchStatus
    let faultyItems = document.getElementById.faultyItems

    if (validateInput(pilot === "Empty" || copilot === "Empty" || fuelLevel === "Empty" || cargoMass === "Empty")){
        alert("All Fields Required!");
    } else if (validateInput(pilot === "Is a Number" || copilot === "Is a Number"){
        alert("Please enter a valid name!");
    } else if (validateInput(fuelLevel=== "Not a Number" || cargoLevel === "Not a Number")){
        alert("Error: Please enter a valid number");
    } else {
        list.style.visibility = visible;
        copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch!`
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch! `
    };
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
