const color = '#3e3e3e';

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color});
    console.log(color);
})