
// Pegar as teclas Numéricas e operações

const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tporcent = document.querySelector("#porcent")
const tlimpar = document.querySelector("#tlimpar")


// Adicionar Eventos

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})

teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})

tlimpar.addEventListener("click",(evt)=>{
    display.innerHTML="0"
})

// Controle dos Calculos


