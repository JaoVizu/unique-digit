function uniqueDigit(value){
  if(String(value).length === 1){
    console.log(`O digito único é ${value}`)
  }else{
    value = sumOfNumbers(value)
    uniqueDigit(value)
  }
}

function sumOfNumbers(value){
  const splitNumbers = String(value).split('')
  let sum = 0
  splitNumbers.forEach(number => sum += Number(number))
  return sum
}

function concatNumbers(n ,k) {
  let p = ''
  for(let i = k; i > 0; i--) p += n
  uniqueDigit(p)
}

uniqueDigit(987573)
concatNumbers(9875, 4)