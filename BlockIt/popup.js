document.getElementById("toggle_button").addEventListener("click", toggle);
function toggle() {
    if (document.getElementById('toggle_button').innerHTML === 'Disable') {
        // this.blocked_urls_array=this.blocked_urls;
        document.getElementById('toggle_button').innerHTML = 'Enable';
        document.getElementById('toggle_button').style.backgroundColor = '#90ee90';
        chrome.tabs.create({"url":"chrome://extensions/?id=lncmlbomoofhfpkhpngiimmaedaenalk", "selected":false});

    } else {
        document.getElementById('toggle_button').innerHTML = 'Disable';
        document.getElementById('toggle_button').style.backgroundColor = 'red';
        chrome.tabs.create({"url":"chrome://extensions/?id=lncmlbomoofhfpkhpngiimmaedaenalk", "selected":false});
    }

}