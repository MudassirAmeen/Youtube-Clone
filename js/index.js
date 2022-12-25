let menu_icon = document.querySelector(".menu-icon")
let side_bar = document.querySelector(".side-bar")
let container = document.querySelector(".container")

menu_icon.addEventListener("click", function () { 
    side_bar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
})