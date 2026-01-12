//your JS code here. If required.
const Fname=document.getElementById('Fname')
const Lname=document.getElementById('Lname')
const Pnumber=document.getElementById('Pnumber')
const Email=document.getElementById('Email')
const Submit=document.getElementById('Submit')

Submit.addEventListener('click',(e)={
	e.preventDefault()
	Alert(`First Name: ${Fname} Last Name: ${Lname} Phone Number: ${Pnumber} Email ID: ${Email}`)
})