//Save values to local storage
function saveSettings(){
	localStorage.setItem("sepiaEffect", document.getElementById("sepiaEffect").value);
	localStorage.setItem("backgroundImage", document.getElementById("backgroundImage").value);

    localStorage.setItem("maximizeWindows", document.getElementById("maximizeWindows").checked)
    localStorage.setItem("disableAnimations", document.getElementById("disableAnimations").checked);
    localStorage.setItem("disablePokeneko", document.getElementById("disablePokeneko").checked);
    localStorage.setItem("backgroundVideo", document.getElementById("backgroundVideo").checked);

    localStorage.setItem("color_scheme", document.querySelector('input[name="color_scheme"]:checked').value);
	
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
		document.getElementById(localStorage.getItem("color_scheme")).checked = true;
	}
}


