// Created with js_combine.py by ADarkHero.


/* ========================== 
 common.js
========================== */

// Source - https://stackoverflow.com/a/5448595
// Posted by Bakudan, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-27, License - CC BY-SA 4.0
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}



function scrollToTop(){
	var container = document.getElementById('main-content');
	container.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}



function checkBtnForward(){
	if(!navigation.canGoForward){
		document.getElementById('btn-forward').classList.add("isDisabled");
		document.getElementById('btn-forward').classList.add("isDisabled");
	}
}



function copyToClipboard(text, id) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
    document.getElementById(id).innerHTML = "copied :)";
}


function showSpeechbubble(text){
    document.getElementById("speech-bubble").innerHTML = text;
    
    const bubble = document.getElementById("speech-bubble");
    bubble.classList.remove("hidden");
}

function closeSpeechbubble(text){
    const bubble = document.getElementById("speech-bubble");

    bubble.classList.add("hidden");
}


function changeRootIcon(){
    try{
        // Source - https://stackoverflow.com/a/8619946
        // Posted by Alex Turpin, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-08-14, License - CC BY-SA 3.0

        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);

        const smileys = [];
        smileys.push("1star.gif", "2stars.gif", "3stars.gif", "4stars.gif", "alert.gif", "arrow.gif", "arrow-l.gif", "awesome.gif", "balloon.gif", "bandaid.gif", "bat.gif", "battery.gif", "beggarshat.gif", "bell.gif", "biggrin.gif", "birthday.gif", "blockhead.gif", "bomb.gif", "book.gif", "brokenheart.gif", "cactus.gif", "calendar.gif", "candyheart.gif", "cd.gif", "censored.gif", "checkeredflag.gif", "checkmark.gif", "circustent.gif", "clock.gif", "cloud.gif", "clover.gif", "clown.gif", "coinflip.gif", "cold.gif", "colon3.gif", "companioncube.gif", "computer.gif", "computermouse.gif", "cookie.gif", "crackup.gif", "cutie.gif", "dandelion.gif", "darkside.gif", "dice.gif", "document.gif", "donotenter.gif", "down.gif", "earth.gif", "easteregg.gif", "envelope.gif", "esckey.gif", "eye-popping.gif", "facemask.gif", "filmstrip.gif", "fire.gif", "flask.gif", "flowers.gif", "fluffy.gif", "flyingspaghetti.gif", "folder.gif", "forbidden.gif", "fortuneteller.gif", "frog.gif", "ghost.gif", "graduatescap.gif", "greedy.gif", "half.gif", "headinsand.gif", "heart.gif", "heartbeat.gif", "hourglass.gif", "house.gif", "hyper.gif", "hypnotized.gif", "indifferent.gif", "innocent.gif", "jack-o-lantern.gif", "jester.gif", "jestershat.gif", "jigsaw.gif", "jump.gif", "key.gif", "knockout.gif", "lawnmower.gif", "lgbtpride.gif", "lifepreserver.gif", "lock.gif", "loser.gif", "loveletter.gif", "magnet.gif", "mailbox.gif", "mallet.gif", "mp3.gif", "necktie.gif", "newspaper.gif", "nosmoking.gif", "note.gif", "ocarina.gif", "owl.gif", "package.gif", "palette.gif", "paperbag.gif", "paperbag2.gif", "paperclip.gif", "partyhat.gif", "paw.gif", "peace.gif", "pencil.gif", "piechart.gif", "pig.gif", "pinky.gif", "pinocchio.gif", "point.gif", "pokeball.gif", "pokerchip.gif", "present.gif", "privateeye.gif", "propeller.gif", "rabbit.gif", "rainbow.gif", "raindrop.gif", "reminder.gif", "ring.gif", "rocket.gif", "rollingeyes.gif", "rotfl.gif", "ruler.gif", "sarcastic.gif", "scissors.gif", "scroll.gif", "shark.gif", "shoppingcart.gif", "shy.gif", "silenced.gif", "skull.gif", "slipper.gif", "slug.gif", "smallcraftwarning.gif", "snail.gif", "snowflake.gif", "socks.gif", "speaker.gif", "spin.gif", "star.gif", "stopsign.gif", "stormwarning.gif", "sun.gif", "sunrise.gif", "sweatdrop.gif", "telephone.gif", "thumbsup.gif", "tired.gif", "toiletpaper.gif", "toolbox.gif", "tornado.gif", "trafficcone.gif", "trash.gif", "treasure.gif", "tree.gif", "tropicalfish.gif", "tv.gif", "twocents.gif", "umbrella.gif", "up.gif", "upsidedown.gif", "violet.gif", "waffle.gif", "washingmachine.gif", "wide-eyed.gif", "wink.gif", "wizard.gif", "worm.gif", "wrench.gif", "yarn.gif", "yes.gif");

        while(smileys.length < day){
            day = day - smileys.length; //Support for less than 365 smileys
        }

        document.getElementById("root").style.backgroundImage = "url('img/smileys/" + smileys[day] + "')";
    }catch(error){
        console.log(error);
    }
}

