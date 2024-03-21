const container = document.querySelector('.container')

let ac = document.querySelectorAll('div')[2]
let c = document.querySelectorAll('div')[3]
let devide = document.querySelectorAll('div')[4]
let mult = document.querySelectorAll('div')[5]
let seven = document.querySelectorAll('div')[6]
let eight = document.querySelectorAll('div')[7]
let nine = document.querySelectorAll('div')[8]
let minus = document.querySelectorAll('div')[9]
let four = document.querySelectorAll('div')[10]
let five = document.querySelectorAll('div')[11]
let six = document.querySelectorAll('div')[12]
let plus = document.querySelectorAll('div')[13]
let one = document.querySelectorAll('div')[14]
let two = document.querySelectorAll('div')[15]
let three = document.querySelectorAll('div')[16]
let equal = document.querySelectorAll('div')[17]
let zero = document.querySelectorAll('div')[18]
let dot = document.querySelectorAll('div')[19]

let output = document.querySelector('#output')

zero.addEventListener('click', () => {


    output.innerHTML += 0
})

one.addEventListener('click', () => {


    output.innerHTML += 1
})

two.addEventListener('click', () => {

    output.innerHTML += 2
})
three.addEventListener('click', () => {

    output.innerHTML += 3
})

four.addEventListener('click', () => {

    output.innerHTML += 4
})

five.addEventListener('click', () => {

    output.innerHTML += 5
})

six.addEventListener('click', () => {

    output.innerHTML += 6
})

seven.addEventListener('click', () => {

    output.innerHTML += 7
})

eight.addEventListener('click', () => {

    output.innerHTML += 8
})

nine.addEventListener('click', () => {

    output.innerHTML += 9
})

dot.addEventListener('click', () => {

    output.innerHTML += '.'
})


ac.addEventListener('click', () => {
    output.innerHTML = ''
})

c.addEventListener('click', () => {
    output.innerHTML = ''

})


mult.addEventListener('click', () => {
    output.innerHTML += '*'
})
devide.addEventListener('click', () => {
    output.innerHTML += '/'
})
plus.addEventListener('click', () => {
    output.innerHTML += '+'
})
minus.addEventListener('click', () => {


    output.innerHTML += '-'
})



equal.addEventListener('click', () => {

    output.innerHTML = eval(output.innerHTML)

    console.log(output.innerHTML);



})