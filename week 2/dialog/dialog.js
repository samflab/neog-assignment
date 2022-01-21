const headerBtn = document.querySelector(".header-btn");
const headerModal = document.querySelector(".header-modal");
const cancelBtn = document.querySelector(".cancel-btn");

headerBtn.addEventListener("click", () =>{
    headerModal.style.visibility = "visible";
})

cancelBtn.addEventListener("click", () => {
    headerModal.style.visibility = "hidden";
})