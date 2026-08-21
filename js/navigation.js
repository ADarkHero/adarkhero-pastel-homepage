	async function setPage(page, id="main-content"){	
		try{
console.log("nav start");
			//Set page-name
			var slash = "/";
			if(page.startsWith("/")){ slash = "" } //Always add exactly one slash at the beginning
			document.getElementById('page-name').innerHTML = '<a href="javascript:void(0)" onclick="javascript:shareMe()">html' + slash + page + '.html</a>';
console.log("nav set page-name");
			//Play animation if it's inside the page (tab like system)
			if(id !== "main-content"){
console.log("nav id !== main content");
				elem = document.getElementById(id);

				//Select all tablinks and remove the highlights from them
				const tablinks = document.getElementsByClassName("tablink");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].classList.remove("tab-selected");
				}
console.log("nav tablinks remove highlight");
				//Hides current tab and shows a new one via callback function
				//Shows page, after old tab disappeared
				hideTab(elem, () => {
					showTab(elem);
console.log("nav show tab");
					fetchPage(page, id);
console.log("nav fetch page");
				});
console.log("nav hide tab");
			}
			//Page reloads. We don't care about animation timing
			else{
				fetchPage(page, id);
console.log("nav fetch page");
			}

			//Highlights selected page
			document.getElementById(page).classList.add("tab-selected");
console.log("nav highlight selected");
				
			//Wait until the modal was completly loaded
			if (page === "settings") {
console.log("nav page = settings");
				waitForElement("maximizeWindows", readSettingsToForm);
console.log("nav read settings form");
			}	
		}catch(error){
			console.log(error);
		}
	}
	
	async function fetchPage(page, id){
console.log("fetch page");
			//Fetch page content
			//fetch(page + '.html')
			fetch('html/' + page + '.html', { cache: 'no-store'})
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP ${response.status}`);
				}
				return response.text();
			})
			.then(html => {
				document.getElementById(id).innerHTML = html;
console.log("fetch page success");
			})
			.catch(error => {
				console.error('Fetch error:', error);
console.log("fetch page error");
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