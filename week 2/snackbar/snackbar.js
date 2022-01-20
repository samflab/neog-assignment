const baselineBtn = document.querySelector(".baseline-btn");
const baselineToast = document.querySelector(".baseline-toast");
const toastBtn = document.querySelector(".toast-btn");

const hideToast = () => (baselineToast.style.visibility = "hidden");
const showToast = () => {
  baselineToast.style.visibility = "visible";
  setTimeout(hideToast, 5000);
};

baselineBtn.addEventListener("click", showToast);

toastBtn.addEventListener("click", hideToast);
