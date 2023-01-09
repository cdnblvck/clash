function computeClosestToZero(numbers) {
    if(!numbers.length){
        return 0;
    }
    
    let closest = 0;
    
    for (let i = 0; i < numbers.length ; i++) {
        if (closest === 0) {
            closest = numbers[i];
        } else if (numbers[i] > 0 && numbers[i] <= Math.abs(closest)) {
            closest = numbers[i];
        } else if (numbers[i] < 0 && - numbers[i] < Math.abs(closest)) {
            closest = numbers[i];
        }
    }
    
    return closest;
}



function calculateTotalPrice(prices, discount) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    console.error(...prices);
    let max  = Math.max(...prices)
    const somme = prices.reduce((a,value)=>{
        if(value == max){
            console
          return   a + max*(1-discount/100)
        }else{
           return  (a+value)
        }
    })
    console.log(discount/100, max*(1-discount/100), somme)
    //let v =  somme - max*(1+discount/100)
    return Math.round(somme);
}

/* Ignore and do not change the code below */
// #region main
const discount = parseInt(readline());
const n = parseInt(readline());
const prices = readline().split(' ').map(j => parseInt(j)).slice(0, n);
const oldWrite = process.stdout.write;
process.stdout.write = chunk => { console.error(chunk); return true }
const price = calculateTotalPrice(prices, discount);
process.stdout.write = oldWrite;
console.log(price);
// #endregion
401 245 308 123 95
0.23 308.77 1172

1172


Fail
Found:    "1172"
Expected: "1079"