// Automatic year update 
const updatedYear = document.getElementById("update-year");
updatedYear.innerHTML = new Date().getFullYear();

// right click disable 
document.oncontextmenu = (element) => {
    element.preventDefault();
}

// window on scroll effect 
const navigationBar = document.getElementById("navigation-bar");
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");
window.onscroll = () => {
    // scroll navigation color 
    if (window.scrollY > 80) {
        navigationBar.style.backgroundColor = "white";
    }
    else {
        navigationBar.style.backgroundColor = "transparent";
    }
    // scroll progress bar
    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff / cheight * 100;
    let csswidth = Math.floor(100 - progress);
    highlight.style.width = csswidth + "%";
    // active on scroll navbar 
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('header .mobile-bar ul li a[href*=' + id + ']').classList.add("active");
            });
            navLinksweb.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('header .nav-list ul li a[href*=' + id + ']').classList.add("active");
            });
        }
    });
}

// mobile version navbar 
const menubarIcon = document.getElementById("menubar-icon");
const slidenavBar = document.getElementById("slidenav-bar");
menubarIcon.onclick = () => {
    slidenavBar.classList.toggle("active");
    if (slidenavBar.classList.contains("active")) {
        menubarIcon.classList.replace("fa-bars", "fa-xmark")
    } else {
        menubarIcon.classList.replace("fa-xmark", "fa-bars")
    }
}

// navigation bar links on click effect 
const navLinksweb = document.querySelectorAll('header .nav-list ul li a');
const navLinks = document.querySelectorAll('header .mobile-bar ul li a');
const sections = document.querySelectorAll('section');
navLinks.forEach((element) => {
    element.onclick = () => {
        slidenavBar.classList.remove("active")
        menubarIcon.classList.replace("fa-xmark", "fa-bars")
    }
})