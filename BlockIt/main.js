function callback(){
return {cancel:true};
}
chrome.runtime.onMessage.addListener( (blocked_urls) => {
  chrome.webRequest.onBeforeRequest.removeListener((callback));
  chrome.webRequest.onBeforeRequest.addListener(callback, {urls: blocked_urls}, ["blocking"]);
});