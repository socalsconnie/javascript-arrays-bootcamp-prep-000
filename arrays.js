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
  
}