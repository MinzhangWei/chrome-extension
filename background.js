function onTabsUpated(tabId, changeInfo, tab) {};

function onReceiveMsg(request, sender, sendRequest) {};

chrome.tabs.onUpdated.addListener(onTabsUpated);
chrome.runtime.onMessage.addListener(onReceiveMsg);