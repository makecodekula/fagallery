function showInfo(id) {
  const allInfoBoxes = document.querySelectorAll(".info");
  allInfoBoxes.forEach(box => box.style.display = "none");

  const selectedBox = document.getElementById(id);
  selectedBox.style.display = "block";
}
