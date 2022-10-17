const togglePassword = document.getElementById('eyeToggle')
const password = document.getElementById('password')
const toggleRetypePassword = document.getElementById('Toggle')
const reTypePassword = document.getElementById('reTypePassword')





function togglePasswordField (){

    console.log(password.getAttribute("type"));

    if(password.getAttribute("type") === "password"){

        password.setAttribute("type", "text")
        togglePassword.classList.replace("fa-eye","fa-eye-slash")

    }else{
        password.setAttribute("type", "password")
        togglePassword.classList.replace("fa-eye-slash","fa-eye")

    }

    
    

}

function togglePasswordsucess (){

    console.log(reTypePassword.getAttribute("type"));

    if(reTypePassword.getAttribute("type") === "password"){

        reTypePassword.setAttribute("type", "text")
        toggleRetypePassword.classList.replace("fa-eye","fa-eye-slash")

    }else{
        reTypePassword.setAttribute("type", "password")
        toggleRetypePassword.classList.replace("fa-eye-slash","fa-eye")

    }

    
    

}


togglePassword.addEventListener('click',togglePasswordField)
toggleRetypePassword.addEventListener('click',togglePasswordsucess)

