var colors = ['#FF0800', '#03C03C', '#BF00FF', '#0070FF', '#232E5A'];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

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

    const header = document.querySelector('header');
    header.style.backgroundColor = randomColor();
});

let modeButton = document.getElementById('mode');
let body = document.querySelector('body');
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
  






/*
function randomBackgroundColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", function()
{
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link =>
    {
        link.addEventListener('click', function(e)
        {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView(
                {
                behavior: 'smooth'
            });
        });
    });
    
    const header = document.querySelector('header');
    header.style.backgroundColor = randomBackgroundColor();
});
*/
