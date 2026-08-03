function openTab(evt, tabName) {
	const tabs = document.getElementsByClassName("tab");
    const tablinks = document.getElementsByClassName("tablink");
	const newTab = document.getElementById(tabName);
	let currentTab = null;

	//get current tab
	for (let i = 0; i < tabs.length; i++) {
        if (getComputedStyle(tabs[i]).display !== "none") {
            currentTab = tabs[i];
            break;
        }
    }
	  
	//Remove "tab-selected" from all
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove("tab-selected");
	}
	//Add "tab-selected"
	evt.currentTarget.parentElement.classList.add("tab-selected"); //adds to parent element (li instead of a)

	//Hides current tab and shows a new one via callback function
    hideTab(currentTab, () => {
        showTab(newTab);
    });
}



function hideTab(tab, callback) {
    tab.classList.remove("slide-in");
    tab.classList.add("slide-out");

    tab.addEventListener("animationend", function () {
        tab.style.display = "none";
        tab.classList.remove("slide-out");

        if (callback) {
            callback();
        }
    }, { once: true });
}



function showTab(tab) {
    tab.style.display = "block";
    tab.classList.remove("slide-out");
    tab.classList.add("slide-in");
}
