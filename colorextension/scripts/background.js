// CITE: Stackoverflow
// URL: https://stackoverflow.com/questions/65010676/chrome-tabs-onupdated-addlistener-wont-send-a-message-if-i-check-the-value-of-c
// HELP: We learned how to use background to monitor changes and events.
// CITE: Mozilla
// URL: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
// HELP: We learned that chrome.tabs.onUpdated will be fired when a tab is updated and the status complete can indicate if loaded so we can use this to simulate DOMContentLoaded for extension js.
// CITE: Chrome for Developers
// URL: https://developer.chrome.com/docs/extensions/migrating/to-service-workers/
//      https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/
// HELP: We learned how to add background in manifest 3 and how to give an extension temporary access to the currently active tab when the user invokes the extension to facilitate monitoring for loaded actions without hard refresh
chrome.tabs.onUpdated.addListener(function(tabId, changedInfo) {
    if (changedInfo.status === 'complete') {
        // CITE: Mozilla
        // URL: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
        // HELP: We learned how to send a message to the content js's chrome.runtime.onMessage.
        chrome.tabs.sendMessage(tabId, {message: "loaded"});
    }
});