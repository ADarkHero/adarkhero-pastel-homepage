readSettings();
checkBtnForward();
changeRootIcon();

const page = findGetParameter("page") || "root"; //root is default page
setPage(page);	