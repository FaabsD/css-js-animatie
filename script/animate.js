// klik op animeer knop om het blockje te laten animeren
document.querySelector(".animate-button").addEventListener("click", (e) => {
    document.querySelector(".block").classList.toggle("block__to-right")
})

// na een korte tijd de animatie startend
setTimeout(() => {
    document.querySelector(".block").classList.toggle("block__to-right")
}, 3000)