const birthday = new Date()
const WeekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
console.log(WeekDay[birthday.getDay()])
context = canvas1.getContext('2d')
context.moveTo(220, 0)
context.lineTo(220, 150)
context.lineTo(0, 75)
context.fillStyle = 'rgb(44, 51, 58)'
context.fill()
ctx = canvas.getContext('2d')
ctx.moveTo(0, 0)
ctx.lineTo(0, 150)
ctx.lineTo(220, 75)
ctx.fillStyle = 'rgb(44, 51, 58)'
ctx.fill()
let pos = 0
let i = 0
nextBut.onmouseover = function() {
	ctx.fillStyle = 'rgb(16, 19, 26)'
	ctx.fill()
}
nextBut.onmouseout = function() {
	ctx.fillStyle = 'rgb(44, 51, 58)'
	ctx.fill()
}
prevBut.onmouseover = function() {
	context.fillStyle = 'rgb(16, 19, 26)'
	context.fill()
}
prevBut.onmouseout = function() {
	context.fillStyle = 'rgb(44, 51, 58)'
	context.fill()
}

nextBut.onclick = prevBut.onclick = function(event) {
	let posOld = pos

	if(event.target.parentNode.id == 'nextBut' | event.target.id == 'nextBut') {
		pos++
	}
	else {
		pos--
	}
	if (pos == 0) {
		raspID.innerHTML = 'Расписание 5-8 классов'
		prevBut.style.display = 'none'
	}
	if (pos == 1) {
		raspID.innerHTML = 'Расписание 9-11 классов'
		prevBut.style.display = 'inline'
		nextBut.style.display = 'flex'
	}
	if (pos == 2) {
		nextBut.style.display = 'none'
	}
	const interval = setInterval(function() {
		if (posOld < pos) {
			if (i >= pos*101) {
				i = pos*101
				clearInterval(interval)
			}
			else {
				i = i + 4
			}
		}
		else {
			if (i <= pos*101) {
				i = pos*101
				clearInterval(interval)
			}
			else {
				i = i - 4
			}
		}
		sliderStud.style.left = '-' + i + 'vw'

	}, 10)
}
