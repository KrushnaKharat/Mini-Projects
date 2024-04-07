let input = document.querySelectorAll('input')[0]
let add = document.querySelectorAll('input')[1]

let ul = document.querySelector('ul')
let body = document.querySelector('body')


let data = ''


let time = new Date()

console.log(time.toLocaleTimeString());

function addData(e) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    let edit = document.createElement('button')

    let li_div1 = document.createElement('div')
    let li_div2 = document.createElement('div')





    if (input.value.length <= 1000) {
        li_div1.innerHTML = `"${input.value}"`

        li.setAttribute('class', 'todoList')

        li.appendChild(li_div1)
        li.appendChild(li_div2)


        ul.appendChild(li)
        li_div2.appendChild(edit)
        li_div2.appendChild(btn)

        edit.innerHTML = 'Edit'
        btn.innerHTML = 'Remove'

    } else {
        alert('Task Should be less than 50 words')
    }


    console.log(e);









    input.value = ''





    edit.addEventListener('click', () => {

        let editedData = prompt('Edit Your Task')

        li.innerHTML = `${editedData}`
        li.appendChild(edit)
        li.appendChild(btn)

    })

    btn.addEventListener('click', () => {

        li.remove()

    })



}


add.addEventListener('click', addData)

body.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addData()
    }
})

// body.addEventListener('keydown', addData)