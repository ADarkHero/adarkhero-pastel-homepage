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
    console.log("draggable");
    let activeElement = null;
    let offsetX = 0;
    let offsetY = 0;

    document.querySelectorAll(".draggable").forEach(img => {

        img.style.position = "absolute";
        img.style.cursor = "grab";

        img.addEventListener("mousedown", (e) => {
            activeElement = img;

            offsetX = e.clientX - img.offsetLeft;
            offsetY = e.clientY - img.offsetTop;

            img.style.cursor = "grabbing";
        });
    });

    document.addEventListener("mousemove", (e) => {
        if (!activeElement) return;

        activeElement.style.left = (e.clientX - offsetX) + "px";
        activeElement.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        if (!activeElement) return;

        activeElement.style.cursor = "grab";
        activeElement = null;
    });
}