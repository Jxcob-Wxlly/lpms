// learners.js - handles the learner registration form on learners.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("learner-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Learner registered.");
    form.reset();
  });
});
