const navigationHeight = document.querySelector(".fixed-top").offsetHeight;

document.documentElement.style.setProperty(
	"--scroll-padding",
	navigationHeight - 1 + "px"
);
