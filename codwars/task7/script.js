function getCount(str) {
    var vowelsCount = 0;
    let strArray = str.split('')
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === 'a' || strArray[i] === 'e' || strArray[i] === 'i' || strArray[i] === 'o' || strArray[i] === 'u') {
            vowelsCount++;
        }
    }
    console.log(strArray)
    console.log(vowelsCount);
    return vowelsCount;
    
}
getCount('abracadabra')