function toCamelCase(str){
    let wardArray = str.split('');
    let newWordArray = [];
    if (wardArray.includes('-')) {
       for (let i = 0; i < wardArray.length; i++) {
           if (wardArray[i] != '-') {
            newWordArray.push(wardArray[i]);
           } 
           else if (wardArray[i] === '-') {
            newWordArray.push(wardArray[i+1].toUpperCase());
            i++;
           } 
        }
    }
    else if (wardArray.includes('_')) {
        for (let i = 0; i < wardArray.length; i++) {
            if (wardArray[i] != '_') {
             newWordArray.push(wardArray[i]);
            } 
            else if (wardArray[i] === '_') {
             newWordArray.push(wardArray[i+1].toUpperCase());
             i++;
            } 
        }
    }
    return newWordArray.join('')
}

toCamelCase('The_stealth_warrior')
