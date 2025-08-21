let count = 0;

let inc = document.querySelector(".btn-inc");
let dec = document.querySelector(".btn-dec");
let ref = document.querySelector(".btn-ref");
let dCount = document.querySelector("p");

inc.addEventListener("click", () => {
  count++;
  dCount.innerText = count;
  console.log("Increment successful");
});

dec.addEventListener("click", () => {
  count--;
  dCount.innerText = count;
  console.log("decremented successful");
});

ref.addEventListener("click", () => {
  count = 0;
  dCount.innerText = count;
  console.log("Refresh successful");
});
