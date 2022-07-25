// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const takeoff = document.getElementById("takeoff");


    takeoff.addEventListener('click', event => {
        let x = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (x) {
            shuttleBackground.style.backgroundColor = "blue";
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000

            }
    })


}
window.addEventListener("load", init);