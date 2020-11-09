var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var container = document.getElementById("Container");

var backgroundImg = new Array(
	"Imgs/Bg-Leaves.jpg",
	"Imgs/Flowers.jpg",
	"Imgs/Bg-Raver.jpg",
	"Imgs/Butterfly.jpg",
	"Imgs/Draw.jpg",
	"Imgs/Flowers.jpg",
	"Imgs/Girl.png",
	"Imgs/Girls-Couple.jpg",
	"Imgs/Paradise-Dark.jpg",
);

let i = 0;
next.onclick = function() { 
	if (i < 8) {
		container.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
		thumbnail[i+1].classList.add("active");
		thumbnail[i].classList.remove("active");
		i++;
	}
}

prev.onclick = function() { 
	if (i > 0) {
		container.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
		thumbnail[i-1].classList.add("active");
		thumbnail[i].classList.remove("active");
		i--;
	}
}