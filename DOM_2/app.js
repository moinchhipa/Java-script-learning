let btns = document.querySelectorAll("button");
console.dir(btns);

for (btn of btns) {
  // btn.addEventListener("click", sayHello);
  // btn.addEventListener("click", sayName);
  btn.addEventListener("dblclick", function () {
    console.log("you double clicked a button");
  });
}
function sayHello() {
  alert("Hello!");
}
function sayName() {
  alert("My name is Moin!");
}
