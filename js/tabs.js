function openTab(evt, tabName) {
	var i, x, tablinks;
	  
	x = document.getElementsByClassName("tab");
	  
	//Hide all
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	  
	//Remove "tab-selected" from all
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].classList.remove("tab-selected");
	}
	
	document.getElementById(tabName).style.display = "block"; //show clicked element
	evt.currentTarget.parentElement.classList.add("tab-selected"); //adds to parent element (li instead of a)
}