// Dark Mode
const html = document.querySelector('html')
const checkbox = document.querySelector('#switch')

checkbox.addEventListener('change', function () {
  html.classList.toggle('dark-mode')
})


// Change colors
function colorHouse1(list) {
  const optionValue = list.options[list.selectedIndex].value
  const house = document.getElementById("house1")
  house.style.background = optionValue
}

function colorHouse2(list) {
  const optionValue = list.options[list.selectedIndex].value
  const house = document.getElementById("house2")
  house.style.background = optionValue
}

function colorHouse3(list) {
  const optionValue = list.options[list.selectedIndex].value
  const house = document.getElementById("house3")
  house.style.background = optionValue
}

function colorHouse4(list) {
  const optionValue = list.options[list.selectedIndex].value
  const house = document.getElementById("house4")
  house.style.background = optionValue
}

function colorHouse5(list) {
  const optionValue = list.options[list.selectedIndex].value
  const house = document.getElementById("house5")
  house.style.background = optionValue
}

// Solution
function solution() {
  
}
