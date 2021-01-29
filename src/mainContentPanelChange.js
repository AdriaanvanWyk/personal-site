

var CURRENT_PANEL_NAME = 'about-me'
changePanel = targetPanelName => {
    
    if(CURRENT_PANEL_NAME !== targetPanelName) {
        const targetPanel = document.querySelector(`.${targetPanelName}`);
        targetPanel.style.order = 1
    
        const currentPanel = document.querySelector(`.${CURRENT_PANEL_NAME}`);
        currentPanel.style.order = 5
    
        CURRENT_PANEL_NAME = targetPanelName;
    }

}