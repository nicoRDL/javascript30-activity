const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

    const nowDate = new Date();

    const secDegrees = ((nowDate.getSeconds() / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minsDegrees = ((nowDate.getMinutes() / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hourDegrees = ((nowDate.getHours() / 12) * 360) + ((nowDate.getMinutes()/60)*30)+ 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();