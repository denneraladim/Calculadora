
// Pegar as teclas Numéricas e operações

const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")
const traiz = document.querySelector("#traiz")
const tlimpar = document.querySelector("#tlimpar")
const tigual = document.querySelector("#tigual")

let sinal = false
let decimal = false

// Adicionar Eventos e Controle

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false        
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                } else(
                    display.innerHTML += evt.target.innerHTML
                )
                
            } 
            
        } else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
                display.innerHTML += evt.target.innerHTML
            }
        
    })
})

teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
            display.innerHTML += "*"
        } else {
            display.innerHTML += evt.target.innerHTML
        }
          
        }
        
    })
})

tlimpar.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    display.innerHTML="0"
})


// Operações

tigual.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})


traiz.addEventListener("click", () => {
    const texto = display.innerHTML;
    const valor = parseFloat(texto.replace(",", "."));

    if (!isNaN(valor)) {
        if (valor >= 0) {
            const resultado = Math.sqrt(valor);
            const resultadoFormatado = formatarNumero(resultado);
            display.innerHTML = resultadoFormatado.replace(".", ",");
        } else {
            display.innerHTML = "Erro";
        }
    } else {
        display.innerHTML = "Erro";
    }

    ajustarTamanhoFonte();
});


// Tamanho da Fonte e Numero de casas decimais


function formatarNumero(num) {
    const inteiro = Math.floor(num);
    const tamanhoInteiro = inteiro.toString().length;

    let casasDecimais;

    if (tamanhoInteiro <= 2) {
        casasDecimais = 3; 
    } else if (tamanhoInteiro <= 4) {
        casasDecimais = 2; 
    } else {
        casasDecimais = 1; 
    }

     return num.toFixed(casasDecimais);
}

// Verificar quntidade de caracteres para o visor


function ajustarTamanhoFonte() {
    const maxLength = 12; 
    const texto = display.innerHTML;

    if (texto.length > maxLength) {
        display.style.fontSize = "1.5rem";
    } else {
        display.style.fontSize = "3.5rem"; 
    }
}
