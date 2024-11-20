let storedData = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('chrome.runtime.onMessage: ', message);
    if (message.action === "storeData") {
        storedData = message.data;
        sendResponse({ status: "success" });
    } else if (message.action === "getData") {
        sendResponse({ data: storedData });
    }
});