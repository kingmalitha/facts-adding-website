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
let votesMindblowing = 5;
let votesFalse = 4;

let totalUpvotes = votesInteresting + votesMindblowing;

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

//Learn about if statements
//learn about ternary operator

const message =
  totalUpvotes > votesFalse
    ? "The fact is True"
    : "Might be false, check more sources...";

//working with strings

//Arrow Functions
//Arrays

//Object
const factObj = {
  text: "Hello world, this is king",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `${this.text} was created in ${this.createdIn}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());
