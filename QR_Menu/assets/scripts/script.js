const button = document.querySelector(".bars");
const hamburger = document.querySelector(".bars .bar");
const carpi = document.querySelector(".bars .bar2");
const Open = document.querySelector(".mobile-nav .mobile-div");
const opacity = document.querySelector(".mobile-nav .opacity");

let menu = true;

button.addEventListener('click', () => {
    if (menu) {
        carpi.classList.remove("display-none");
        hamburger.classList.add("display-none");
        Open.classList.add("open");
        opacity.classList.remove("display-none");
        menu = !menu;
    } else {
        carpi.classList.add("display-none");
        hamburger.classList.remove("display-none");
        Open.classList.remove("open");
        opacity.classList.add("display-none");
        menu = !menu;
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const submenuItems = document.querySelectorAll(".submenu-design .submenu-li");

    submenuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const link = item.querySelector("a");
            const href = link.getAttribute("href");
            if (href) {
                window.location.href = href;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const submenuItems = document.querySelectorAll(".mobile-menu-item h4");

    submenuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const link = item.querySelector("a");
            const href = link.getAttribute("href");
            if (href) {
                window.location.href = href;
            }
        });
    });
});


