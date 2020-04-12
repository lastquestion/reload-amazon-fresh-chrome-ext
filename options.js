function save_options() {
  const refreshInterval = document.getElementById('refresh-interval').value;

  chrome.storage.sync.set({refreshInterval: refreshInterval}, function() {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() { status.textContent = ''; }, 750);
  });
}


function restore_options() {
  chrome.storage.sync.get({refreshInterval: 30}, function(data) {
    document.getElementById('refresh-interval').value = data.refreshInterval;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
