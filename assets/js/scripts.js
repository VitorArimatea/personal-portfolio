//Navbar mobile 
function showList() {
    let mobileNavList = document.querySelector(".mobile_nav_list")
    if (mobileNavList.classList.contains("show")) {
        mobileNavList.classList.remove("show")
    } else {
        mobileNavList.classList.add("show")
        document.querySelector(".btn_list").scr = "assets/img/close_icon.svg"
    }
}

//Efeito de maquina de escrever

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

typeWriter()