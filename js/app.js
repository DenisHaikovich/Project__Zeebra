const currentName = 'denis.gaikovich'
const currentPass = 'getman735' 

document.getElementById('btn').onclick = function(){
    let inpName = document.getElementById('name')
    let inpPass = document.getElementById('pas')

    let name = inpName.value
    let password = inpPass.value 

    if(currentName == name && currentPass == password){
        let modal = document.querySelector('.modal__window')
        modal.style.display = 'none'
    }else if(name == '' || password == ''){
        //console.log('eror')
    }
    else if(name !=currentName || password != currrentPass){
        alert('Неверное имя пользователя или пороль')
    }
}