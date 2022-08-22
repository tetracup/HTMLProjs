let slider = document.querySelector("#resSlider")
let container = document.querySelector(".container")
let textInput = document.querySelector("#textInput")
let dimensions = document.querySelector("#dimensions")
let check = document.querySelector("#check")
let clear = document.querySelector("#clear")
let isPressed = false
let areGridLinesOn
let pixels = []

function UpdateCheck()
{
    if(check.checked)
        areGridLinesOn = true
    else 
        areGridLinesOn = false
}

function UpdateGrid()
{
    pixels = []
    dimensions.textContent = `${slider.value}x${slider.value}`
    textInput.value = slider.value
    container.style.cssText = `grid-template-columns: repeat(${slider.value}, auto)`
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for(let i = 0; i < slider.value*slider.value; i++)
    {
        
        const newElement = document.createElement("pixel")
        pixels.push(newElement)
        if(areGridLinesOn)
            newElement.style.cssText = "border-style: solid"
        newElement.addEventListener("mousemove", Draw)
        newElement.dataset.opacity = 0.1;
        newElement.ondragstart = () => {return false;}
        container.appendChild(newElement)
    }
}

function Draw(evt)
{
    if(isPressed)
    {
        evt.target.style.backgroundColor = `rgba(0, 0, 0, ${evt.target.dataset.opacity})`
        evt.target.dataset.opacity = Number(evt.target.dataset.opacity) + 0.1
    }
}

window.addEventListener("mousedown", PressDown)
window.addEventListener("mouseup", PressUp)

function PressDown(evt)
{
    if(evt.button != 0)
        return;
    isPressed = true
    if(evt.target.localName == "pixel")
    {
        evt.target.style.backgroundColor = `rgba(0, 0, 0, ${evt.target.dataset.opacity})`
        evt.target.dataset.opacity = Number(evt.target.dataset.opacity) + 0.1
    }  
}

function PressUp(evt)
{
    isPressed = false
}

function UpdateSlider()
{
    if(textInput.value > 100)
        textInput.value = 100
    else if(textInput.value < 0)
        textInput.value = 0

    slider.value = textInput.value
    UpdateGrid();
}

function ChangeGridLines()
{
    
    UpdateCheck()
    console.log(pixels)
    pixels.forEach(element =>
    {
        if(areGridLinesOn)
            element.style.cssText += "border-style: solid"
        else
            element.style.cssText += "border-style: none"
    })
}

if(areGridLinesOn)
    ChangeGridLines()

UpdateCheck()
UpdateGrid();

slider.onchange = UpdateGrid;
textInput.onchange = UpdateSlider
clear.onclick = UpdateGrid
check.onchange = ChangeGridLines

