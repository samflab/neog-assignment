const toggleBtn = document.querySelector(".toggle");
const bubbleToggle = document.querySelector(".bubble-toggle");

toggleBtn.addEventListener("click", () => {
  if (bubbleToggle.style.display === "none")
    bubbleToggle.style.display = "block";
  else bubbleToggle.style.display = "none";
});
