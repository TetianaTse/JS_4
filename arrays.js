
let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sumPositive = 0;
let amountPositive = 0;
let amountNegative = 0;
let multPositive = 1;
let sumPositiveHonest = 0;
let sumPositiveOdd = 0;
let amountPositiveOdd = 0;
let amountPositiveHonest = 0;
let min = [0];
let minNumber;
let max = [0];
let maxNumber;
document.write(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        amountPositive += 1;
        sumPositive += arr[i];
        multPositive *= arr[i];
        if (arr[i] % 2 === 0) {
            sumPositiveHonest += arr[i];
            amountPositiveHonest += 1;
        } else {
            sumPositiveOdd += arr[i];
            amountPositiveOdd += 1;
        }

    } else if (arr[i] < 0) {
        amountNegative += 1;
    }
    if (arr[i] < arr[min]) {
        min = i;
        minNumber = arr[i]; 
    } else if (arr[i] > arr[max]) {
        max = i;
        maxNumber = arr[i];
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxNumber) {
    arr[i] = 0;
    }
}



document.write('<p>Сумма положительных элементов равна: ' + sumPositive + ';</p>'); // 438
document.write('<p>Количество положительных элементов составляет: ' + amountPositive + ';</p>'); // 14
document.write('<p>Минимальным элементом массива является число: ' + minNumber + '. ' + ' Его порядковый номер ' + min + ';</p>'); // -63
document.write('<p>Максимальным элементом массива является число: ' + maxNumber + '. ' + ' Его порядковый номер ' + max + ';</p>'); // 76
document.write('<p>Количество отрицательных элементов составляет: ' + amountNegative + ';</p>'); // 10
document.write('<p>Количество нечетных положительных элементов составляет: ' + amountPositiveOdd + ';</p>'); // 4
document.write('<p>Количество четных положительных элементов составляет: ' + amountPositiveHonest + ';</p>'); // 10
document.write('<p>Сумма четных положительных элементов равна: ' + sumPositiveHonest + ';</p>'); //292
document.write('<p>Сумма нечетных положительных элементов равна: ' + sumPositiveOdd + '; '); // 146
document.write('<p>Произведение положительных элементов равно: ' + multPositive + '; '); // 9,961812493074432e+17
document.write('<p>Обнуление всех элементов массива кроме максимального: ', arr + '</p>'); 

