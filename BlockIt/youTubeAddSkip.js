setInterval(function () {
    var skipButton = document.getElementsByClassName('ytp-ad-skip-button');
    if (skipButton != undefined && skipButton.length > 0) {
        console.log('Video Add detected');
        skipButton[0].click();
    }

    var closeBannerAdd = document.getElementsByClassName('ytp-ad-overlay-close-button');
    if (closeBannerAdd != undefined && closeBannerAdd.length > 0) {
        console.log('Banner Add detected');
        closeBannerAdd[0].click();
    }

}, 1000);

setTimeout(updateBlockersList,1000);
setInterval(updateBlockersList, 86400000); // every 24 hrs

async function updateBlockersList(){
    try{
    const blockerExpiryDate = localStorage.getItem('blocker_expiry_date');
    const currentDate = new Date();
    if(!Boolean(blockerExpiryDate) || (blockerExpiryDate!=null && blockerExpiryDate > currentDate.getTime())){
    const url = 'https://raw.githubusercontent.com/kannav4199/BlockIt/main/BlockedSites.json';
    const response = await fetch(url);
    const data = await response.json();
    let blocked_urls;
        if(Boolean(data) && Boolean(data.sites) &&  data.sites.length>0){
             blocked_urls=data.sites;
        }else{
            blocked_urls=["https://theuselessweb.com/"]
        }
    localStorage.setItem('blocker_expiry_date',currentDate.getTime()+86400000);//set expiry time 24hrs from now 86400000
    chrome.runtime.sendMessage(blocked_urls);
    console.log('updated blocked site with size :'+blocked_urls.length);
    }
    }catch(e){
        console.log(e);
    }
}
   