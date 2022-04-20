let n = 5

let ans = 0
let i = 0

while( n != 0){
    let bit = n & 1

    ans = (bit * Math.pow(10, i) ) + ans
     
    n = n >> 1
    i++

}

console.log('answer is ' + ans)



// Output:
// answer is 101                                                                                                   