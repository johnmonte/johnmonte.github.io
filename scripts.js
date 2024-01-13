const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#profile" ?
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

const toggle = document.getElementsByClassName('toggle-switch')[0];
toggle.checked = true;
toggle.addEventListener("click", () => {
  if (toggle.checked === true) {
    theme.classList.add("dark");
  } else {
    theme.classList.remove("dark");
    toggle.checked = false;
  }
});