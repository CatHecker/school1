var y = 1
setInterval(function() {
	let f1 = function() {
		$('#sliderNews').animate({left: '-=100vw'}, 1000)
	}
	if (y < 4) {
		f1()
	 	y++
	}
	if (y == 4) {
		f1()
		$('#sliderNews').animate({left: '100vw'}, 1)
		f1()
		y = 1
	}
}, 10000)


for (let i = 1; i < 5; i++) {
	let t = document.getElementById('teacher'+i)
	t.style.display = 'inline'
}



