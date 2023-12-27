
import data   from "../script/index.js";
const Img = document.querySelector("#cardImg").setAttribute("src", data[0]["img"] );
const title = document.getElementById("title").innerHTML = data[0]["name"];
const Description = document.getElementById("comment").innerHTML = data[0]["description"];


const cardImg = document.querySelector("#cardImg");
const cardTitle = document.getElementById("title")
const cardDescription = document.getElementById("comment")
const btn = document.querySelector("#btn");
btn.addEventListener("click",function() {
    setTimeout(function(){
        const card  = data[Math.trunc(Math.floor(Math.random(0,1)*data.length))]
        cardImg.setAttribute("src",card["img"])
        cardTitle.innerHTML = card.name
        cardDescription.innerHTML = card.description
    
    },500)
    })
console.log(card);