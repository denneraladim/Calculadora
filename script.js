
/* Adicionar um Número na Calculadora, Acessar o HTML e Pegar */

function adicionarCaracter(num){

    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + num
}

/* Limpar Tela */

function limpaTela(){
    document.querySelector(".display").value = ""

}

/* Função de Cálculo */

function calcular(){
    const valorDisplay = document.querySelector(".display").value
    document.querySelector(".display").value = eval(valorDisplay)
}

/* Função Inverter Número */

function inverterNumero(){
    const valorDisplay = document.querySelector(".display").value
    document.querySelector(".display").value = valorDisplay * -1
}

