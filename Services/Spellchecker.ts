const words: string[] = ["lake", "lock", "lama", "lose", "luck", "like", "soke", "siwe", "sike", "bake"];
let word: string = "lakeloek";
const alfabhet: string = 'abcdefghijklmnopqrstuvwxyz';
let results: string[] = [];

function isWordinList(word: string): boolean {
    for (let i: number = 0; i < words.length; i++) {
        if (words[i] == word) {
            return true
        }
    }
    return false
}

function isOneLetterError(word: string) {
    for (let i: number = 0; i < word.length; i++) {
        for (let j: number = 0; j < alfabhet.length; j++) {
            let newWord: string = word.replace(word.charAt(i), alfabhet.charAt(j));
            if (isWordinList(newWord) == true) {
                results.push(newWord);

            }
            console.log(word);
        }
    }
}

function isLettersreplaced(word: string) {
    for (let i: number = 0; i < word.length - 1; i++) {
        let arra: string[] = word.split("");
        [arra[i], arra[i + 1]] = [arra[i + 1], arra[i]];
        let newWord = '';
        for (let i: number = 0; i < arra.length; i++) {
            newWord += arra[i];
            if (isWordinList(newWord) == true) {
                results.push(newWord);
            }
        }
        console.log(newWord);
    }
}

function separateWords(word: string) {
    let newWord = '';
    let i: number = 0;
    while (i < word.length) {
        newWord += word.charAt(i);
        console.log(newWord);
        let newString = word.substring(i + 1, word.length);
        if ((isWordinList(newWord) == true) && (isWordinList(newString) == true)) {
            results.push(newWord);
            // let newString = word.substring(i+1,word.length);
            results.push(newString);
        }
        console.log(results);
        i += 1;
    }
}

function findWordsFromList(word: string) {
    let newWord = '';
    let i: number = 0;
    while (i < word.length) {
        newWord += word.charAt(i);
        if (isWordinList(newWord) == true) {
            results.push(newWord);
            let newString = word.substring(i + 1, word.length);
            if (isWordinList(newString) == true) {
                results.push(newString);
            }
        }
        console.log(results);
        i += 1;
    }
}

function putLetterBetween(word: string) {
    let newWord: string = "";
    for (let i: number = 0; i < word.length + 1; i++) {
        for (let j: number = 0; j < alfabhet.length; j++) {
            newWord = word.slice(0, i) + alfabhet[j] + word.slice(i, word.length);
            if(isWordinList(newWord)) {
                results.push(newWord);
            }
        }
    }

    return results;
}

function deleteLetter(word: string){
    let newWord: string = '';
    for(let i: number = 0; i<word.length;i++){
        if(isWordinList(newWord)){
            console.log(newWord);
        } else {
           newWord = word.slice(0, 0) + word.slice(i+1, word.length);
           console.log(newWord);
        }
    }
}