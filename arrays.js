var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
    var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningofArray(array, element) {
 array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArrayEnd = [...array, element]
  return newArrayEnd
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var printThis = array[index]
  return printThis
}

