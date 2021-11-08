// Dark Mode
const html = document.querySelector('html')
const checkbox = document.querySelector('#btn-dark-mode')

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
  // house 1
  document.querySelector("#house1").style.background = "#FFDC00"
  document.querySelectorAll("select")[0].selectedIndex = 1
  document.querySelectorAll("select")[1].selectedIndex = 4
  document.querySelectorAll("select")[2].selectedIndex = 1
  document.querySelectorAll("select")[3].selectedIndex = 3
  document.querySelectorAll("select")[4].selectedIndex = 3


  // house 2
  document.querySelector("#house2").style.background = "#0074D9"
  document.querySelectorAll("select")[5].selectedIndex = 2
  document.querySelectorAll("select")[6].selectedIndex = 2
  document.querySelectorAll("select")[7].selectedIndex = 3
  document.querySelectorAll("select")[8].selectedIndex = 1
  document.querySelectorAll("select")[9].selectedIndex = 2

  // house 3
  document.querySelector("#house3").style.background = "#FF4136"
  document.querySelectorAll("select")[10].selectedIndex = 5
  document.querySelectorAll("select")[11].selectedIndex = 3
  document.querySelectorAll("select")[12].selectedIndex = 5
  document.querySelectorAll("select")[13].selectedIndex = 4
  document.querySelectorAll("select")[14].selectedIndex = 4

  // house 4
  document.querySelector("#house4").style.background = "#2ECC40"
  document.querySelectorAll("select")[15].selectedIndex = 4
  document.querySelectorAll("select")[16].selectedIndex = 1
  document.querySelectorAll("select")[17].selectedIndex = 2
  document.querySelectorAll("select")[18].selectedIndex = 5
  document.querySelectorAll("select")[19].selectedIndex = 5

  // house 5
  document.querySelector("#house5").style.background = "#fff"
  document.querySelectorAll("select")[20].selectedIndex = 3
  document.querySelectorAll("select")[21].selectedIndex = 5
  document.querySelectorAll("select")[22].selectedIndex = 4
  document.querySelectorAll("select")[23].selectedIndex = 2
  document.querySelectorAll("select")[24].selectedIndex = 1
}

// Reset
function reset() {
  const house = document.querySelectorAll("ul")
  house.forEach(element => {
    element.style.background = "transparent"
  })

  const select = document.querySelectorAll("select")
  select.forEach(element => {
    element.selectedIndex = 0;
  })
}

// Clues



