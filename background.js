if (!document.pictureInPictureEnabled) {
    chrome.browserAction.setTitle({ title: 'Picture-in-Picture Não Suportado' });
} else {
    chrome.browserAction.onClicked.addListener(tab => {
        chrome.tabs.executeScript({ file: 'app.js', allFrames: true });
    });
}