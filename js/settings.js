//Save values to local storage
function saveSettings(){
    localStorage.setItem("maximizeWindows", document.getElementById("maximizeWindows").checked);
    localStorage.setItem("sepiaEffect", document.getElementById("sepiaEffect").value);
    localStorage.setItem("disableAnimations", document.getElementById("disableAnimations").checked);
	
	alert("Settings saved!");
	
	readSettings();
}

//Read saved values
function readSettings(){
	if(localStorage.getItem("maximizeWindows") !== null){
		document.documentElement.style.setProperty('--sepia-value', localStorage.getItem("sepiaEffect"));
		
		if(localStorage.getItem("disableAnimations") === 'true'){
			document.documentElement.style.setProperty('--hover-effect', 'unset');
			document.documentElement.style.setProperty('--hover-effect-header', 'unset');
			document.documentElement.style.setProperty('--background-animation', 'unset');
			document.documentElement.style.setProperty('--mops-slide-in-animation', 'unset');
			document.documentElement.style.setProperty('--fade-in-animation', 'unset');
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

		document.getElementById("sepiaEffect").value = localStorage.getItem("sepiaEffect");
	}
}


