var settingsLook = "default";

document.addEventListener('mousemove', function(event) {
    //Currently only supports setting picture in bottom right corner!
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var settingsHeight = 128;
    var settingsWidth = 128;

    //console.log(settingsLook);

    //look left
    if(event.clientY > windowHeight - settingsHeight && event.clientX < windowWidth - settingsWidth){
        if(settingsLook !== "left"){
            document.getElementById("settings-mops").src = "img/settings-mops-left.png";
            settingsLook = "left";
        }
    }
    //look lefttop
    else if(event.clientX < windowWidth - settingsWidth){
            if(settingsLook !== "lefttop"){
                document.getElementById("settings-mops").src = "img/settings-mops-lefttop.png";
                settingsLook = "lefttop";
            }
    }
    //look top
    else if(event.clientX > windowWidth-settingsWidth && event.clientY < windowHeight - settingsHeight){
        if(settingsLook !== "top"){
            document.getElementById("settings-mops").src = "img/settings-mops-top.png";
            settingsLook = "top";
        }
    }
    //hover animation
    else{
        if(settingsLook !== "animation"){
            document.getElementById("settings-mops").src = "img/settings-mops-animation.gif";
            settingsLook = "animation";

            //Play bark sound effect, if not disabled
            if(localStorage.getItem("disableSounds") !== 'true'){
                new Audio('mp3/bark.mp3').play();
            }  
        }
    }
      
    //Debug
    //console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
    //console.log('Windowwith:', windowWidth, 'Settingswidth:', settingsWidth);
});