//регистрация пользователя

function saveUserData(event){
    event.preventDefault()

    const username = document.querySelector('.name').value
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value

    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)


    window.location.href = 'index.html'
}

//Вход

function login(event){
    event.preventDefault()

    let currenEmail = document.querySelector('.email_open').value
    let currenPassword = document.querySelector('.password_open').value

    let password = localStorage.getItem('password')
    let email = localStorage.getItem('email')

    console.log(currenEmail)
    console.log(currenPassword)


    if(currenEmail !== email || currenPassword !== password){
        alert('Не верное имя пользователя или пороль')
    }else{
        window.location.href = 'index.html'
    }
}

//Слфйдер лайн зебра

let offset = 0
let currentPosition = document.querySelector('.two__section-content')

function sliderLineZebra(){
    offset -= 253.
    currentPosition.style.left = offset + 'px'
    if(offset < -759){
        offset = 0
    }
}


setInterval(sliderLineZebra, 4000)