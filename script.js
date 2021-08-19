const highLow = function(number) {
    if(number > 100) {
        return 'true';
    }
    return 'false';
}

console.log(highLow(800))
console.log(highLow(80))

const brenda = function(current, age) {
    if(current < 100 && age >= 18) {
        return "Come in!";
    } else if(current >=100 && age >= 18) {
        return "It's too busy now, come back later";
    }
        return "This is a club for adults";
    
}

console.log(brenda(65, 30))
console.log(brenda(111, 20))
console.log(brenda(65, 16))

const average = function(num1, num2 , num3, num4, num5){
    const total = num1 + num2 + num3 + num4 + num5;
    const av = total / 5 ;
    return Math.round(av)
}

console.log(average(2.5, 3.2, 4.6, 5, 6))
console.log(average(7.4, 3.2, 5.9, 1.2, 9.3))