//const scoreboardView = require('./scoreboardView')
import scoreboardView from './scoreboardView.js';
import model from './model.js';
import fs from 'fs';

const readCSV = () => {
  try {
    const data = fs.readFileSync('VRBPontos.csv', 'utf8').split("\n").filter(n => n !== '')
    return data
  } catch (err) {
    return err
  }
}

const res = readCSV()
console.log(res[2])

// ;;;;

let modelArr = [] // << An array of model objects
res.forEach(stringsArr => { // << Transforming a STRINGS array into an array of ONE STRING
  console.log("stringsArr: " + stringsArr)
  const splitedStringsArr = stringsArr.split(',')
  console.log(splitedStringsArr)

  modelArr.push(new model(splitedStringsArr[0], splitedStringsArr[1], splitedStringsArr[2], splitedStringsArr[3], splitedStringsArr[4], splitedStringsArr[5], splitedStringsArr[6], splitedStringsArr[7]))
})

console.log(modelArr[3].track5)

const root = document.querySelector("#app");
const view = new scoreboardView(root, "Nome", "Pista1", "Pista2", "Pista3", "Pista4", "Pista5", "Pista6", "Total");
view.update();