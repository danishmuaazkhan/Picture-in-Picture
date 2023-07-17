const pipBtn = document.querySelector('.btn'); 
const videoElement = document.querySelector('#video'); 

async function selectMediaSetream() {
    try {
        // Request user's display media stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); 
        // Set the media stream as the source for the video element
        videoElement.srcObject = mediaStream; 
        videoElement.onloadedmetadata = () => {
            videoElement.play(); 
        }
    } catch (error) {
        // Log any error that occurs during media stream selection
        console.log(error); 
    }
}

pipBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    pipBtn.disabled = true;
    await selectMediaSetream();
    await videoElement.play();
    // Request Picture-in-Picture mode for the video
    await videoElement.requestPictureInPicture(); 
    pipBtn.disabled = false; 
})

