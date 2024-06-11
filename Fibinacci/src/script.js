const fiboNumber = document.querySelector('#fibonacciNumber')
const calculeBottom = document.querySelector('.resbottom')
const NumberList = document.querySelector('#numberList')
const valores = []

// function fibonacci(n){
//     if (Number.isInteger(n) && n > 0){
//         let i = 0
//         let j = 1
//         let text = ' ' 
//         for(k = 0; k < n; k++){
//             text += i.toString() + ' '
//             let temp = i 
//             i = j
//             j = temp + j

//             return text
//         }
       
//     }
// }



// Fibonaccii(10)

calculeBottom.addEventListener('click',()=>{
    let number = Number(fiboNumber.value)
    NumberList.innerHTML = ''
    valores.length = 0

    if (Number.isInteger(number) && number > 0){
        let cont = 0;
        let subcont = 1;
        for(let calnumber = 0; calnumber < number; calnumber++){
            let text = '';
            let a = 0;
            let b = 1;
            for(let linha = 0; linha <= calnumber; linha++){
                text += a.toString() + ' ';
                let temp = a;
                a = b;
                b = temp + b;
            }
            valores.push(text)
            let item = document.createElement('option')
            item.text = `${text}`
            NumberList.appendChild(item)
            let temp = cont;
            cont = subcont;
            subcont = temp + subcont;
        }
    }
})

