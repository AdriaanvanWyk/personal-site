

var CURRENT_PANEL_NAME = 'home'
changePanel = targetPanelName => {
    
    if(CURRENT_PANEL_NAME !== targetPanelName) {
        const targetPanel = document.querySelector(`.${targetPanelName}`);
        targetPanel.classList.add('in-focus')

        const currentPanel = document.querySelector(`.${CURRENT_PANEL_NAME}`);
        currentPanel.classList.remove('in-focus')
    
        addBackrounddToActiveLink(targetPanelName)

        CURRENT_PANEL_NAME = targetPanelName;
    }

    

}

addBackrounddToActiveLink = targetPanel => {
    targetButtonClassName = targetPanel + "-button"
    const targetButton = document.querySelector(`.${targetButtonClassName}`);
    targetButton.classList.add('with-background-link')

    currentButtonClassName = CURRENT_PANEL_NAME + "-button"
    const currentButton = document.querySelector(`.${currentButtonClassName}`);
    currentButton.classList.remove('with-background-link')
    
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 