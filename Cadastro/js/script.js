
function confirm(){
    alert('Cadastro Concluído!')
}

function showPassword(){
    const eye = document.getElementById('eye')
    const eyeSlash = document.getElementById('eye-slash')
    const fieldPassword = document.getElementById('field-password')

    if(eye.style.display === "none"){
        eye.style.display = "block";
        eyeSlash.style.display = "none";
        fieldPassword.type = "text";
    }else{
        eye.style.display = "none";
        eyeSlash.style.display = "block"
        fieldPassword.type = "password"
    }
}
function showPassword2(){
    const eye2 = document.getElementById('eye2')
    const eyeSlash2 = document.getElementById('eye-slash2')
    const fieldPassword2 = document.getElementById('field-password2')

    if(eye2.style.display === "none"){
        eye2.style.display = "block";
        eyeSlash2.style.display = "none";
        fieldPassword2.type = "text";
    }else{
        eye2.style.display = "none";
        eyeSlash2.style.display = "block"
        fieldPassword2.type = "password"
    }
}

document.getElementById('btn-login')
document.getElementById('btn-login')