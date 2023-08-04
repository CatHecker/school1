var x = 0
var x1 = 0
setInterval(function() {
	if (x1 == 20) {
		console.log(1)
	}
 	if (x > 4) {
 		x = 0 
 	}
 	x++
 	if (x==1) {
 		sportTheme.style.animation = 'slide1 1s forwards'
 		orkseTheme.style.animation = 'slide1 1s forwards'
 	}
 	if (x==2) {
 		orkseTheme.style.animation = 'slide2 1s forwards'
 		moveTheme.style.animation = 'slide2 1s forwards'
 	}
 	if (x==3) {
 		moveTheme.style.animation = 'slide3 1s forwards'
 		teacherTheme.style.animation = 'slide3 1s forwards'
 	}
 	if (x==4) {
 		sportTheme.style.animation = 'slide0 1s forwards'
 		teacherTheme.style.animation = 'slide4 1s forwards'
 	}
 }, 5000)


var navC = 1
nav1.onclick = nav2.onclick = nav3.onclick = nav4.onclick = nav5.onclick = nav6.onclick = nav7.onclick = nav8.onclick = navClickFunc
function navClickFunc(event) {
	document.getElementById('nav'+navC).style.backgroundColor = '#2c333a'
	event.target.style.backgroundColor = '#13101A' 
	navC = event.target.id.replace('nav', '')
	if (event.target.id != 'nav1') {
		main.style.animation = 'slideMain 2s forwards'
	}
	if (event.target.id == 'nav2') {
		aboutUs.style.display = 'block'
		setInterval(function() {
		return main.style.display = 'none'
		}, 900)
		aboutUs.style.animation = 'someinterestingName 1.3s forwards 0.8s'
		aboutUs.style.left = '20px'	
	}

}
	

nav1.onmouseover = nav1.onmouseout = nav2.onmouseover = nav2.onmouseout = nav3.onmouseover = nav3.onmouseout = nav4.onmouseover = nav4.onmouseout = nav5.onmouseover = nav5.onmouseout = nav6.onmouseover = nav6.onmouseout = nav7.onmouseover = nav7.onmouseout = nav8.onmouseover = nav8.onmouseout = navHoverFunc
function navHoverFunc(event) {
	let navC2 = document.getElementById('nav'+navC)
	if (event.type == 'mouseover') {
		for (i = 1; i < 9; i++) {
			document.getElementById('nav'+i).style.backgroundColor = '#2c333A'
		}
		navC2.style.backgroundColor = '#13101A'
		event.target.style.backgroundColor = '#13101A'
	}
	else {
		for (i = 1; i < 9; i++) {
			let i1 = document.getElementById('nav'+i)
			if (i1.id != navC2.id) {
			i1.style.backgroundColor = '#2c333A'
			}
		}
		if (event.target.id != navC2.id) {
		event.target.style.backgroundColor = '#2c333a'	
	}
	}
}


let t1 = t2 = t3 = t4 = t5 = t6 = 0
function f2() {
	let rand = Math.random()
	let n2 = 0
	if (rand <= 0.2) {
		n2 = 0
	}
	else if (rand <= 0.4) {
		n2 = 10
	}
	else if (rand <= 0.6) {
		n2 = 20
	}
	else if (rand <= 0.8) {
		n2 = 30
	}
	else {
		n2 = 40
	}
	let n1 = Math.floor(Math.random()*10)
	let num = n2 + n1
	if (num==t1 || num==t2 || num==t3 || num==t4 || num==t5 || num > 43) {
		return f2()
	}
	else {
		return num
	}
} 
let tDiv = document.createElement('div')
let tP = document.createElement('p')
let tBr = document.createElement('br')
tP.style.border = 'none'
tDiv.style.position = 'relative'
tDiv.style.marginLeft = '65%'
tDiv.style.width = '40%'
tP.style.fontWeight = 'bold'
tP.innerHTML = 'Открыть полный<br> список учителей'
tP.style.display = 'block'
tP.style.paddingBottom = '50px'
tDiv.style.height = '91.6px' 
tDiv.style.backgroundColor = '#10131A'
tP.style.backgroundColor = '#10131A'
tDiv.onmouseover = tDiv.onmouseout =  tFuncFull
function tFuncFull(event) {
	if (event.type == 'mouseover') {
		return tP.style.backgroundColor = '#3a332c'
	}
	tP.style.backgroundColor = '#10131A'
}
t1 = f2()
t2 = f2()
t3 = f2()
t4 = f2()
t5 = f2()
t6 = f2()
let te1 = document.getElementById('teacher'+t1)
let te2 = document.getElementById('teacher'+t2)
let te3 = document.getElementById('teacher'+t3)
let te4 = document.getElementById('teacher'+t4)
let te5 = document.getElementById('teacher'+t5)
let te6 = document.getElementById('teacher'+t6)
let ta1 = document.createElement('div')
let ta2 = document.createElement('div')
let ta3 = document.createElement('div')
teachersLi.appendChild(ta1)
teachersLi.appendChild(ta2)
teachersLi.appendChild(ta3)
let tc1 = teachersLi.removeChild(te1)
let tc2 = teachersLi.removeChild(te2)
let tc3 = teachersLi.removeChild(te3)
let tc4 = teachersLi.removeChild(te4)
let tc5 = teachersLi.removeChild(te5)
let tc6 = teachersLi.removeChild(te6)
ta1.appendChild(tc1)
ta1.appendChild(tc2)
ta2.appendChild(tc3)
ta2.appendChild(tc4)
ta3.appendChild(tc5)
ta3.appendChild(tc6)
ta1.style.display = ta2.style.display = ta3.style.display = 'flex'
te6.style.display = te5.style.display = te4.style.display = te3.style.display = te2.style.display = te1.style.display = 'block' 
ta3.style.border = ta2.style.border = ta1.style.border = '1px solid black'
tDiv.appendChild(tP)
tDiv.appendChild(tBr)
tc6.appendChild(tDiv)








