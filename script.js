document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");

    // Listen for clicks on any video inside project cards
    document.querySelectorAll(".project-card video").forEach(video => {
        video.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents click bubbling

            // Retrieve video source path safely
            const sourceElem = this.querySelector("source");
            const videoSrc = this.currentSrc || (sourceElem ? sourceElem.src : this.src);

            if (videoSrc) {
                modalVideo.src = videoSrc;
                modal.style.display = "flex";
                modalVideo.play();
            }
        });
    });
});

function closeVideoModal(event) {
    // Close modal when clicking dark backdrop or the close button
    if (event.target.id === "videoModal" || event.target.classList.contains("close-modal")) {
        const modal = document.getElementById("videoModal");
        const modalVideo = document.getElementById("modalVideo");
        modal.style.display = "none";
        modalVideo.pause();
        modalVideo.src = "";
    }
}

function toggleModalFullscreen() {
    const modalVideo = document.getElementById("modalVideo");
    if (modalVideo.requestFullscreen) {
        modalVideo.requestFullscreen();
    } else if (modalVideo.webkitRequestFullscreen) { /* Safari support */
        modalVideo.webkitRequestFullscreen();
    } else if (modalVideo.msRequestFullscreen) { /* IE11 support */
        modalVideo.msRequestFullscreen();
    }
}