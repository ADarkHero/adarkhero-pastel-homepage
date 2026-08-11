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