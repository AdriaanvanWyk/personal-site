

var CURRENT_PANEL_NAME = 'home'
changePanel = targetPanelName => {
    
    if(CURRENT_PANEL_NAME !== targetPanelName) {
        const targetPanel = document.querySelector(`.${targetPanelName}`);
        targetPanel.classList.add('in-focus')
    
        const currentPanel = document.querySelector(`.${CURRENT_PANEL_NAME}`);
        currentPanel.classList.remove('in-focus')
    
        CURRENT_PANEL_NAME = targetPanelName;
    }

}