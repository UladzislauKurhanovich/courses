function duplicateEncode(word){
    let wordLCase = word.toLowerCase();
    let wordArray = wordLCase.split('');
    let newWordArray = [];
    for(let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === ' ') {
            newWordArray.push('(');
        } else {
            for (let j = 0, count = 0; j < wordArray.length; j++) {
                if (wordArray[i] === wordArray[j]) {
                    count = count + 1;
                }
                if (count > 1) {
                    newWordArray.push(')');
                    break;
                }
                if (j === wordArray.length - 1 && count === 1) {
                    newWordArray.push('(');
                }
            }
        }
    }
    console.log(wordArray);
    console.log(newWordArray.join(''));
}

duplicateEncode('s aad  ad')