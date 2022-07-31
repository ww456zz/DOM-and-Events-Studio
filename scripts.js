// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");

    takeoff.addEventListener('click', event => {
        let x = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (x) {
            shuttleBackground.style.backgroundColor = "blue";
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000

            }
    });

    landing.addEventListener('click', event => {
        let landingWarning = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (landingWarning) {
            flightStatus.innerHTML = "the shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    abort.addEventListener('click', event => {
        let abortWarning = window.confirm("Confirm that you want to abort the mission.");
        if (abortWarning) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    let high = 0;
    let moveBy = 10;
    up.addEventListener('click', event => {
        rocket.style.position = "absolute";
        rocket.style.top += moveBy;
        //rocket.style.left = rocket.style.left + 10;
        high += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = high;
    })

    down.addEventListener('click', event => {
        rocket.style.position = "relative";
        rocket.style.top -= moveBy;
        if (high>=10000) {high -= 10000};
        document.getElementById("spaceShuttleHeight").innerHTML = high;
    })

    left.addEventListener('click', event => {
        rocket.style.position = "absolute";
        rocket.style.left += moveBy;
    })

    right.addEventListener('click', event => {
        rocket.style.position = "relative";
        rocket.style.left -= moveBy;
    })

}
window.addEventListener("load", init);