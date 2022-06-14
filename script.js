do{
    action = prompt("Выберите операцию (+ - / *)")
} while(action !== "+" && action !== "-" && action !== "/" && action !== "*" );

do{
    amountNum = parseInt(prompt("Сколько чисел Вы хотите использовать?").replaceAll(" ", ""));
} while(amountNum >= 7 || amountNum <= 1 || isNaN(amountNum));


result = 0;

for(i = 1; i <= amountNum; i++){
    do {
        number = parseInt(prompt(`Введите число ${i}`).replaceAll(" ", ""));
    } while(isNaN(number))
    
    if(action === "+") {
        result += number;
    } else if(action === "-") {
        if(i === 1) {
            result = number;
        } else {
            result -= number;
        }
    } else if(action === "*") {
        if(i === 1) {
            result = 1;
        }
        result *= number;
    } else {
        if(i === 1) {
            result = number;
        } else {
            result /= number;
        }
    }
}

alert(`Ответ = ${result}`)