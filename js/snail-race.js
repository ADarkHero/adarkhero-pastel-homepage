//Don't touch these ones.
let snailWinner = false;
let second = 0;
let count = 0;
let intervals = [];
let timeouts = [];
let goal = 0;

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
	var alerts = document.getElementById("alerts");
	alerts.innerHTML = "";
	clearAllIntervals(); //Clear stopwatch and checkSnailWinner
	clearAllTimeouts(); //Clear queued movement actions
	var element = document.getElementById("goal");
	var rect = element.getBoundingClientRect();
	goal = rect.left; //check goal position

	//reset snails
	for(let i = 1; i <= 10; i++){
		var elem = document.getElementById("snail" + i);
		elem.style.transition = "left 0s linear";
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

			for(let j = 0; j <= 100 / movementMin; j++){
				moveSnail("snail" + i, j * movementSpeed * 1000, j);
			}
		}, 250);	
	}	
}



function moveSnail(id, delay, mod){
	timeouts.push(setTimeout(function(){	
		let elem = document.getElementById(id);
		let pos = elem.style.left;
		pos = Number(pos.replace("%", ""));

		//Only do calcs if the snail isn't in it's goal
		if(pos !== goalPercent){
			//min to max% per tick
			let random = Math.floor(Math.random() * (movementMax - movementMin) * 100) + (movementMin * 100);	
			//every tick should make the snail slightly faster on average
			random = random / 100 + (mod * modMulti);

			posnew = Number(pos) + random; //One third of the race with every tick

			//If a snail overshoots, walk back fastly
			if(pos >= goalPercent){
				elem.style.transition = "left " + movementSpeed / 3 + "s linear";
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
				var alerts = document.getElementById("alerts");
				alerts.innerHTML = "'" + elem.title + "' won the race in " + second + "." + count + " seconds!";
				snailWinner = true;
				clearAllIntervals();
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