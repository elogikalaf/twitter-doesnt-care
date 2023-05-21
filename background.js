// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//       text: "OFF",
//     });
//   });

// const extensions = 'https://developer.chrome.com/docs/extensions';
// const webstore = 'https://developer.chrome.com/docs/webstore';
  
chrome.action.onClicked.addListener(function(tab) {
    // Send a message to the content script
    chrome.tabs.sendMessage(tab.id, { message: 'Extension icon clicked' });
});





// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//         chrome.tabs.sendMessage(tabId, {
//             type: "NEW"
//         });
// });
