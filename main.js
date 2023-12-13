// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the video element and loading text
    var video = document.getElementById('loadingVideo');
    let loading = document.querySelector(".loader-container")
    let container = document.querySelector('.container')
    // Play the video
  
    // Set a timeout to hide the loading text and redirect after 2 seconds
    video.play();
    container.style.display = "none"
    setTimeout(function () {
      // Add any additional logic or redirection here
    loading.style.display = "none"
    container.style.display = "block"
     // 2000 milliseconds = 2 seconds
  
    }, 6500);
  });
//   this is 7 seconds because the loading