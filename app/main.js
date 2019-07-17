// 17JUL19: write a function to return the factorial of a provided integer.For example factorialize(5) == 120
function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1
  }
  else return num * factorialize(num - 1)
}

let num = 5
console.log(factorialize(num))

// 16JUL19: Write a function that will loop over an array and group all similar values in sub arrays Example group([1, 1, 3, 4, 5, 4]) => output[[1, 1], [3], [4, 4], [5]]


// function subArray(arr) {
//   let out = []
//   arr.sort((a, b) => a - b)
//   arr.forEach(v => {
//     if (!out[v]) {
//       arr[v] = []
//     }
//     out[v].push(v)
//   })
//   out = out.filter(e => e != '')

//   // for (let i = 0; i < arr.length; i++) {
//   // }

//   return subArray;
// }

// let arr = [1, 1, 3, 4, 5, 4]
// console.log(subArray(arr))


// functiom subArray(arr)[
//   let dict = {}
// arr.forEach(e => {
//   if (!dict[e]) {
//     dict[e] = []
//   }
//   dict[e].push(e)
// })
// ]