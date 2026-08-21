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
	
	document.getElementById('lightbox').innerHTML = document.getElementById('update-nav').innerHTML;
	
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