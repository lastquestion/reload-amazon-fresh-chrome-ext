const myAudio = new Audio(chrome.runtime.getURL("ding.mp3"));

const entireBody = document.body.innerText;
if(entireBody.indexOf("No delivery windows available") != -1) {
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
