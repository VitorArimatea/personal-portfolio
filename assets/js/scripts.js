//Efeito de maquina de escrever

function writerEffect(element, delay = 0) {
  let splitElement = element.innerHTML.split('');
  element.innerHTML = '';
  splitElement.forEach((value, index) => {
    setTimeout(() => {
    element.innerHTML += value
    },60*index)
  })
  delay
}

const professionTitle = document.getElementById("profession_title")
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

function cursorBlink() {
    professionTitle.innerHTML += "|"
    setInterval(() => {
        if (professionTitle.innerHTML.endsWith("|")) {
            professionTitle.innerHTML = professionTitle.innerHTML.slice(0, -1)  
        } else {
            professionTitle.innerHTML += "|"
        }
    }, 600)
}

typeWriter()