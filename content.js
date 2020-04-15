const myAudio = new Audio(chrome.runtime.getURL("ding.mp3"));

const alertDiv = document.createElement("div");
alertDiv.style.position = "fixed";
alertDiv.style.top = "8px";
alertDiv.style.right = "8px";
alertDiv.style.padding = "16px";
alertDiv.style.border = "1px solid black";
alertDiv.style.zIndex = "100";
alertDiv.style.backgroundColor = "#cada8a";
alertDiv.fontSize = "large";
alertDiv.innerText = "Waiting...";
document.body.appendChild(alertDiv);

function wait(refreshInterval) {
  let sec = refreshInterval;

  const timer = setInterval(() => {
    alertDiv.innerText = `No availability!\n\nwaiting ${sec--} seconds`;
    if (sec == 0) {
      clearInterval(timer);
      alertDiv.innerText = "Reloading...";
      window.location.reload();
    }
  }, 1000);
}

function search() {
  const entireBody = document.body.innerText;

  // So it can match one of those messages:
  // - "No delivery windows available",
  // - "No attended delivery windows are available"
  // - "No doorstep delivery windows are available";
  if (entireBody.search(/No(.*)delivery windows(.*)available/) !== -1) {
    // sometimes this is null (maybe i refreshed the chrome dev unpack while loading?)
    if (chrome.storage && chrome.storage.sync && chrome.storage.sync.get)
      chrome.storage.sync.get("refreshInterval", (data) =>
        wait(data.refreshInterval)
      );
    else wait(30);
  } else {
    alertDiv.innerText = "Availability!!!";
    alertDiv.backgroundColor = "#FF5722";
    alertDiv.fontSize = "x-large";
    // get the body out for next time. pick slots automatically
    console.log(document.body.innerHTML);
    myAudio.play();
  }
}

// Set a timeout to let client to render the page
setTimeout(search, 3000);
