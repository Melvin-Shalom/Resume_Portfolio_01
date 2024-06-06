var colors = [ '#FF0800', '#03C03C', '#BF00FF'];

function randomColor()
{
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener("DOMContentLoaded", function()
{
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
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
    header.style.backgroundColor = randomColor();
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
