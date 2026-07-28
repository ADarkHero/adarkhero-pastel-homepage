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