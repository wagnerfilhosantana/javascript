let num = [2,5,6]

num.sort(function(a,b) {
    if(a>b) return 1
    if(a<b) return -1
    return 0
})

console.log(num)