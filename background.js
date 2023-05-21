// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//       text: "OFF",
//     });
//   });


chrome.action.onClicked.addListener(function(tab) {
    // Send a message to the content script
    chrome.tabs.sendMessage(tab.id, { message: 'Extension icon clicked' });
});





// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//         chrome.tabs.sendMessage(tabId, {
//             type: "NEW"
//         });
// });
