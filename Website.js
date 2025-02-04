const links = document.querySelectorAll('.side .links .list-1 a'); // Assuming 'side' is the class of your aside-like element
const headings = document.querySelectorAll('.main h2'); // Assuming 'main' is the class of your main-like element

links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        headings[index].scrollIntoView({ behavior: 'smooth' });
    });
});