const number = document.querySelector('.firstNumber')
const checkBtn = document.querySelector('.check')
const  results = document.querySelector('.result')
const list = document.querySelector('.flist')
const valores = []

checkBtn.addEventListener("click", function primeNumber(){
    let total = 0
    let newNumber = Number(number.value)
    list.innerHTML = ''
    valores.length = 0 

    for(i = 1; i <= newNumber; i++){
        if(newNumber % i == 0){
            valores.push(i)
            let item = document.createElement('option')
            item.text = `${i}`
            list.appendChild(item)
            total += 1
        }    
        
    }
    if(total == 2){
        results.innerHTML = `O número ${newNumber} é primo.`
    }
    else {
        results.innerHTML = `O número ${newNumber} não é primo.`
    }
})