//Used at links.html
function randomButton(){
    //Change variables accordingly
    var iterations = 15;
    var speed = 100;

    //Don't change these variables
    const buttonWall = document.getElementById('button-wall');
    var randomLink, randomImg = "";
    var i = 0;

    //search div buttonwall for a hrefs and imgs
    const imageLinks = Array.from(
        buttonWall.querySelectorAll('a[href] img')
    )
    .map(img => ({
        img: img.src,
        link: img.closest('a').href
    }));

    //Show X different buttons / button roulette
    for(i; i < iterations; i++){
        setTimeout(function(){
            randomImg = Math.floor(Math.random() * imageLinks.length);
            randomLink = imageLinks[randomImg]["link"];

            document.getElementById('randomButton-link').href = randomLink;
            document.getElementById('randomButton-link').removeAttribute("onclick");
            document.getElementById('randomButton-img').src = imageLinks[randomImg]["img"];
        }, i * speed);
    }

    //Open link in new tab
    if(document.getElementById("autoOpen").checked){
        setTimeout(function(){
            window.open(randomLink, '_blank');
        }, i * speed);
    }
}


function draggable(){
    let activeElement = null;
    let offsetX = 0;
    let offsetY = 0;

    document.querySelectorAll(".draggable").forEach(img => {

        img.style.position = "absolute"; //Set position
        img.style.cursor = "url('cursor/Move_2.cur'), grab"; //Set cursor

        img.addEventListener("pointerdown", (e) => {
            activeElement = img;

            offsetX = e.clientX - img.offsetLeft; //move leftright
            offsetY = e.clientY - img.offsetTop; //move updown

            img.style.cursor = "url('cursor/Move_1.cur'), grabbing";
        });
    });

    document.addEventListener("pointermove", (e) => {
        if (!activeElement) return;

        activeElement.style.left = (e.clientX - offsetX) + "px";
        activeElement.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("pointerup", () => {
        if (!activeElement) return;

        activeElement.style.cursor = "url('cursor/Move_2.cur'), grab";
        activeElement = null;
    });
}

/* ========================== 
 lightbox.js
========================== */

var lightbox = document.getElementById("lightbox");

lightbox.addEventListener("click", closeDialogHandler);

function closeDialogHandler(event){
	if (event.target === lightbox) {
		lightbox.close();
	}
}

function setLightboxText(text){
	//Reset content first. Looks cleaner while loading.
	document.getElementById('lightbox').innerHTML = "";
	
	document.getElementById('lightbox').innerHTML = text;
	
	lightbox.showModal();
}

function setLightboxImg(img){
	//Reset content first. Looks cleaner while loading.
	document.getElementById('lightbox').innerHTML = "";
	
	document.getElementById('lightbox').innerHTML = '<img src="' + img + '"></img>';
	
	lightbox.showModal();
}

function lightboxChangelog(){
	//Reset content first. Looks cleaner while loading.
	document.getElementById('lightbox').innerHTML = "";
	
	fetchPage('changelog', 'lightbox');
	
	lightbox.showModal();
}

function shareMe(){
	//Reset content first. Looks cleaner while loading.
	document.getElementById('lightbox').innerHTML = "";

	var param = document.getElementById('page-name').innerText;
	//Change path
	param = param.replace("html/", "?page=");
	param = param.replace(".html", "");

	url = 'https://www.adarkhero.de/' + param;
	
	document.getElementById('lightbox').innerHTML = '<h2>Share this page</h2><a href="' + url + '" target="_blank">' + url + '</a> ' + '<a onclick="copyToClipboard(\'' + url + '\', \'copy-btn-page\')" class="inline-button" id="copy-btn-page">copy</a>';
	
	lightbox.showModal();
}

/* ========================== 
 mouse.js
========================== */

var settingsLook = "default";

document.addEventListener('mousemove', function(event) {
    //Currently only supports setting picture in bottom right corner!
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var settingsHeight = 128;
    var settingsWidth = 128;

    //console.log(settingsLook);

    //look left
    if(event.clientY > windowHeight - settingsHeight && event.clientX < windowWidth - settingsWidth){
        if(settingsLook !== "left"){
            document.getElementById("settings-mops").src = "img/settings-mops-left.png";
            settingsLook = "left";
        }
    }
    //look lefttop
    else if(event.clientX < windowWidth - settingsWidth){
            if(settingsLook !== "lefttop"){
                document.getElementById("settings-mops").src = "img/settings-mops-lefttop.png";
                settingsLook = "lefttop";
            }
    }
    //look top
    else if(event.clientX > windowWidth-settingsWidth && event.clientY < windowHeight - settingsHeight){
        if(settingsLook !== "top"){
            document.getElementById("settings-mops").src = "img/settings-mops-top.png";
            settingsLook = "top";
        }
    }
    //hover animation
    else{
        if(settingsLook !== "animation"){
            document.getElementById("settings-mops").src = "img/settings-mops-animation.gif";
            settingsLook = "animation";

            //Play bark sound effect, if not disabled
            if(localStorage.getItem("disableSounds") !== 'true'){
                new Audio('mp3/bark.mp3').play();
            }  
        }
    }
      
    //Debug
    //console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
    //console.log('Windowwith:', windowWidth, 'Settingswidth:', settingsWidth);
});

/* ========================== 
 navigation.js
========================== */

	async function setPage(page, id="main-content"){	
		try{
			//Set page-name
			var slash = "/";
			if(page.startsWith("/")){ slash = "" } //Always add exactly one slash at the beginning
			document.getElementById('page-name').innerHTML = '<a href="javascript:void(0)" onclick="javascript:shareMe()">html' + slash + page + '.html</a>';

			//Play animation if it's inside the page (tab like system)
			if(id !== "main-content"){
				elem = document.getElementById(id);

				//Select all tablinks and remove the highlights from them
				const tablinks = document.getElementsByClassName("tablink");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].classList.remove("tab-selected");
				}

				//Hides current tab and shows a new one via callback function
				//Shows page, after old tab disappeared
				hideTab(elem, () => {
					showTab(elem);
					fetchPage(page, id);
				});
			}
			//Page reloads. We don't care about animation timing
			else{
				fetchPage(page, id);
			}

			//Highlights selected page
			document.getElementById(page).classList.add("tab-selected");
				
			//Wait until the modal was completly loaded
			if (page === "settings") {
				waitForElement("maximizeWindows", readSettingsToForm);
			}	
		}catch(error){
			console.log(error);
		}
	}
	
	async function fetchPage(page, id){
			//Fetch page content
			//fetch(page + '.html')
			fetch('html/' + page + '.html', { cache: 'no-store'})
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP ${response.status}`);
				}
				return response.text();
			})
			.then(html => {
				document.getElementById(id).innerHTML = html;
			})
			.catch(error => {
				console.error('Fetch error:', error);
			});
	}


	function resizePage(){
		var baseWidth = document.documentElement.style.getPropertyValue('--base-width');
		
		if(baseWidth != "100%"){
			document.documentElement.style.setProperty('--base-height', 'calc(100vh - var(--footer-height) - var(--header-height) - var(--distance-3) - var(--distance-3))');
			document.documentElement.style.setProperty('--base-width', '100%');
		}
		else{
			document.documentElement.style.setProperty('--base-height', 'var(--base-height-const)');
			document.documentElement.style.setProperty('--base-width', 'var(--base-width-const)');
		}	
	}
	


	function closePage(){
		document.getElementById('main-content').innerHTML = "";
		document.getElementById('page-name').innerHTML = ':(';
	}
	


	function waitForElement(id, callback) {
		const interval = setInterval(() => {
			const element = document.getElementById(id);

			if (element) {
				clearInterval(interval);
				callback();
			}
		}, 100); //check every 100 ms if the element was loaded successfully
	}



	function hideTab(tab, callback) {
		tab.classList.remove("slide-in");
		tab.classList.add("slide-out");

		tab.addEventListener("animationend", function () {
			tab.classList.remove("slide-out");

			if (callback) {
				callback();
			}
		}, { once: true });
	}



	function showTab(tab) {
		tab.classList.remove("slide-out");
		tab.classList.add("slide-in");
	}

/* ========================== 
 onload.js
========================== */

readSettings();
checkBtnForward();
changeRootIcon();


const page = findGetParameter("page") || "root"; //root is default page
setPage(page);	

//on dress up page load: make draggable images draggable
if(page === "fun-corner" || page === "fun-corner/dress-up"){
    waitForElement("draggable", draggable);
}

/* ========================== 
 pokeneko.js
========================== */

// Pokéneko v0.3 by https://james.nekoweb.org/
// https://jamesschoch.github.io/Pokeneko/

// Pokéneko is built using sprites from PDMCollab's Sprite Repository.
// https://sprites.pmdcollab.org

// This snippet uses sprites from https://sprites.pmdcollab.org/#/0279

//lets you disable the script via settings
//disable on mobile
if((localStorage.getItem("disablePokeneko") === 'false' || localStorage.getItem("disablePokeneko") === null) && window.innerWidth >= 1024){
    var pokemon = {"pokedex":"0279","shiny":false,"animData":{"Walk":{"$":{},"Name":"Walk","Index":"0","FrameWidth":"32","FrameHeight":"40","Durations":{"$":{},"Duration":["10","4","8","10","4","8"]},"animURL":"https://jamesschoch.github.io/Pokeneko/sprite/0279/Walk-Anim.png"},"Idle":{"$":{},"Name":"Idle","Index":"7","FrameWidth":"32","FrameHeight":"40","Durations":{"$":{},"Duration":["10","10"]},"animURL":"https://jamesschoch.github.io/Pokeneko/sprite/0279/Idle-Anim.png"}}};
    var trackerjson;
        pokemon.state = "none";
        var walkAnimInterval, idleAnimInterval;
        var dirlisting;
        var distancePx = 0;
        var CurrentMouseXPostion;
        var CurrentMouseYPostion;
        var scale = 1;
        var rotation = 0;
        var rotations = 8;
        var state;
        var laststate;
        var frameCounter;
        var animPlaying = false;
        var mouseIdleTime = 0;
        var anglevar;

        var sprite = document.createElement("div");
        sprite.id = "sprite";
        sprite.style.position = "fixed";
        sprite.style.zIndex = "1000000";
        sprite.style.width = "64px";
        sprite.style.height = "64px";
        sprite.style.pointerEvents = "none";
        sprite.style.top = "50%";
        sprite.style.left = "50%";

        document.body.appendChild(sprite);

        function getOffset(element) {
            if (!element.getClientRects().length) {
                return { top: 0, left: 0 };
            }

            var rect = element.getBoundingClientRect();
            var win = element.ownerDocument.defaultView;
            return (
                {
                    top: rect.top + win.pageYOffset,
                    left: rect.left + win.pageXOffset
                });
        }

        function timerIncrement() {
            mouseIdleTime = mouseIdleTime + 1;
        }

        function updateDistanceRotation() {
            var spriteX = getOffset(document.getElementById("sprite")).left + 32;
            var spriteY = getOffset(document.getElementById("sprite")).top + 32;
            distancePx = distance(spriteX, spriteY, CurrentMouseXPostion, CurrentMouseYPostion);
            anglevar = angle360(spriteX, spriteY, CurrentMouseXPostion, CurrentMouseYPostion);
            if (anglevar > 67.5 && anglevar < 112.5) {
                rotation = 0;
            } else if (anglevar > 22.5 && anglevar < 67.5) {
                rotation = 1;
            } else if (anglevar > 337.5 || anglevar < 22.5) {
                rotation = 2;
            } else if (anglevar > 292.5 && anglevar < 337.5) {
                rotation = 3;
            } else if (anglevar > 247.5 && anglevar < 292.5) {
                rotation = 4;
            } else if (anglevar > 202.5 && anglevar < 247.5) {
                rotation = 5;
            } else if (anglevar > 157.5 && anglevar < 202.5) {
                rotation = 6;
            } else if (anglevar > 112.5 && anglevar < 157.5) {
                rotation = 7;
            }
        }

        function addEvent(elm, evType, fn, useCapture) {
            if (elm.addEventListener) {
                elm.addEventListener(evType, fn, useCapture);
                return true;
            }
            else if (elm.attachEvent) {
                var r = elm.attachEvent('on' + evType, fn);
                return r;
            }
            else {
                elm['on' + evType] = fn;
            }
        }

        document.onmousemove = function (event) {
            CurrentMouseXPostion = event.pageX;
            CurrentMouseYPostion = event.pageY;
            updateDistanceRotation();
            mouseIdleTime = 0;
        }

        function angle(cx, cy, ex, ey) {
            var dy = ey - cy;
            var dx = ex - cx;
            var theta = Math.atan2(dy, dx);
            theta *= 180 / Math.PI;

            return theta;
        }

        function distance(cx, cy, ex, ey) {
            var dx = cx - ex;
            var dy = cy - ey;
            return Math.sqrt(dx * dx + dy * dy);
        }

        function angle360(cx, cy, ex, ey) {
            var theta = angle(cx, cy, ex, ey);
            if (theta < 0) theta = 360 + theta;
            return theta;
        }

        function setSprite(animName, frame) {
            var animData = pokemon.animData[animName];
            var sprite = document.getElementById("sprite");
            if (animName !== "Sleep") {
                var rotations = 8;
            } else {
                var rotations = 1;
            }
            sprite.style.backgroundImage = "url(" + animData.animURL + ")";
            sprite.style.backgroundSize = (animData.FrameWidth * scale * animData.Durations.Duration.length) + "px " + (animData.FrameHeight * scale * rotations) + "px";
            sprite.style.width = animData.FrameWidth * scale + "px";
            sprite.style.height = animData.FrameHeight * scale + "px";
            sprite.style.backgroundPosition = (0 - ((animData.FrameWidth * (frame % animData.Durations.Duration.length)) * scale)) + "px " + (0 - ((rotation * animData.FrameHeight) * scale)) + "px";
            sprite.style.imageRendering = "pixelated";

        }

        var runningAnim;
        var runningAnimName = "";

        function runAnim(animName) {
            if (pokemon.pokedex) {
                if (runningAnimName === animName) {
                    return;
                } else {
                    clearInterval(runningAnim);
                    var frames = [];
                    for (var i = 0; i < pokemon.animData[animName].Durations.Duration.length; i++) {
                        for (var j = 0; j < pokemon.animData[animName].Durations.Duration[i]; j++) {
                            frames.push(i);
                        }
                    }

                    runningAnimName = animName;
                    var i = 0;
                    runningAnim = setInterval(function () {
                        setSprite(animName, frames[i]);
                        i++;
                        if (i == frames.length) {
                            setSprite(animName, frames[i]);
                            i = 0;
                        }
                    }, 33);
                }
            }
        }

        var moveSprite = setInterval(function () {

            if (pokemon.pokedex) {
                if (distancePx >= 55) {
                    state = "Walk";
                    runAnim("Walk");

                } else {
                    state = "Idle";
                    runAnim("Idle");
                }
                if (state == "Walk") {

                    var sprite = document.getElementById("sprite");
                    var spriteX = getOffset(document.getElementById("sprite")).left;
                    var spriteY = getOffset(document.getElementById("sprite")).top;

                    var angle = angle360(spriteX, spriteY, CurrentMouseXPostion, CurrentMouseYPostion);
                    var dx = Math.cos(angle * Math.PI / 180) * 4;
                    var dy = Math.sin(angle * Math.PI / 180) * 4;
                    sprite.style.left = spriteX + dx + "px";
                    sprite.style.top = spriteY + dy + "px";

                }
                updateDistanceRotation();

                laststate = state;
            }
        }, 33);
}


/* ========================== 
 settings.js
========================== */

//Save values to local storage
function saveSettings(){
	localStorage.setItem("sepiaEffect", document.getElementById("sepiaEffect").value);
	localStorage.setItem("backgroundImage", document.getElementById("backgroundImage").value);

    localStorage.setItem("maximizeWindows", document.getElementById("maximizeWindows").checked)
    localStorage.setItem("disableAnimations", document.getElementById("disableAnimations").checked);
    localStorage.setItem("disablePokeneko", document.getElementById("disablePokeneko").checked);
    localStorage.setItem("backgroundVideo", document.getElementById("backgroundVideo").checked);
    localStorage.setItem("disableSounds", document.getElementById("disableSounds").checked);

    localStorage.setItem("color_scheme", document.querySelector('input[name="color_scheme"]:checked').value);
		
	window.location.replace("?page=settings");
}

//Read saved values
function readSettings(){
	if(localStorage.getItem("maximizeWindows") !== null){
		document.documentElement.style.setProperty('--sepia-value', localStorage.getItem("sepiaEffect"));

		if(localStorage.getItem("backgroundImage") !== null && localStorage.getItem("backgroundImage") !== ""){
			if(localStorage.getItem("backgroundVideo") === 'true'){
				document.getElementById("bg-video").src = localStorage.getItem("backgroundImage");
			}
			else{
				document.documentElement.style.setProperty('--background-image', 'url("' + localStorage.getItem("backgroundImage") + '")');
			}
		}
		
		if(localStorage.getItem("disableAnimations") === 'true'){
			document.documentElement.style.setProperty('--hover-effect', 'unset');
			document.documentElement.style.setProperty('--hover-effect-header', 'unset');
			document.documentElement.style.setProperty('--background-animation', 'unset');
			document.documentElement.style.setProperty('--mops-slide-in-animation', 'unset');
			document.documentElement.style.setProperty('--fade-in-animation', 'unset');
			document.documentElement.style.setProperty('--slide-in-animation', 'unset');
			document.documentElement.style.setProperty('--slide-out-animation', 'unset');
			document.documentElement.style.setProperty('--oppacity-animation', 'unset');
			document.documentElement.style.setProperty('--resize-button-animation', 'unset');
		}
		
		if(localStorage.getItem("maximizeWindows") === 'true'){
			resizePage();
		}

		var color_scheme = localStorage.getItem("color_scheme");
		if(color_scheme === "girlypop"){
			document.documentElement.style.setProperty('--color-yellow', '#f9d889');
			document.documentElement.style.setProperty('--color-orange', '#ffb9ad');
			document.documentElement.style.setProperty('--color-red', '#ffb1cb');
			document.documentElement.style.setProperty('--color-pink', '#ffd1ec');
			document.documentElement.style.setProperty('--color-violet', '#b2a6e4');
			document.documentElement.style.setProperty('--color-blue', '#92a9cf');
			document.documentElement.style.setProperty('--color-light-blue', '#92a9cf');
			document.documentElement.style.setProperty('--color-turquoise', '#8EECF5');
			document.documentElement.style.setProperty('--color-green', '#9ebd90');
			document.documentElement.style.setProperty('--color-light-green', '#9ebd90');
		}
		else if(color_scheme === "pastel-goth"){
			document.documentElement.style.setProperty('--color-black', '#333333');
			document.documentElement.style.setProperty('--color-gray', '#7a7a7a');
			document.documentElement.style.setProperty('--color-yellow', '#e2fbf9');
			document.documentElement.style.setProperty('--color-orange', '#ffe4fe');
			document.documentElement.style.setProperty('--color-red', '#eddcff'); 
			document.documentElement.style.setProperty('--color-pink', '#eddcff');
			document.documentElement.style.setProperty('--color-violet', '#d7b8ff');
			document.documentElement.style.setProperty('--color-blue', '#BECAD3'); 
			document.documentElement.style.setProperty('--color-light-blue', '#e2fbf9');
			document.documentElement.style.setProperty('--color-turquoise', '#e2fbf9');
			document.documentElement.style.setProperty('--color-green', '#eddcff');
			document.documentElement.style.setProperty('--color-light-green', '#eddcff');
		}
		else if(color_scheme === "dark"){
			document.documentElement.style.setProperty('--font-color', '#FAF9F6');
			document.documentElement.style.setProperty('--color-yellow', '#612D53');
			document.documentElement.style.setProperty('--color-orange', '#853953');
			document.documentElement.style.setProperty('--color-red', '#8B4000');
			document.documentElement.style.setProperty('--color-pink', '#C11C84');
			document.documentElement.style.setProperty('--color-violet', '#412B6B');
			document.documentElement.style.setProperty('--color-blue', '#2C2C2C');
			document.documentElement.style.setProperty('--color-light-blue', '#121358');
			document.documentElement.style.setProperty('--color-turquoise', '#121358');
			document.documentElement.style.setProperty('--color-green', '#2B5748');
			document.documentElement.style.setProperty('--color-light-green', '#2B5748');
		}
		else if(color_scheme === "grey"){
			document.documentElement.style.setProperty('--sepia-filter', 'grayscale(var(--sepia-value))');
			document.documentElement.style.setProperty('--font-color', '#FAF9F6');
			document.documentElement.style.setProperty('--color-yellow', '#656565');
			document.documentElement.style.setProperty('--color-orange', '#4d4d4d');
			document.documentElement.style.setProperty('--color-red', '#656565');
			document.documentElement.style.setProperty('--color-pink', '#4d4d4d');
			document.documentElement.style.setProperty('--color-violet', '#222222');
			document.documentElement.style.setProperty('--color-blue', '#000000');
			document.documentElement.style.setProperty('--color-light-blue', '#000000');
			document.documentElement.style.setProperty('--color-turquoise', '#000000');
			document.documentElement.style.setProperty('--color-green', '#222222');
			document.documentElement.style.setProperty('--color-light-green', '#222222');
		}
	}
}

//Read saved values to form
function readSettingsToForm(){
	if(localStorage.getItem("maximizeWindows") !== null){
		if(localStorage.getItem("maximizeWindows") === "true"){
			document.getElementById("maximizeWindows").checked = true;
		}
		
		if(localStorage.getItem("disableAnimations") === "true"){
			document.getElementById("disableAnimations").checked = true;
		}

		if(localStorage.getItem("disablePokeneko") === "true"){
			document.getElementById("disablePokeneko").checked = true;
		}

		if(localStorage.getItem("backgroundVideo") === "true"){
			document.getElementById("backgroundVideo").checked = true;
		}

		if(localStorage.getItem("disableSounds") === "true"){
			document.getElementById("disableSounds").checked = true;
		}

		document.getElementById("sepiaEffect").value = localStorage.getItem("sepiaEffect");
		document.getElementById("backgroundImage").value = localStorage.getItem("backgroundImage");
		document.getElementById(localStorage.getItem("color_scheme")).checked = true;
	}
}




/* ========================== 
 snail-race.js
========================== */

//Don't touch these ones.
let snailWinner = false;
let second = 0;
let count = 0;
let intervals = [];
let timeouts = [];
let goal = 0;
let alerts = document.getElementById("alerts");
console.log(alerts);

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
