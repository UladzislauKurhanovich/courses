function validatePIN (pin) {
    const numArray = pin.split('');
    console.log(numArray)
    for (let i = 0; i < numArray.length; i++) {
        if (!(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(numArray[i]))) {
            console.log('false')
            return false
        }
    } 
    if (numArray.length === 4 || numArray.length === 6) {
        console.log('true')
        return true
    } else {
        console.log('false')
        return false
    } 
}

validatePIN ('303T')