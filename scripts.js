function typeText(element, text, speed = 100, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // call the next function after typing is done
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

    // scroll to next section
    document.getElementById("scrollButton").addEventListener("click", () => {
        document.getElementById("nextSection").scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            document.querySelector("#scrollButton2").classList.add("visible");
            document.querySelector("#scrollLine2").classList.add("visible");
        }, 600);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    document.querySelector("#scrollButton2").classList.add("visible");
                    document.querySelector("#scrollLine2").classList.add("visible");
                }, 600);

                observer.unobserve(entry.target); // remove obs after 1 triggered
            }
        });
    }, {
        threshold: 0.5 //triggers when x% is visible
    });

    observer.observe(document.getElementById("nextSection"));


    // Scroll line length
    const scrollLine = document.getElementById('scrollLine');
    const nextSection = document.getElementById('nextSection');

    const lineHeight = nextSection.offsetTop - scrollLine.offsetTop;
    scrollLine.style.height = `${lineHeight}px`;

    //----------

    document.getElementById("scrollButton2").addEventListener("click", () => {
        document.getElementById("finalSection").scrollIntoView({ behavior: "smooth" });
    });

    // Scroll line2 length
    const scrollLine2 = document.getElementById('scrollLine2');
    const finalSection = document.getElementById('finalSection');

    const lineHeight1 = finalSection.offsetTop - scrollLine2.offsetTop;
    scrollLine2.style.height = `${lineHeight1}px`;
    scrollLine.style.height = `${lineHeight1}px`;

    // Video playlist handling
    const videoPlayer = document.getElementById('videoPlayer');
    const videoDotsContainer = document.getElementById('videoDots');
    const videoPlaylist = [
        'videos/rotaProDemo.mp4',
        'videos/chessDemo.mp4',
        'videos/aiDemo.mp4',
        'videos/websiteDemo.mp4'
    ];
    let currentIndex = 0;

    function renderDots() {
        videoDotsContainer.innerHTML = ""; // Clear existing dots
        videoPlaylist.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (index === currentIndex) dot.classList.add("active");
            videoDotsContainer.appendChild(dot);
        });
    }

    function playVideo(index) {
        // animate swipe out
        videoPlayer.classList.add("swipe-out");

        setTimeout(() => {
            videoPlayer.src = videoPlaylist[index];
            videoPlayer.load();

            if (index === 3 || index === 0) {
                videoPlayer.style.filter = "blur(4px) brightness(0.6)";
            } else {
                videoPlayer.style.filter = "blur(3px) brightness(1)";
            }

            // swipe in animation
            videoPlayer.classList.remove("swipe-out");
            videoPlayer.classList.add("swipe-in");

            videoPlayer.play();

            // clean up post animation
            setTimeout(() => {
                videoPlayer.classList.remove("swipe-in");
            }, 500);

            renderDots(); // Update dots
        }, 500);
    }

    videoPlayer.addEventListener('ended', () => {
        currentIndex = (currentIndex + 1) % videoPlaylist.length;
        playVideo(currentIndex);
    });

    // initial play and dot render
    playVideo(currentIndex);
    renderDots();
});
