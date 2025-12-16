function bindInput(inputId, prevId, placeHolder){
    const input = document.getElementById(inputId);
    const preview = document.getElementById(prevId);

    input.addEventListener("input", () => {
        preview.textContent = input.value.trim() || placeHolder;
    })
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

