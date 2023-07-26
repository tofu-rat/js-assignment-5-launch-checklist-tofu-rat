// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let div = document.getElementById("missionTarget");
   div.innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons:  ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
};

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
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot.value === "Empty" || copilot.value === "Empty" || fuelLevel.value === "Empty" || cargoLevel.value === "Empty")){
        alert("All Fields Required!");
    } else if (validateInput(pilot.value === "Is a Number" || copilot.value === "Is a Number")){
        alert("Please enter a valid name!");
    } else if (validateInput(fuelLevel.value === "Not a Number" || cargoLevel.value === "Not a Number")){
        alert("Error: Please enter a valid number");
    } else {
        list.style.visibility = "visible";
        copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch!`
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch! `
    };

    if(fuelLevel.value<10000 && cargoLevel.value>10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "WARNING! Fuel Level Too Low for Launch";
        cargoStatus.innerHTML = "WARNING! Cargo Level Too High for Launch"
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";
    } else if(fuelLevel.value>= 10000 && cargoLevel.value>10000){
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "WARNING! Cargo Level Too High for Launch"
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";
 } else if(fuelLevel.value<10000 && cargoLevel.value<= 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "WARNING! Fuel Level Too Low for Launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";
 }else{
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "#419F6A";
 };
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();  
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
