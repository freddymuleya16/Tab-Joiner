chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "mergeWindows") {
      mergeWindows(request.windowIds);
    }
  });
  
  function mergeWindows(windowIds) {
    const targetWindowId = windowIds[0];
    
    windowIds.slice(1).forEach(windowId => {
      chrome.tabs.query({windowId: windowId}, function(tabs) {
        tabs.forEach(tab => {
          chrome.tabs.move(tab.id, {windowId: targetWindowId, index: -1});
        });
        chrome.windows.remove(windowId);
      });
    });
  }