export class Spellchecker {
    results: string[] = [];
    alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    wordsList: string[] = [];

    constructor(wordsList: string[]) {
        this.wordsList = wordsList;
    }

    public isWordInList(word: string): boolean {
        for (let i: number = 0; i < this.wordsList.length; i++) {
            if (this.wordsList[i] == word) {
                return true
            }
        }
        return false
    }

    public isOneLetterError(word: string): string[] {
        for (let i: number = 0; i < word.length; i++) {
            for (let j: number = 0; j < this.alphabet.length; j++) {
                let newWord: string = word.replace(word.charAt(i), this.alphabet.charAt(j));
                if (this.isWordInList(newWord)) {
                    this.results.push(newWord);
                }
            }
        }
        return this.results;
    }

    public isLettersReplaced(word: string): string[] {
        for (let i: number = 0; i < word.length - 1; i++) {
            let arr: string[] = word.split("");
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            let newWord = '';
            for (let i: number = 0; i < arr.length; i++) {
                newWord += arr[i];
                if (this.isWordInList(newWord) == true) {
                    this.results.push(newWord);
                }
            }
        }
        return this.results;
    }

    public separateWords(word: string): string[] {
        let newWord = '';
        let i: number = 0;
        while (i < word.length) {
            newWord += word.charAt(i);
            let newString = word.substring(i + 1, word.length);
            if ((this.isWordInList(newWord) == true) && (this.isWordInList(newString) == true)) {
                this.results.push(newWord);
                this.results.push(newString);
            }
            i += 1;
        }
        return this.results;
    }

    public findWordsFromList(word: string): string[] {
        let newWord = '';
        let i: number = 0;
        while (i < word.length) {
            newWord += word.charAt(i);
            if (this.isWordInList(newWord)) {
                this.results.push(newWord);
                let newString = word.substring(i + 1, word.length);
                if (this.isWordInList(newString)) {
                    this.results.push(newString);
                }
            }
            i += 1;
        }
        return this.results;
    }

    public putLetterBetween(word: string): string[] {
        let newWord: string = "";
        for (let i: number = 0; i < word.length + 1; i++) {
            for (let j: number = 0; j < this.alphabet.length; j++) {
                newWord = word.slice(0, i) + this.alphabet[j] + word.slice(i, word.length);
                if (this.isWordInList(newWord)) {
                    this.results.push(newWord);
                }
            }
        }
        return this.results;
    }

    public deleteLetter(word: string): string[] {
        let newWord: string = '';
        for (let i: number = 0; i < word.length; i++) {
            if (this.isWordInList(newWord)) {
                this.results.push(newWord);
            } else {
                newWord = word.slice(0, 0) + word.slice(i + 1, word.length);
            }
        }
        return this.results;
    }

}