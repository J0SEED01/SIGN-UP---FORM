const $inputs = document.querySelectorAll('.form__input')

console.log($inputs)


document.addEventListener('submit', e =>{
    
    
    e.preventDefault()

    $inputs.forEach(input => {

        if(input.value === ''){
            
            input.previousElementSibling.classList.add('active')
            input.nextElementSibling.classList.add('active')
            input.style.setProperty('border-color', 'hsl(0, 100%, 74%) ')
        
        }
        else{
            input.previousElementSibling.classList.remove('active')
            input.nextElementSibling.classList.remove('active')
            input.style.setProperty('border-color', 'hsl(248, 32%, 49%) ')
        }

    })

    
    if($inputs[0].value !== '' && $inputs[1].value !== '' && $inputs[2].value !== '' && $inputs[3].value !== ''){
        console.log('bien')

        setTimeout(() => {

            document.querySelector('.form__sending').classList.add('active')

            setTimeout(() => {
                
                document.querySelector('.form__sending').classList.remove('active')
                document.querySelector('.sending__excelent').classList.add('active')
                
                setTimeout(() => {
                    document.querySelector('.offer__form').reset()
                    document.querySelector('.sending__excelent').classList.remove('active')
                },2100)


            },2000)

        },1)
    }



})








