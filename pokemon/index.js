const bt1 = document.querySelector("#bot1")
const bt2 = document.querySelector("#bot2")
const bt3 = document.querySelector("#bot3")
const bt4 = document.querySelector("#bot4")
const bt5 = document.querySelector("#bot5")

const cartaum = document.querySelector("#um")
const cartadois = document.querySelector("#dois")
const cartatres = document.querySelector("#tres")
const cartaquatro = document.querySelector("#quatro")
const cartacinco = document.querySelector("#cinco")



bt1.addEventListener("click", () => {
    cartaum.style.display = "block"
    cartadois.style.display = "none"
    cartatres.style.display = "none"
    cartaquatro.style.display = "none"
    cartacinco.style.display = "none"


})

bt2.addEventListener("click", () => {
    cartadois.style.display = "block"
    cartaum.style.display = "none"
    cartatres.style.display = "none"
    cartaquatro.style.display = "none"
    cartacinco.style.display = "none"

})

bt3.addEventListener("click", () => {
    cartadois.style.display = "none"
    cartaum.style.display = "none"
    cartatres.style.display = "block"
    cartaquatro.style.display = "none"
    cartacinco.style.display = "none"

})

bt4.addEventListener("click", () => {
    cartadois.style.display = "none"
    cartaum.style.display = "none"
    cartatres.style.display = "none"
    cartaquatro.style.display = "block"
    cartacinco.style.display = "none"

})

bt5.addEventListener("click", () => {
    cartadois.style.display = "none"
    cartaum.style.display = "none"
    cartatres.style.display = "none"
    cartaquatro.style.display = "none"
    cartacinco.style.display = "block"

})








