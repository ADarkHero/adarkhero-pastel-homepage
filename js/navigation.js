	function setPage(page, id="main-content"){	
		//Set page-name
		var slash = "/";
		if(page.startsWith("/")){ slash = "" } //Always add exactly one slash at the beginning
		document.getElementById('page-name').innerHTML = '<a href="?page=' + page + '" target="_blank">html' + slash + page + '.html</a>';

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
	
	}
	
	function fetchPage(page, id){
		//Fetch page content
		//fetch(page + '.html')
		fetch('html/' + page + '.html', { cache: 'no-store'})
			.then(response => response.text())
			.then(html => {
				document.getElementById(id).innerHTML = html;
			})
			.catch(error => console.error('Error:', error));
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