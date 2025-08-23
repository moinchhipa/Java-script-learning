let btn = document.querySelector(".gen");
let main = document.querySelector("body");
let dColor = document.querySelector("p");

btn.addEventListener("click", () => {
  red = r();
  green = g();
  blue = b();
  main.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  dColor.innerText = `rgb(${red}, ${green}, ${blue})`
});

function r() {
  const red = Math.floor(Math.random() * 256);
  return red;
}

function g() {
  const green = Math.floor(Math.random() * 256);
  return green;
}

function b() {
  const blue = Math.floor(Math.random() * 256);
  return blue;
}
