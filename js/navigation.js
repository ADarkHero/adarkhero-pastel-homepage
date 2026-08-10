	function setPage(page, id="main-content"){		
		//fetch(page + '.html')
		fetch('html/' + page + '.html', { cache: 'no-store'})
			.then(response => response.text())
			.then(html => {
				document.getElementById(id).innerHTML = html;
			})
			.catch(error => console.error('Error:', error));
			
		//Set page-name
		var slash = "/";
		if(page.startsWith("/")){ slash = "" } //Always add exactly one slash at the beginning
		document.getElementById('page-name').innerHTML = '<a href="?page=' + page + '" target="_blank">html' + slash + page + '.html</a>';
		
		//Select all tablinks and remove the highlights from them
		const tablinks = document.getElementsByClassName("tablink");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].classList.remove("tab-selected");
		}

		//Highlights selected page
		document.getElementById(page).classList.add("tab-selected");
		
		//Wait until the modal was completly loaded
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (page === "settings") {
					readSettingsToForm();
				}
			});
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
	