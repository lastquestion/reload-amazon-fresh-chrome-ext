const myAudio = new Audio(chrome.runtime.getURL("ding.mp3"));



const init = () => {
  const entireBody = document.body.innerText;
  // So it can match one of those messages: 
    // - "No delivery windows available", 
    // - "No attended delivery windows are available"
    // - "No doorstep delivery windows are available";   
  if (entireBody.search(/No(.*)delivery windows(.*)available/) !== -1) {
    console.log('no avail');

    chrome.storage.sync.get('refresh_interval', function(data) {
      console.log(`waiting ${data.refresh_interval} seconds`);       

      setTimeout(() => {
        window.location.reload();
      }, data.refresh_interval * 1000);
    });
  }
  else {
    console.log('bing!');
    // get the body out for next time. pick slots automatically
    console.log(document.body.innerHTML);
    myAudio.play();
  }
}

// Set a timeout to let client to render the page
setTimeout(init, 3000);
