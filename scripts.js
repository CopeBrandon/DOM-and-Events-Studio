// Write your JavaScript code here.
// Remember to pay attention to page loading!
addEventListener("load", function(){
    let takeOff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let flightDisplay = document.getElementById("flightDisplay");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let calcHeight = 0;
    let calcWidth = 0;
    let rocket = document.getElementById("rocket");

    takeOff.addEventListener("click", function(){
        if(confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            calcHeight = 10;
            spaceShuttleHeight.innerText = calcHeight*1000;
            rocket.style.bottom = calcHeight + "px";
            rocket.style.left = "0px";
        }
    });
    landing.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        calcHeight = 0;
        spaceShuttleHeight.innerText = calcHeight*1000;
        rocket.style.bottom = "0px";
        rocket.style.left = "0px";
    });
    missionAbort.addEventListener("click", function(){
        if(confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            calcHeight = 0;
            spaceShuttleHeight.innerText = calcHeight*1000;
            rocket.style.bottom = "0px";
            rocket.style.left = "0px";
        }
    });


    up.addEventListener("click", function(){
        let windowHeight = shuttleBackground.clientHeight-75;
        if(flightStatus.innerText === "Shuttle in flight."){
            if(calcHeight>=windowHeight){
                alert("At maximum height.");
            } else {
                let pxChange = calcHeight;
                pxChange+=10;
                calcHeight = pxChange;
                pxChange = pxChange+"px";
                rocket.style.bottom = pxChange;
                spaceShuttleHeight.innerText = calcHeight*1000;
            }
        } else {
            alert("Shuttle not in flight.");
        }
    });
    down.addEventListener("click", function(){
        if(flightStatus.innerText === "Shuttle in flight."){
            if(calcHeight<=0){
                alert("At minimum height.");
            }else{
                let pxChange = calcHeight;
                pxChange-=10;
                calcHeight = pxChange;
                pxChange = pxChange+"px";
                rocket.style.bottom = pxChange;
                spaceShuttleHeight.innerText = calcHeight*1000;
            }
        } else {
            alert("Shuttle not in flight.");
        }
    });
    left.addEventListener("click", function(){
        if(flightStatus.innerText === "Shuttle in flight."){
            if(calcWidth<=0){
                alert("At left boundary.");
            }
            else{
                let pxChange = calcWidth;
                pxChange-=10;
                calcWidth = pxChange;
                pxChange = pxChange+"px";
                rocket.style.left = pxChange;
            }
        } else {
            alert("Shuttle not in flight.");
        }
    });
    right.addEventListener("click", function(){
        let windowWidth = shuttleBackground.clientWidth-75;
        if(flightStatus.innerText === "Shuttle in flight."){
            if(calcWidth>=windowWidth){
                alert("At right boundary");
            } else{
            let pxChange = calcWidth;
            pxChange+=10;
            calcWidth = pxChange;
            pxChange = pxChange+"px";
            rocket.style.left = pxChange;
            }
        } else {
            alert("Shuttle not in flight.");
        }
    });
});