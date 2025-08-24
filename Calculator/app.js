const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
let screenValue = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (btn.classList.contains("num")) {
      if (screen.innerText === "0") {
        screen.innerText = value;
      } else {
        screen.innerText += value;
      }
      screenValue = screen.innerText;
    } else if (btn.classList.contains("ope")) {
      screen.innerText += value;
      screenValue = screen.innerText;
    } else if (btn.classList.contains("clear")) {
      screen.innerText = "0";
      screenValue = "";
    } else if (btn.classList.contains("equ")) {
      try {
        let result = eval(screenValue);
        screen.innerText = result;
        screenValue = result.toString();
      } catch (error) {
        screen.innerText = "Error";
        screenValue = "";
      }
    }
  });
});
