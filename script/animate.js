// klik op animeer knop om het blockje te laten animeren
document.querySelector(".animate-button").addEventListener("click", (e) => {
    document.querySelector(".block").classList.toggle("block__to-right")
});

// na een korte tijd de animatie startend
setTimeout(() => {
    document.querySelector(".block").classList.toggle("block__to-right")
}, 3000);

// klik op menu knop om links in te laten schuiven
const menuButton = document.querySelector(".navigation__button");
const navLinks = document.querySelectorAll(".navigation__link");

menuButton.addEventListener("click", () => {
    navLinks.forEach((item,index) => {
        setTimeout(() => {
            item.classList.toggle("navigation__link--slide-in");
        }, 100 * index);
    })
});