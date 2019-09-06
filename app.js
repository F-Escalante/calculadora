

window.onload = function() {

let firstValue
let selectedOperator

const display = document.getElementById("display")


const btnMC = document.getElementById("btnMC")
const btnMMore = document.getElementById("btnMMore")
const btnMLess = document.getElementById("btnMLess")
const btnDiv = document.getElementById("btnDiv")
const btnSeven = document.getElementById("btnSeven")
const btnEight = document.getElementById("btnEight")
const btnNine = document.getElementById("btnNine")
const btnMult = document.getElementById("btnMult")
const btnFour = document.getElementById("btnFour")
const btnFive = document.getElementById("btnFive")
const btnSix = document.getElementById("btnSix")
const btnLess = document.getElementById("btnLess")
const btnOne = document.getElementById("btnOne")
const btnTwo = document.getElementById("btnTwo")
const btnTree = document.getElementById("btnTree")
const btnMore = document.getElementById("btnMore")
const btnC = document.getElementById("btnC")
const btnZero = document.getElementById("btnZero")
const btnPoint = document.getElementById("btnPoint")
const btnEquals = document.getElementById("btnEquals")


//console.log(btnOne)
/*btnOne.onclick = function(event){
display.innerText += event.target.textContent
}*/


console.dir(display)


const numberOnclick = function(event){

  display.innerText += event.target.textContent
}

btnNine.onclick = numberOnclick
btnEight.onclick = numberOnclick
btnSeven.onclick = numberOnclick
btnSix.onclick = numberOnclick
btnFive.onclick = numberOnclick
btnFour.onclick = numberOnclick
btnTree.onclick = numberOnclick
btnTwo.onclick = numberOnclick
btnOne.onclick = numberOnclick
btnZero.onclick = numberOnclick
btnPoint.onclick = numberOnclick

btnC.onclick = function(){

  display.innerText = ""
}

const operatorFunction = function(event){

  firstValue = parseFloat(display.innerText)
  display.innerText = ""
  selectedOperator = event.target.textContent

}

btnDiv.onclick = operatorFunction
btnMult.onclick = operatorFunction
btnMore.onclick = operatorFunction
btnLess.onclick = operatorFunction

btnEquals.onclick = function(event){

secondValue = parseFloat(display.innerText)
let result

switch(selectedOperator){

  case '+':
  result = firstValue + secondValue
  break;
  case '-':
  result = firstValue - secondValue
  break;
  case '/':
  result = firstValue / secondValue
  break;
  case '*':
  result = firstValue * secondValue
  break;


}

display.innerText = result
}

}
