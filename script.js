console.log("Hello world");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

let votesInteresting = 23;
let voteMindblowing = 5;

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}
