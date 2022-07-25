// Write your JavaScript code here.
// Remember to pay attention to page loading!
const flightStatus = document.getElementById("flightStatus");
const background = document.getElementById("shuttleBackground");
const takeoff = document.getElementById("takeoff");
init=>{
    takeoff.addEventListener("click", event => {
        let x = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (x) {
            flightStatus.innerHTML("Shuttle in flight.");
            event.target.style.backgroundColor = "blue"
            
            }
    })


}
window.addEventListener("load", init)