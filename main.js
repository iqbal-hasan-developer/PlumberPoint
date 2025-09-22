document.querySelectorAll('.nav-links').forEach(link => {
    if (link.href === window.location.href) {
      link.setAttribute('aria-current', 'page')
    }
  
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    autoHeight: false,
  });

  
// Mobile Menu
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

openMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    mobileMenu.classList.remove('active');
})

// Intersection Observer for Animations
// Services Animation
const serviceBoxes = document.querySelectorAll('.service-box');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
}, {
  threshold: 0.5,
});

serviceBoxes.forEach((serviceBox) => {
    observer.observe(serviceBox);
})
// Team Members Animation
const teamMembers = document.querySelectorAll('.team-member');
const observer2 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        else {
            entry.target.classList.remove('visible');
        }
    })
}, {
    threshold: 0.5,
});

teamMembers.forEach((member) => {
    observer2.observe(member);
})
// Recent Blogs Animation 
const recentBlogs = document.querySelectorAll('.blog-box');
const observer3 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade');
        }
        else {
            entry.target.classList.remove('fade');
        }
    })
}, {
    threshold: 0.5,
});

recentBlogs.forEach((blog) => {
    observer3.observe(blog);
})

// Project Animation
const projectBoxes = document.querySelectorAll('.project-box');
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
       if (entry.isIntersecting) {
          entry.target.classList.add('show');
       }
        else {
          entry.target.classList.remove('show');
        }
    })
}, {
    threshold: 0.5,
});
projectBoxes.forEach((projectBox) => {
    observer4.observe(projectBox);
})


