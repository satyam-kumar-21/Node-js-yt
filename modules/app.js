// common js

// const {add , sub} = require("./math")

// console.log(add(2,5))
// console.log(sub(15,2))


// const math = require("./math")
// console.log(math.add(3,5))
// console.log(math.sub(15,5))




// ES module

// import default export
// import add from "./math.js"

// console.log(add(12,54))

// import named export
// import {add,sub} from "./math.js"

// console.log(add(12,54))
// console.log(sub(15,10))

// import with different name

import {add as sum,sub} from "./math.js"

console.log(sum(10,20))