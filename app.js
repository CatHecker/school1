const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req, res) => {
	res.render('school1')
})

app.get('/aboutUs', (req, res) => {
	res.render('aboutUs')
})

app.get('/school_history', (req, res) => {
	res.render('life')
})

app.get('/for_parents', (req, res) => {
	res.render('parents')
})

app.get('/students', (req, res) => {
	res.render('students')
})

app.get('/teachers', (req, res) => {
	res.render('teachers')
})

app.get('/nutrition', (req, res) => {
	res.render('nutrition')
})

app.get('/contacts', (req, res) => {
	res.render('contacts')
})



app.post('/', (req, res) => {
	if(req.body.field0) 
		return res.redirect('/')
	if(req.body.field1) 
		return res.redirect('/aboutUs')
	if(req.body.field2) 
		return res.redirect('/school_history')
	if(req.body.field3) 
		return res.redirect('/for_parents')
	if(req.body.field4) 
		return res.redirect('/students')
	if(req.body.field5) 
		return res.redirect('/teachers')
	if(req.body.field6) 
		return res.redirect('/nutrition')
	if(req.body.field7) 
		return res.redirect('/contacts')
})
const port = 3000
app.listen(port, () => {
	console.log(`server meowked: http://localhost:${port}`)
})