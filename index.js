
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = black;
    } else {
        navbar.style.backgroundColor = '#006400';
    }
});
