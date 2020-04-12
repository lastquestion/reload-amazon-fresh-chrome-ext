chrome.runtime.onInstalled.addListener(function () {
  const refreshInterval = 30;
  chrome.storage.sync.set({ refreshInterval: refreshInterval }, function () {
    console.log(`The refresh interval is ${refreshInterval} seconds`);
  });
});
