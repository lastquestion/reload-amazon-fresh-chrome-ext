chrome.runtime.onInstalled.addListener(function() {
        const interval_seconds = 30
	chrome.storage.sync.set({refresh_interval: interval_seconds}, function() {
		console.log(`The refresh interval is ${interval_seconds} seconds`);
	    });
    });