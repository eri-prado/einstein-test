function selectColor(list) {
  const houses = document.querySelectorAll(".house");
  const optionValue = list.options[list.selectedIndex].value


  function change(item) {
    [].forEach.call(houses, house => {
      if (house.className === optionValue) {
        house.classList.toggle(optionValue)
      }
    })
    item.classList.toggle(optionValue);
  }

  [].forEach.call(houses, house => {
    house.addEventListener("change", function () {
      change(this, optionValue)
    })
  })
}




  // if (optionValue == "yellow") {
  //   house.classList.add('yellow')

  // for (var i = 0; i < house.length; ++i) {
  //   var item = house[i]
  //   item.style.background = optionValue
  // }

  // house.style.background = optionValue

// function change(listColors) {
//   var optionValue = listColors.options[listColors.selectedIndex].value
//   var house = document.querySelectorAll(".house")
//   for (var i = 0; i < house.length; ++i) {
//     var item = house[i]
//     item.style.background = optionValue
//   }

// }

