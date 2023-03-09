function updateTabCount() {
    browser.tabs.query({currentWindow: true}).then(tabs => {
            tabCount = tabs.length
            browser.browserAction.setBadgeText(
                {text: tabCount.toString()}
            )
        }
    )
    return
}

function addonStartup() {
    browser.browserAction.setBadgeText( 
        {text: "?"} 
    ) 
    browser.browserAction.setBadgeBackgroundColor(
        {color: "#666666"}
        )
    updateTabCount()
}

browser.tabs.onAttached.addListener(() => {
        updateTabCount()
    });
browser.tabs.onCreated.addListener(() => {
        updateTabCount()
    });
browser.tabs.onDetached.addListener(() => {
        updateTabCount()
    });
browser.tabs.onRemoved.addListener(() => {
        updateTabCount()
    });

browser.runtime.onInstalled.addListener((addonStartup));
browser.runtime.onStartup.addListener((addonStartup));