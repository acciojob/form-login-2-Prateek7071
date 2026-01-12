const Fname=document.getElementById('Fname')
const Lname=document.getElementById('Lname')
const Pnumber=document.getElementById('Pnumber')
const Email=document.getElementById('Email')
const Submit=document.getElementById('Submit')
Submit.addEventListener('click',(e)=>{
		e.preventDefault()
		alert(`First Name: ${Fname.value} Last Name: ${Lname.value} Phone Number: ${Pnumber.value} Email ID: ${Email.value}`)
})