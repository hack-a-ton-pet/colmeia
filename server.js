const express = require('express')
const nodemailer = require('nodemailer')
const compression = require('compression')
const favicon = require('express-favicon')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()
const email = process.env.EMAIL
const password = process.env.PASSWORD
const MAX_FEEDBACK_SIZE = 3000

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email,
		pass: password,
	},
})

app.use(express.static(path.join(__dirname, './build')))
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')))
app.use(compression())
app.use(express.json())

app.post('/sendfeedback', function (req, res) {
	const content = req.body
	const mailOptions = {
		from: email,
		to: email,
		subject: 'Feedback da landing page',
		text: content.feedback.substring(0, MAX_FEEDBACK_SIZE),
	}
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error)
		} else {
			console.log('Email sent: ' + info.response)
		}
	})
	res.send()
})

app.use((req, res) => {
	if (req.protocol !== 'https') {
		res.redirect('https://' + req.headers.host + req.url)
	}
})

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.get('/feedback', function (req, res) {
	res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(port)
