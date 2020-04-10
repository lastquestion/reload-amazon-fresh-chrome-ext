const myAudio = new Audio(chrome.runtime.getURL("ding.mp3"));

const init = () => {
  const entireBody = document.body.innerText;
  // So it can match one of those messages: 
    // - "No delivery windows available", 
    // - "No attended delivery windows are available"
    // - "No doorstep delivery windows are available";   
  if (entireBody.search(/No(.*)delivery windows(.*)are available/) !== -1) {
    console.log('no avail');
    console.log('waiting 30 seconds');
    setTimeout(() => {
      window.location.reload();
    }, 30000);
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
