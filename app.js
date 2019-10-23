const burger = document.querySelector(".burger")
const links = document.querySelector(".nav-links")
const navLinks = document.querySelectorAll(".nav-links li")

burger.addEventListener("click", () => {
    links.classList.toggle("active");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        }else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + .3}s`;
        }
    })

})

