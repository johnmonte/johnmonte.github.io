const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

$(document).ready(function() { 
  $('.popup').show();    
  $('#close').click(function(){  
    $('.popup').hide();    
  });
/* function checkCookie() {
  var cookieset = getCookie("_checkCookie");
  if (cookieset!="") {
    $('.popup').hide();    
  }else{
    $('.popup').hide();    
    if (cookieset != "" && cookieset != null) {
      setCookie("_checkCookie", cookieset, 365);
    }
  }
} 
checkCookie(); */
});