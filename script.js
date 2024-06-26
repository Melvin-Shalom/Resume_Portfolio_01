document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const body = document.querySelector('body');
    const header = document.querySelector('header');

    function applyRandomColor() {
        const colors = ['#FF0800', '#03C03C', '#BF00FF', '#0070FF', '#3868E4'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        if (randomColor === '#FF0800') {
            body.style.backgroundImage = "linear-gradient(to right, #990400, #CC0600, #FF0800, #FF4D3D, #FF7A6A)";
            header.style.backgroundColor = "#FF0800";
        } else if (randomColor === '#3868E4') {
            body.style.backgroundImage = "linear-gradient(to right, #3D52A0, #7091E6, #8697C4, #ADBBDA, #EDE8F5)";
            header.style.backgroundColor = "#3868E4";
        } else if (randomColor === '#03C03C') {
            body.style.backgroundImage = "linear-gradient(to right, #027227, #029A32, #03C03C, #40D061, #70E08E)";
            header.style.backgroundColor = "#03C03C";
        } else if (randomColor === '#BF00FF') {
            body.style.backgroundImage = "linear-gradient(to right, #720099, #9900CC, #BF00FF, #D440FF, #E070FF)";
            header.style.backgroundColor = "#BF00FF";
        } else if (randomColor === '#0070FF') {
            body.style.backgroundImage = "linear-gradient(to right, #004499, #005ACC, #0070FF, #3390FF, #66B0FF)";
            header.style.backgroundColor = "#0070FF";
        } else {
        }
    }

    applyRandomColor();

    let modeButton = document.getElementById('mode');
    let mode = "light";

    modeButton.addEventListener("click", () => {
        if (mode === "light") {
            mode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
        } else {
            mode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
        }
    });
    
    
    document.getElementById('mode').addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});
