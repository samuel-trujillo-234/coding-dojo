document.addEventListener("DOMContentLoaded", function () {
    const section2 = document.getElementById("section2");
    const progressBars = document.querySelectorAll(".progress");

    function checkScroll() {
        const sectionPosition = section2.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            section2.classList.add("aparecer");
            progressBars.forEach(bar => {
                bar.style.width = bar.parentElement.dataset.value;
            });
        }
    }

    window.addEventListener("scroll", checkScroll);
});



// GSAP Scroll Animation
document.getElementById('scrollToSection1').addEventListener('click', () => {
    gsap.to(window, { duration: 2, scrollTo: "#section1" });
});
document.getElementById('scrollToSection2').addEventListener('click', () => {
    gsap.to(window, { duration: 2, scrollTo: "#section2" });
});
document.getElementById('scrollToSection3').addEventListener('click', () => {
    gsap.to(window, { duration: 2, scrollTo: "#section3" });
});
document.getElementById('scrollToSection4').addEventListener('click', () => {
    gsap.to(window, { duration: 2, scrollTo: "#section4" });
});
document.getElementById('scrollToSection5').addEventListener('click', () => {
    gsap.to(window, { duration: 2, scrollTo: "#section5" });
});
document.getElementById('scrollToSection6').addEventListener('click', () => {
    gsap.to(window, { duration: 2, scrollTo: "#section6" });
});