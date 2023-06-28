function showList() {
  var btn = document.querySelector(".btn_mobile-list");
  btn.classList.toggle("open");
  
  let mobileNavList = document.querySelector(".mobile_nav-list")
  if (mobileNavList.classList.contains("show")) {
    mobileNavList.classList.remove("show");
  } else {
    mobileNavList.classList.add("show");
  };
};

let navItem = document.querySelectorAll(".nav-item");
navItem.forEach(function(item) {
  item.addEventListener("click", function() {
    let mobileNavList = document.querySelector(".mobile_nav-list");
    if (mobileNavList.classList.contains("show")) {
      mobileNavList.classList.remove("show");
      let btn = document.querySelector(".btn_mobile-list");
      btn.classList.remove("open");
    }
  });
});







