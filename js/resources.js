// resources.js - handles the resource allocation form on resources.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resource-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Resource allocated.");
    form.reset();
  });
});
