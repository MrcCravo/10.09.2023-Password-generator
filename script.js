let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijkmlnopqrstuvxzwyABCDEFGHIJKLMNOPQRSTUVXZWY0123456789"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}


function generatePassword(){
    
    let pass = "";
    
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));       
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    if(novaSenha){
        navigator.clipboard.writeText(novaSenha)
        .then(function() {
            alert("Senha copiada com sucesso!");
        });
    }
}
//O vídeo indicado pedia que fosse criado um alerta para a função copyPassword, contudo a função deixava de funcionar adquadamente
//Os comentários do vídeo encontrados no youtube, sugeriam que o alert fosse colocado após o navigator, o que também não funcionou
//Encontrei a solução aboradando o tema no chatgpt

