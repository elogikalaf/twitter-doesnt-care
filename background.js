chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });




chrome.action.onClicked.addListener(async function(tab) {
    // Send a message to the content script
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === "ON" ? "OFF" : "ON"
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    })
    if (nextState === "ON") {
      chrome.tabs.sendMessage(tab.id, { message: 'ON' });
    }
    else {
      chrome.tabs.sendMessage(tab.id, { message: "OFF" });
    }
});

