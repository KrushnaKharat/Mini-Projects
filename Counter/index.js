let back = document.querySelector('.back');
        let next = document.querySelector('.next');
        let reset = document.querySelector('.reset');
        let display = document.querySelector('.display')
        let counter = 0;



        next.addEventListener('click', () => {
            counter++
            display.innerHTML = counter;
        })
        back.addEventListener('click', () => {
            counter--
            display.innerHTML = counter;
        })
        reset.addEventListener('click', () => {
            counter = 0

            display.innerHTML = counter;
        })