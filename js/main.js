document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // Spinner
    function spinner() {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    }
    spinner();

    // Initiate WOW.js (assuming WOW.js is available)
    if (typeof WOW === 'function') {
        new WOW().init();
    }

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        var stickyTop = document.querySelector('.sticky-top');
        if (window.scrollY > 300) {
            if (stickyTop) {
                stickyTop.style.top = '0px';
            }
        } else {
            if (stickyTop) {
                stickyTop.style.top = '-100px';
            }
        }
    });

    // Dropdown on mouse hover
    var dropdowns = document.querySelectorAll('.dropdown');
    var dropdownToggle = document.querySelectorAll('.dropdown-toggle');
    var dropdownMenu = document.querySelectorAll('.dropdown-menu');

    function handleDropdownHover() {
        dropdowns.forEach(function (dropdown) {
            dropdown.addEventListener('mouseover', function () {
                dropdown.classList.add('show');
                dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
                dropdown.querySelector('.dropdown-menu').classList.add('show');
            });
            dropdown.addEventListener('mouseout', function () {
                dropdown.classList.remove('show');
                dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        });
    }

    if (window.matchMedia("(min-width: 992px)").matches) {
        handleDropdownHover();
    }

    window.addEventListener('resize', function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            handleDropdownHover();
        } else {
            dropdowns.forEach(function (dropdown) {
                dropdown.removeEventListener('mouseover', handleDropdownHover);
                dropdown.removeEventListener('mouseout', handleDropdownHover);
            });
        }
    });

    // Back to top button
    window.addEventListener('scroll', function () {
        var backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            if (backToTop) {
                backToTop.style.display = 'block';
            }
        } else {
            if (backToTop) {
                backToTop.style.display = 'none';
            }
        }
    });

    var backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Header carousel (assuming Owl Carousel is available)
    if (typeof $('.header-carousel').owlCarousel === 'function') {
        $('.header-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });
    }

    // Testimonials carousel (assuming Owl Carousel is available)
    if (typeof $('.testimonial-carousel').owlCarousel === 'function') {
        $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // Show signup container when 'More Details' link is clicked
    var moreDetailsLinks = document.querySelectorAll('.more-details-link');

    // Loop through each element and add the event listener
    moreDetailsLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            // Select the element with the class 'signup-container'
            var signupContainer = document.querySelector('.signup-container');
            if (signupContainer) {
                signupContainer.style.visibility = 'visible';
                signupContainer.style.opacity = '1';
                signupContainer.style.transition = 'opacity 0.5s ease-in-out';
            }
        });
    });

    // Hide signup container when 'Close' button is clicked
    var closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            var signupContainer = document.querySelector('.signup-container');
            if (signupContainer) {
                signupContainer.style.visibility = 'hidden';
                signupContainer.style.opacity = '0';
            }
        });
    }

    // Handle form submission
    var signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate the form data
            var fullName = document.getElementById('fullName').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if (fullName && email && password) {
                // Show success message using SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Good Job',
                    text: 'Logged in successfully'
                });
            } else {
                // Handle the case where the form is not completely filled
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill out all fields!'
                });
            }
        });
    }
});
