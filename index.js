if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
) { } else {
    // Get the elements
    const coverImage = document.querySelector(".cover-image");
    const parallaxText = document.getElementById("title");
    const paraImage1 = document.querySelector(".image-bg-1");


    function parallax() {
        // Get the scroll position
        let scrollPos = window.pageYOffset;
        // console.log(110 + (paraImage1.offsetHeight + (scrollPos - paraImage1.offsetTop) * 0.7) * 0.1)

        // Update the translateY value
        parallaxText.style.transform = `translateY(${scrollPos * 0.5}px)`;
        coverImage.style.backgroundPositionY = `${scrollPos * 0.7}px`;
        // paraImage1.style.backgroundSize = `${Math.max(100, 115 * 1300 / window.innerWidth + (paraImage1.offsetHeight + (scrollPos - paraImage1.offsetTop) * 0.7) * 0.05)}%`;
        // paraImage1.style.backgroundSize = `calc(cover+${(paraImage1.offsetHeight + (scrollPos - paraImage1.offsetTop) * 0.7) * 0.05}%)`;
        requestAnimationFrame(parallax);
        // parallax()


        // Listen for scroll event
        // window.addEventListener("scroll", function () {
        //     parallax()
        //     requestAnimationFrame(parallax);
        // });

    }
    requestAnimationFrame(parallax);
}

const gallery = document.getElementById("gallery");
const alt_cover = document.querySelector(".alt-cover")

window.addEventListener("scroll", function () {
    if (gallery.offsetTop < window.scrollY) {
        alt_cover.style.opacity = 0
    } else {
        alt_cover.style.opacity = 1
    }
});

const featuresGridCards = document.querySelectorAll('#features-grid .card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 250);
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

featuresGridCards.forEach(card => {
    observer.observe(card);
});


const images = gallery.querySelectorAll("img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let current = 0;

images[current].classList.add("active");

let galleryInterval;
let progressBar = document.getElementById("progress-bar");
function restart() {
    progressBar.style.animation = "none";
    progressBar.offsetWidth;
    progressBar.style.animation = "progress-bar 4s linear forwards";
}

function startGalleryInterval() {
    galleryInterval = setInterval(() => {
        restart()
        images[current].classList.remove("active");
        current = (current + 1) % images.length;
        images[current].classList.add("active");
    }, 4000);
}

function stopGalleryInterval() {
    restart()
    clearInterval(galleryInterval);
}

prev.addEventListener("click", () => {
    stopGalleryInterval();
    images[current].classList.remove("active");
    current = (current - 1 + images.length) % images.length;
    images[current].classList.add("active");
    startGalleryInterval();
});

next.addEventListener("click", () => {
    stopGalleryInterval();
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
    startGalleryInterval();
});

startGalleryInterval();

const ul = document.querySelector(".tech-list");
const observer_tech = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const liElements = entry.target.querySelectorAll("li");
            // liElements.forEach((li, index) => {
            //     setTimeout(() => {
            //         console.log(index * 100)
            //         li.classList.add("show");
            //     }, index * 400);
            // });
            liElements.forEach((li, index) => {
                li.classList.add("show");
                li.style.transitionDelay = `${index * 0.07}s`;
            });
            observer_tech.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

observer_tech.observe(ul);
