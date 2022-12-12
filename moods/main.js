const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for(const sleep of hours){
    if(sleep <= 6){
    grumpyHours.push(1)
}
    else if (sleep >= 7){
    happyHours.push(1)
}
}

const grumpyDays = grumpyHours.length
const happyDays = happyHours.length

console.log(`I was grumpy on ${grumpyDays} days. 
I was happy on ${happyDays} days.`)