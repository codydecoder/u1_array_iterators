//array iterators practice

//FOREACH ARRAY
/*const numbers = [1, 3, 5, 7, 9]

numbers.forEach((number) => {console.log(number)})
*/

//MAP ARRAY
/*const words = ['the', 'world', 'is', 'round', 'and', 'so', 'am', 'i']

const wordLengths = words.map((word) => {
    //console.log(`"${word}" is ${word.length} letters long`)
    return word.length
})

console.log(wordLengths)
*/

//FILTER ARRAY
/*const words = ['the', 'world', 'is', 'round', 'and', 'so', 'am', 'i']

//words.filter((word) => {console.log(word.length > 3)})
const shortWords = words.filter((word) => {
    return word.length <= 3
})
console.log(shortWords)
*/

//REDUCE ARRAY
/*const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((a, v) => { return a + v }, 0)
console.log(sum)
*/

//YOU DO - TOTAL COST GENERATOR
const shoppingCart = [5.08, 10.33, 7.37, 14.32, 20.43, 1.08, 5.38]

const salesTax = shoppingCart.forEach((number) => {number * 1.1})
const totalCost = shoppingCart.reduce((a, v) => { return a + v }, 0)
console.log(totalCost)
