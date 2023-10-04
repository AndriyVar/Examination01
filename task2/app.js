'use strict'

class SearchWord {
    constructor(text, word) {
        this.text = text;
        this.word = word;
    }

    // видалення розділових знаків
    clear() {
        let symvol = [`.`, `,`, `?`, `@`, `!`, `:`, `;`, `-`, `/`, `'`, `{`, `}`, `[`, `]`, `(`, `)`, `\\`, `|`, `#`];
        let arr = this.text.split('');

        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < symvol.length; j++) {
                if(arr[i] == symvol[j]) {
                    arr.splice(i, 1, ' ');
                }
            }
        }

        return arr.join('');
    }

    // підрахунок кількості збігів просто слів
    numberWord() {
        let str = this.clear();
        let arr = str.toLowerCase().split(' ');
        this.word.toLowerCase();
        let rez = 0;
        
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].includes(this.word)) {
                rez +=1;
            }
        }
        return rez;
    }

    // вивід результату у консоль
    find() {
        console.log(`знайдено ${this.numberWord()} збігів`);
    }
    
}

class WordsSearch extends SearchWord {
    constructor(text, word) {
        super(text, word);
    }

    numberWord() {
        let str = this.clear();
        let arr = str.toLowerCase().split(' ');
        let wordArr = this.word.toLowerCase().split(' ');
        
        for(let j = 0; j < wordArr.length; j++) {
            let rez = 0;
            for(let i = 0; i < arr.length; i++) {
                if(arr[i].includes(wordArr[j])) {
                    rez +=1;
                }
            }
            console.log(`Слово ${wordArr[j]} знайдено ${rez}`);
        }

        // return rez;
    }

}




let str = prompt('Введіть речення');
let word = prompt('Введіть слово для пошуку');

const s = new WordsSearch(str, word);

s.numberWord();