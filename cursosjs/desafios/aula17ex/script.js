let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNummero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }

}

function inlista(n, l) {
   if (l.indexOf(Number(n)) != -1) {
    return true
   }
    else {
    return false
   }
}

function adicionar()  {
    if (isNummero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
   }
   else {
    window.alert('Valor inválido ou já encontrado na lista')
   }
   num.value = ''
   num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um npumero antes de finalizar.')
    }
    else {
        let tot = valores.length
        res.innerHTML = ''
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores)
         {
           soma += valores[pos]
        if (valores[pos] > maior)
        maior = valores[pos]
        else if (valores[pos] < menor)
        menor = valores[pos]
    }
        media = soma / tot
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando os valores, temos ${soma}.`
        res.innerHTML += `<p>A média desses números são ${media}.</p>`
    }
}