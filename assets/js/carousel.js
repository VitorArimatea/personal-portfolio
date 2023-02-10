const carousel = document.querySelector(".projects_carousel")
const slides = carousel.children
const prevButton = document.querySelector(".prev_button")
const nextButton = document.querySelector(".next_button")

let currentSlide = 0

slides[currentSlide].style.display = "flex"

prevButton.addEventListener("click", () => {
    slides[currentSlide].style.display = "none"
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    slides[currentSlide].style.display = "flex"
})

nextButton.addEventListener("click", () => {
    slides[currentSlide].style.display = "none"
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].style.display = "flex"
})
