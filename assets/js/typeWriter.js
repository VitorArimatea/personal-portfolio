const professionTitle = document.querySelector(".profession_title")
const text = "Desenvolvedor de Software"
let index = 0

function typeWriter() {
  if (index < text.length) {
    professionTitle.innerHTML += text.charAt(index)
    index++
    setTimeout(typeWriter, 50)
  } else {
    cursorBlink()
  }
}

typeWriter();
