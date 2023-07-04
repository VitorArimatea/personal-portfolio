const professionTitle = document.querySelector(".profession-title");
const text = "Desenvolvedor de Software";
let index = 0;

function typeWriter() {
  (index < text.length);
  professionTitle.innerHTML += text.charAt(index);
  index++;
  setTimeout(typeWriter, 50);
};

typeWriter();
