const datas = ["123", "abc", "dfg"]

const multpleData = (index, data) => `${index}${data}`
const defData = datas.map(multpleData)

console.log(defData) //["0: 123", "1: abc", "2: dfg"]

const names = ["jung", "jungKim", "sin"]

for (let name of names) {
  //let 대신 const 사용가능
  console.log(name)
}

let data = ["godori", "irodog", "roodig"]
let newData = [...data]
console.log(newData)
console.log(data)

function concat(x, y, ...restParam) {
  return x + y + restParam.join("")
}

let result1 = concat("a", "b")
let result2 = concat("a", "b", "a", "b", "a", "b", "c", "b")

console.log(result1, result2) //ab abababab
