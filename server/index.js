const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Result = require('./models')
const url = "mongodb+srv://Federico:eurocase_19@cluster0-hkvge.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser : true}, (error)=>{
  if(error){
    console.log(error)

  }else{

    console.log("Base de datos conectada")
  }
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

/*app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  console.log(req.params)

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)
  let result
  switch(req.params.selectedOperator){

    case '+':
    result = firstValue + secondValue
    break;
    case '-':
    result = firstValue - secondValue
    break;
    case '÷':
    result = firstValue / secondValue
    break;
    case '*':
    result = firstValue * secondValue
    break;


  }

  res.send({ result: result })
})*/


app.get('/getresultSuma/:firstValue/:secondValue', function (req, res) {
  console.log(req.params)

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)
  let result
  result = firstValue + secondValue
  const newResult = new Result({value: result })
  newResult.save((error, result) => {

    if(error){
      console.log(error)
    }
      else{
        console.log(result)
      }
    }
  })

  res.send({ result: result })

})

app.get('/getresultResta/:firstValue/:secondValue', function (req, res) {
  console.log(req.params)

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)
  let result
  result = firstValue - secondValue

  res.send({ result: result })

})

app.get('/getresultDividir/:firstValue/:secondValue', function (req, res) {
  console.log(req.params)

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)
  let result
  result = firstValue / secondValue

  res.send({ result: result })

})

app.get('/getresultMultiplicar/:firstValue/:secondValue', function (req, res) {
  console.log(req.params)

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)
  let result
  result = firstValue * secondValue

  res.send({ result: result })

})

app.listen(3000, () => {
  console.log("Server corriendo en puerto 3000")
})
