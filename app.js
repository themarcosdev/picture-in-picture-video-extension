function pipApp() {
    let vid = document.getElementsByTagName('video')
    for (i = 0; i < vid.length; i++) {
        /* pegando o video que esta tocando*/
        if (vid[i].paused == false) {
            var video = vid[i]
        }
    }

    function picInPic() {
        video.requestPictureInPicture()
            .then(pictureInPictureWindow => {
                pictureInPictureWindow.addEventListener("resize", () => onPipWindowResize(), false);
            })
            // caso ja tenha um elemento PiP  vamos sair
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture()
                .then(() => console.log("Video saiu do modo Picture-in-Picture"))
                .catch((err) => console.error(err))
        }
    }
    picInPic()
}

pipApp();