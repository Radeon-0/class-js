let num = 266219;


let digits = String(num).split('');
let product = 1;

for (let digit of digits) {
  product *= Number(digit); 
}

console.log(product); 


let pow= product ** 3;

console.log(pow);


let firstTwoDigits = String(pow).slice(0, 2);

console.log(firstTwoDigits); 