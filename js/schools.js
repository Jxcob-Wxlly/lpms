// schools.js - handles the school registration form on schools.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("school-form");
  const list = document.getElementById("school-list");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("school-name").value.trim();
    const principal = document.getElementById("principal-name").value.trim();
    const contact = document.getElementById("contact-number").value.trim();

    if (!name || !principal || !contact) {
      alert("Please fill in all required fields.");
      return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${principal}</td><td>${contact}</td>`;
    list.appendChild(row);

    form.reset();
  });
});
