function bindInput(inputId, prevId, placeHolder) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(prevId);

  input.addEventListener("input", () => {
    preview.textContent = input.value.trim() || placeHolder;
  });
}

bindInput("nameInput", "prevName", "Your Name");
bindInput("roleInput", "prevRole", "Your Role");
bindInput("emailInput", "prevEmail", "your@email.com");
bindInput("phoneInput", "prevPhone", "00000 00000");
bindInput("summaryInput", "prevSummary", "Write summary ...");
bindInput("educationInput", "prevEducation", "Add your education ...");
bindInput("skillsInput", "prevSkills", "Write skills ...");
bindInput("projectsInput", "prevProjects", "Write projects ...");
bindInput("otherInput", "prevOther", "Write other info ...");

document.getElementById("Download_btn").addEventListener("click", () => {
  document.body.classList.add("print-mode");

  const resume = document.getElementById("resume");

  const opt = {
  margin: 0,
  filename: "My_Resume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: {
    scale: 2,
    scrollY: 0,
    scrollX: 0,
    useCORS: true
  },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
};


  html2pdf()
    .from(resume)
    .set(opt)
    .save()
    .then(() => {
      document.body.classList.remove("print-mode");
    });
});

