const container = document.querySelector('.container')

const body = document.querySelector('body')

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


body.addEventListener('keydown', (e) => {
    // console.log(e.key);

    switch (e.key) {
        case '1':
            output.innerHTML += 1
            break;
        case '2':
            output.innerHTML += 2
            break;
        case '3':
            output.innerHTML += 3
            break;
        case '4':
            output.innerHTML += 4
            break;
        case '5':
            output.innerHTML += 5
            break;
        case '6':
            output.innerHTML += 6
            break;
        case '7':
            output.innerHTML += 7
            break;
        case '8':
            output.innerHTML += 8
            break;
        case '9':
            output.innerHTML += 9
            break;
        case '0':
            output.innerHTML += 0
            break;
        case '*':
            output.innerHTML += '*'
            break;
        case '/':
            output.innerHTML += '/'
            break;
        case '-':
            output.innerHTML += '-'
            break;
        case '+':
            output.innerHTML += '+'
            break;

        case 'Enter':
            output.innerHTML = eval(output.innerHTML)
            break;
        case 'Escape':
            output.innerHTML = ''
            break;
        case 'Backspace':
            let newStr = '';
            for (let i = 0; i < output.innerHTML.length - 1; i++) {
                newStr += output.innerHTML[i]
            }

            output.innerHTML = newStr
            break;

        default:
            break;
    }


})