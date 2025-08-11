
// Pegar as teclas Numéricas e operações

const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")


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


// Controle dos Calculos


