var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementtoBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningofArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}