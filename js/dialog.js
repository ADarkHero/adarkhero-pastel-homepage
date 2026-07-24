const dialog = document.getElementById('dialog');
	
	dialog.addEventListener("click", closeDialogHandler);
	
	
	function closeDialogHandler(event){
		if (event.target === dialog) {
			dialog.close();
		}
	}

	
	
	function closeDialog(){
		dialog.close();
	}
	
	
	
	function setPage(page){
		//Reset content first. Looks cleaner while loading.
		document.getElementById('dialog-content').innerHTML = "";
		
		//fetch(page + '.html')
		fetch('html/' + page + '.html', { cache: 'no-store'})
			.then(response => response.text())
			.then(html => {
				document.getElementById('dialog-content').innerHTML = html;
			})
			.catch(error => console.error('Error:', error));
			
		document.getElementById('page-name').innerHTML = '<a href="/' + page + '.html" target="_blank">html/' + page + '.html</a>';
		dialog.showModal();
		
		//Wait until the modal was completly loaded
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (page === "settings") {
					readSettingsToForm();
				}
				
				readDialogSettings();
			});
		});
		
	}
	
	
	
	function resizeDialog(){
		var inlineWidth = document.getElementById('dialog').style.width;
		
		if(inlineWidth != "100%"){
			document.getElementById('dialog').style.width = '100%';
			document.getElementById('dialog').style.height = '100%';
			document.getElementById('dialog').style.maxWidth = '100%';
			document.getElementById('dialog').style.maxHeight = '100%';
			dialog.removeEventListener("click", closeDialogHandler);
		}
		else{
			dialog.addEventListener("click", closeDialogHandler);
			document.getElementById('dialog').style.width = '80%';
			document.getElementById('dialog').style.height = null;
			document.getElementById('dialog').style.maxWidth = '80%';
			document.getElementById('dialog').style.maxHeight = null;
		}	
	}