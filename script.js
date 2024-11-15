
/* Adicionar um Número na Calculadora, Acessar o HTML e Pegar */
function adicionarCaracter(num){

    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + num
}
