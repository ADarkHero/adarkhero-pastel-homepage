readSettings();
checkBtnForward();
changeRootIcon();


const page = findGetParameter("page") || "root"; //root is default page
setPage(page);	

//on dress up page load: make draggable images draggable
if(page === "fun-corner"){
    waitForElement("draggable", draggable);
}