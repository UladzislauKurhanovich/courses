function narcissistic(value) {
    let index = 0;
    let sum = 0;
    const numbers = value.toString().split('');
    console.log (numbers)

    for (let i = value; i >= 1;) {
        i = i/10;
        index++;
    }
    for (let i = 0; i < index; i++) {
        sum += parseInt(numbers[i])**index
    }
    if (sum === value) {
        return true;
    } else {
        return false;
    }
}

narcissistic(123)