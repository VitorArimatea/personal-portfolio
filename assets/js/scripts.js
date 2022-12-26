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

writerEffect(document.getElementById('profession_title'));

// Menu mobile

function showList() {
  let mobileNavList = document.querySelector('.mobile_nav_list');
  if (mobileNavList.classList.contains('show')) {
    mobileNavList.classList.remove('show');
  }
  else {
    mobileNavList.classList.add('show');
  }
}