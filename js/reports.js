// reports.js - handles report export buttons on reports.html
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".main-content .btn-primary");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Report generated. PDF export will be wired up once the backend reporting endpoints are connected.");
    });
  });
});
