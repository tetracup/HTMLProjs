let container = document.querySelector("#container")

const redP = document.createElement('p')
redP.textContent = "Hey I'm red!"
redP.style.cssText = 'color: red'
container.appendChild(redP)

const h3Blue = document.createElement('h3')
h3Blue.textContent = "I'm a blue h3!"
h3Blue.style.cssText = 'color: blue'
container.appendChild(h3Blue)

const divBlack = document.createElement('div')
divBlack.classList.add('specialContainer')
divBlack.style.cssText = "border-style: solid; border-color: black; background-color: pink "
container.appendChild(divBlack)

container = document.querySelector('.specialContainer')
const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
container.appendChild(h1)

const anotherP = document.createElement('p')
anotherP.textContent = "ME TOO!"
container.appendChild(anotherP)

const btn = document.querySelector(".alertButton")

btn.addEventListener('click', function (e){
    e.target.style.background = "blue"
})



