let a = 10

let b = [0, 1]
let cont = 1

while(b.length < a){
    if(b.length > 1){
      b.push(b[cont]+ b[cont-1])
    }
    cont++
}
console.log(b)
