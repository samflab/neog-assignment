const heart = document.querySelector(".fa-heart");

heart.addEventListener("click", () =>{
    heart.classList.remove("far");
    heart.classList.add("fas");
    heart.style.color ="rgb(22 81 133)"
})