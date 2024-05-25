// Open Menu

const menu = document.querySelector(".navbar")
const btnchange = document.querySelector("#btn-menu")

function toggleMenu () {
    if (menu.classList.contains("open"))
        menu.classList.remove("open")

    else {
        menu.classList.add("open")
    }
}

// Open Menu