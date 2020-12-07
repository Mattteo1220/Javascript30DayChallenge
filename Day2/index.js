let secondHand = document.querySelector("#second-hand");
let minuteHand = document.querySelector("#minute-hand");
let hourHand = document.querySelector("#hour-hand");

function setDate(){
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hour = now.getHours();

    let secondDegrees = ((seconds / 60) * 360) + 90;
    let minuteDegrees = ((minutes / 60) * 360) + 90;
    let hourDegrees = ((hour / 12) * 360) + 90;
    console.log(seconds);

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000)