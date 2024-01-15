const caixa = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btncopy = document.querySelector('#btn_copiar')
const btnremove = document.querySelector('#remove')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle('selection')
    })
})

btncopy.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selection")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})


btnremove.addEventListener("click", ()=>{
    const cursoRemovido = [...document.querySelectorAll(".curso:not(.selection)")]
    cursoRemovido.map((el)=>{
        caixa.append(el)
    })
})