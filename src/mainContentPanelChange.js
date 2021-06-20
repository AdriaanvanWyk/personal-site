

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