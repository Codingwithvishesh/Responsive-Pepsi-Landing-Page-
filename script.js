// change product image
function imgSlider(image) {
	const pepsi = document.querySelector(".pepsi");
	if (pepsi) {
		pepsi.src = image;
	}
}

// change background color
function changeBgColor(color) {
	const section = document.querySelector(".sec");
	if (section) {
		section.style.backgroundColor = color;
	}
}

// mobile menu toggle
function menuToggle() {
	const toggleMenu = document.querySelector(".toggleMenu");
	const navigation = document.querySelector(".navigation");

	if (toggleMenu && navigation) {
		toggleMenu.classList.toggle("active");
		navigation.classList.toggle("active");
	}
}