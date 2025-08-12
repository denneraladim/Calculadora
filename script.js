
// Pegar as teclas Numéricas e operações

const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tporcent = document.querySelector("#porcent")
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



