// Dropdown toggle
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

// Mobile menu
const hamburgerBtn = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});

// Carousel
$(document).ready(function() {
    $('.popular-products-slides').owlCarousel({
    items: 3, 
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true, 
    dots: true
    });
});