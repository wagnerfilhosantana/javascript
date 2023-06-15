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
        window.alert('Tudo ok!')
   }
   else {
    window.alert('Valor inválido ou já encontrado na lista')
   }
}