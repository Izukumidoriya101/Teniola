// DARK MODE

let darkBtn = document.getElementById("darkMode")

darkBtn.onclick = function(){

document.body.classList.toggle("dark")

}


// MOBILE MENU

let menu = document.getElementById("menu-toggle")
let nav = document.getElementById("nav-links")

menu.onclick = function(){

nav.classList.toggle("active")

}


// TYPING EFFECT

let text = ["Statistics Student","Web Developer","Data Analyst"]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

if(count === text.length){
count = 0
}

currentText = text[count]

letter = currentText.slice(0,++index)

document.getElementById("typing").textContent = letter

if(letter.length === currentText.length){

count++
index = 0

setTimeout(type,1000)

}else{

setTimeout(type,100)

}

}

type()
// VISITOR COUNTER

let visits = localStorage.getItem("visits")

if(visits == null){
visits = 1
}else{
visits++
}

localStorage.setItem("visits",visits)

console.log("Visitors:",visits)

document.getElementById("visitor").innerText =
"Visitors: " + visits
// CHATBOT

let toggle = document.getElementById("chat-toggle")
let chatbox = document.getElementById("chatbox")

toggle.onclick = function(){
chatbox.style.display =
chatbox.style.display === "flex" ? "none" : "flex"
}

let input = document.getElementById("chat-input")

input.addEventListener("keypress",function(e){

if(e.key === "Enter"){

let message = input.value

let chat = document.getElementById("chat-messages")

chat.innerHTML += "<p><b>You:</b> "+message+"</p>"

let reply = "I am Teniola's portfolio assistant."

if(message.includes("skills")){
reply="Teniola knows Statistics, HTML, CSS and JavaScript."
}

if(message.includes("contact")){
reply="Phone: 08033869594"
}

chat.innerHTML += "<p><b>Bot:</b> "+reply+"</p>"

input.value=""

}

})
function login(){

let pass = document.getElementById("adminPass").value

if(pass === "admin123"){

alert("Welcome Admin")

}else{

alert("Wrong Password")

}

}