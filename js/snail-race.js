//Don't touch these ones.
let snailWinner = false;
let second = 0;
let count = 0;
let intervals = [];
let timeouts = [];
let goal = 0;
let alerts = document.getElementById("alerts");

//Variables (config game speed)
const movementMin = 5;
const movementMax = 10;
const movementSpeed = 3; //how long (in seconds) it takes the snail to move x% (movementMin/Max) of the race
const modMulti = 1; //snails move faster after each movement action; raise this value to make them even fasterer
const goalPercent = 96.5;


function startSnailRace(){
	//Reset stuff
	second = 0; //reset stop watch
	count = 0; //reset stop watch
	snailWinner = false;
	alerts = document.getElementById("alerts");
	alerts.innerHTML = "";
	clearAllIntervals(); //Clear stopwatch and checkSnailWinner
	clearAllTimeouts(); //Clear queued movement actions
	var element = document.getElementById("goal");
	var rect = element.getBoundingClientRect();
	goal = rect.left; //check goal position
	alerts.innerHTML = "3... 2... 1... The doors have opened and the race has started!";

	//reset snails
	for(let i = 1; i <= 10; i++){
		var elem = document.getElementById("snail" + i);
		elem.style.transition = "left 0.25s linear";
		elem.style.animation = "";
		elem.style.left = "2%"; //starting position
	}

	intervals.push(setInterval(checkSnailWinner, 100)); //check every 100ms if a snail won

	intervals.push(setInterval(stopWatch, 10)); //trigger stopwatch every 10 ms

	//iterate throught each snail
	for(let i = 1; i <= 10; i++){	
		//max of 10 movement actions
		setTimeout(function(){
			var elem = document.getElementById("snail" + i);
			elem.style.transition = "left " + movementSpeed + "s linear";
			elem.style.animation = "snailMove 2s linear infinite";

			for(let j = 0; j <= 100 / movementMin; j++){
				moveSnail("snail" + i, j * movementSpeed * 1000, j);
			}
		}, 500);	
	}	
}



function moveSnail(id, delay, mod){
	timeouts.push(setTimeout(function(){	
		let elem = document.getElementById(id);
		let pos = elem.style.left;
		pos = Number(pos.replace("%", ""));

		//Only do calcs if the snail isn't in it's goal
		if(pos !== goalPercent){
			displayRandomMessage(id);

			//min to max% per tick
			let random = Math.floor(Math.random() * (movementMax - movementMin) * 100) + (movementMin * 100);	
			//every tick should make the snail slightly faster on average
			random = random / 100 + (mod * modMulti);

			posnew = Number(pos) + random; //One third of the race with every tick

			//If a snail overshoots, walk back fastly
			if(pos >= goalPercent){
				elem.style.transition = "left " + movementSpeed / 3 + "s linear";
				elem.style.animation = "";
				elem.style.left = goalPercent + "%";
			}
			else{
				elem.style.left = posnew + "%";
			}	
		}
	}, delay))
}



function stopWatch() {
	count++;

	if (count == 100) {
		second++;
		count = 0;
	}

	let secString = second;
	let countString = count;

	if (second < 10) {
		secString = "0" + secString;
	}

	if (count < 10) {
		countString = "0" + countString;
	}

	document.getElementById('sec').innerHTML = secString;
	document.getElementById('count').innerHTML = countString;
}



function checkSnailWinner(){
	if(!snailWinner){
		//iterate throught each snail
		for(let i = 1; i <= 10; i++){
			const elem = document.getElementById("snail" + i);
			var rect = elem.getBoundingClientRect();

			//get position of snail (right edge)
			let pos = rect.right;

			//First snail to touch left side of goal wins
			if(pos >= goal){
				alerts.innerHTML = "<b>" + elem.title + " won the race in " + second + "." + count + " seconds!</b>";
				snailWinner = true;
				clearAllIntervals();
			}
		}
	}
}



function displayRandomMessage(id){
	if(!snailWinner){
		let random = Math.floor(Math.random() * 1000);

		//10% chance to display a message
		if(random < 100){
			const elem = document.getElementById(id);

			if(random <= 1){
				alerts.innerHTML = elem.title + " pulled a ssr gacha!";
			}
			if(random <= 10){
				alerts.innerHTML = elem.title + " tries to activate their ultimate ability!";
			}
			if(random <= 13){
				alerts.innerHTML = elem.title + " has 13 as their favorite number.";
			}
			else if(random <= 14){
				alerts.innerHTML = "Meow.";
			}
			else if(random <= 20){
				alerts.innerHTML = elem.title + " found a shiny pebble!";
			}
			else if(random <= 25){
				alerts.innerHTML = elem.title + " seems to be struggeling!";
			}
			else if(random <= 30){
				alerts.innerHTML = elem.title + " didn't click 'stamina training' enought times!";
			}
			else if(random <= 35){
				alerts.innerHTML = elem.title + " T-posed for dominance.";
			}
			else if(random <= 40){
				alerts.innerHTML = elem.title + " knows the first 69 numbers of pi.";
			}
			else if(random <= 42){
				alerts.innerHTML = elem.title + " knows the answer to the ultimate question of life, the universe, and everything.";
			}
			else if(random <= 45){
				alerts.innerHTML = elem.title + " rolled a D20. They can't see the result tho.";
			}
			else if(random <= 50){
				alerts.innerHTML = elem.title + " saw a black cat. This is a sign of luck!";
			}
			else if(random <= 55){
				alerts.innerHTML = elem.title + " almost fell on their knees.";
			}
			else if(random <= 60){
				alerts.innerHTML = elem.title + " is humming the superperforator ad song.";
			}
			else if(random <= 62){
				alerts.innerHTML = elem.title + " punched a nazi.";
			}
			else if(random <= 68){
				alerts.innerHTML = elem.title + " is snaking around the racetrack.";
			}
			else if(random <= 69){
				alerts.innerHTML = elem.title + " is nice.";
			}
			else if(random <= 70){
				alerts.innerHTML = elem.title + " is not so nice.";
			}
			else if(random <= 75){
				alerts.innerHTML = elem.title + " made an extremely funny joke.";
			}
			else if(random <= 80){
				alerts.innerHTML = elem.title + " helped a grandma pass the street.";
			}
			else if(random <= 82){
				alerts.innerHTML = elem.title + " hit a homerun!";
			}
			else if(random <= 85){
				alerts.innerHTML = elem.title + " played en passant.";
			}
			else if(random <= 86){
				alerts.innerHTML = elem.title + " decided to watch a new anime.";
			}
			else if(random <= 90){
				alerts.innerHTML = elem.title + " picked the pacifist route.";
			}
			else if(random <= 91){
				alerts.innerHTML = elem.title + " picked the genocide route.";
			}
			else{
				alerts.innerHTML = elem.title + " is a cool snek.";
			}	
		}	
	}
}



function clearAllIntervals(){
	// Source - https://stackoverflow.com/a/63182466
	// Posted by ashish siddhu
	// Retrieved 2026-09-08, License - CC BY-SA 4.0

	// Clear multiple Intervals
	intervals.map((a) => {
		clearInterval(a);
		intervals = [];
	})
}

function clearAllTimeouts(){
	// Source - https://stackoverflow.com/a/63182466
	// Posted by ashish siddhu
	// Retrieved 2026-09-08, License - CC BY-SA 4.0

	// Clear multiple Intervals
	timeouts.map((a) => {
		clearTimeout(a);
		timeouts = [];
	})
}