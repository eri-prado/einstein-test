function change(list) {
  var optionValue = list.options[list.selectedIndex].value
  var house = document.querySelector(".house")
  house.style.background = optionValue
}