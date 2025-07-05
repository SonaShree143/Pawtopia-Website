function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown");
  const arrow = document.getElementById("arrow");
  dropdown.classList.toggle("show");
arrow.className = dropdown.classList.contains("show") ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
}
