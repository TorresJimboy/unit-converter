
const feetPerMeter = 3.281 
const gallonPerLiter = 0.264 
const poundPerKilogram = 2.204 
let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    
    let input = Number(inputEl.value)
    if (!isNaN(input) && input !== 0) {
        const feet = (input * feetPerMeter).toFixed(3)
        const meters = (input / feetPerMeter).toFixed(3)
        lengthEl.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
        const gallons = (input * gallonPerLiter).toFixed(3)
        const liters = (input / gallonPerLiter).toFixed(3)
        volumeEl.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
        const pounds = (input * poundPerKilogram).toFixed(3)
        const kilo = (input / poundPerKilogram).toFixed(3)
        massEl.textContent = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilo} kilos`
    }else {
    const error = "Please enter a number to convert."
    lengthEl.textContent = error
    volumeEl.textContent = error
    massEl.textContent = error
    
    
}
})   



