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

/* timer = setInterval(function() {
  $('.bubble').addClass('fade-in');
  $('.card').addClass('reposition');
}, 8000); */

/* $('#close').click(function () {
  $('.bubble').addClass('fade-out');
  $('.bubble').removeClass('fade-in');
  $('.card').removeClass('reposition');
  clearInterval(timer);
  timer = 0;
}); */