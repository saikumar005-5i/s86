function filterVideos() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const videos = document.getElementsByClassName("video-item");

    for (let i = 0; i < videos.length; i++) {
        const videoTitle = videos[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (videoTitle.includes(searchQuery)) {
            videos[i].style.display = "";
        } else {
            videos[i].style.display = "none";
        }
    }
}
