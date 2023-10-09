function funcaoresposta(){ //1
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta"]:checked');
    if(respostausuario){
    if(respostausuario.value === respostacorreta){
        document.getElementById("retorno").textContent = "acertou";
    }
}
}