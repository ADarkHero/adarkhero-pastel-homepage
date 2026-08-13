//Save values to local storage
function saveSettings(){
	localStorage.setItem("sepiaEffect", document.getElementById("sepiaEffect").value);
	localStorage.setItem("backgroundImage", document.getElementById("backgroundImage").value);

    localStorage.setItem("maximizeWindows", document.getElementById("maximizeWindows").checked)
    localStorage.setItem("disableAnimations", document.getElementById("disableAnimations").checked);
    localStorage.setItem("disablePokeneko", document.getElementById("disablePokeneko").checked);
    localStorage.setItem("backgroundVideo", document.getElementById("backgroundVideo").checked);
	
	alert("Settings saved!");
	
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
		}
		
		if(localStorage.getItem("maximizeWindows") === 'true'){
			resizePage();
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

		document.getElementById("sepiaEffect").value = localStorage.getItem("sepiaEffect");
		document.getElementById("backgroundImage").value = localStorage.getItem("backgroundImage");
	}
}


