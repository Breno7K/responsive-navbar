const slide = () =>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-on')
        burger.classList.toggle('burger-on')
        
    })
}

slide()

