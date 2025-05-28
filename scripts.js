function typeText(element, text, speed = 100, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // Call the next function after typing is done
        }
    }
    type();
}

window.addEventListener("DOMContentLoaded", () => {
    // Typing animation
    typeText(document.getElementById("nameText"), "Hi, I'm Andrew", 100, () => {
        typeText(document.getElementById("courseText"), "MEng Computer Science", 75, () => {
            document.querySelector("#scrollButton").classList.add("visible");
            document.querySelector("#scrollLine").classList.add("visible");
        });
    });

    // Scroll to next section
    document.getElementById("scrollButton").addEventListener("click", () => {
        document.getElementById("nextSection").scrollIntoView({ behavior: "smooth" });
    });

    // Scroll line length
    const scrollLine = document.getElementById('scrollLine');
    const nextSection = document.getElementById('nextSection');

    const lineHeight = nextSection.offsetTop - scrollLine.offsetTop;
    scrollLine.style.height = `${lineHeight}px`;

    // Video playlist handling
    const videoPlayer = document.getElementById('videoPlayer');

    const videoPlaylist = [
        'videos/chessDemo.mp4',
        'videos/aiDemo.mp4',
    'videos/websiteDemo.mp4',
    'videos/rotaProDemo.mp4'];

    let currentIndex = 0;

    function playVideo(index) {
        videoPlayer.src = videoPlaylist[index];
        videoPlayer.load();
        videoPlayer.play();
        if (index === 2) {
            videoPlayer.style.objectFit = "cover";
            videoPlayer.style.filter = "blur(4px)"

        } else {
            videoPlayer.style.objectFit = "contain";
        }

    }

    videoPlayer.addEventListener('ended', () => {

        currentIndex = (currentIndex + 1) % videoPlaylist.length;
        playVideo(currentIndex);

    });

    playVideo(currentIndex);

});
