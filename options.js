function save_options() {
  const refresh_interval = document.getElementById('refresh_interval').value;

  chrome.storage.sync.set({refresh_interval: refresh_interval}, function() {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() { status.textContent = ''; }, 750);
  });
}


function restore_options() {
  chrome.storage.sync.get({refresh_interval: 30}, function(data) {
    document.getElementById('refresh_interval').value = data.refresh_interval;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);