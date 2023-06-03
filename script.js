//your code here
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
 let time = new Date();

 let seconds = time.getSeconds();
 let minutes = time.getMinutes();
 let hour = time.getHours();

	let secondDeg = (seconds*360/60)+90;
	let minDeg = (minutes*6+seconds) % 360 + 90;
	let hourDeg =  (30 * hour + minutes / 2) % 360 + 90; 

	secondHand.style.transform = `rotate(${secondDeg}deg)`;
	minsHand.style.transform = `rotate(${minDeg}deg)`;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);

setDate();