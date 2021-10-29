alert("Funcionando");
let campouser = document.getElementById("user");
let camposenha = document.getElementById("password");


let dbuser = { nome: ['admin', 'arildo', 'bruno'], senha: ['1234', '1', '2'] };
botao.onclick = function () {
    click();
}


function click(){
    var usuario = campouser.value;
    var senha = camposenha.value;
    if (usuario == dbuser.nome[0] && senha == dbuser.senha[0]) {
        // alert("senha valida");
        let janela = window.location.href= "/main.html";
    }
    else{
        alert("Usuário ou senha invalida");
        //campouser.value = "";
        //camposenha.value = null;
    }
}