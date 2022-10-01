function toggleNavbar() {
let navbar = document.querySelector(".navbar")
let tekst = document.querySelector(".navbarShowButton")

if (navbar.classList.contains("ukryjPasek")) {
    navbar.classList.add("pokazPasek")
    navbar.classList.remove("ukryjPasek")
    tekst.innerHTML = "schowaj pasek"

} else {
    navbar.classList.add("ukryjPasek")
    navbar.classList.remove("pokazPasek")
    tekst.innerHTML = "pokaż pasek"
}

}