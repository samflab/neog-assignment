const tabs = document.querySelectorAll(".tablinks");
const tabContent = document.querySelectorAll(".tabcontent");
tabContent.forEach((content) => {
	content.style.display = "none";
	if (content.id === "Mumbai") {
		content.style.display = "block";
	}
});
tabs.forEach((tab) => {
	tab.addEventListener("click", function () {
		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});
		this.classList.add("active");
		selectTab(this.innerText);
	});
});
function selectTab(element) {
	tabContent.forEach((content) => {
		content.style.display = "none";
		if (content.id === element) {
			content.style.display = "block";
		}
	});
}
