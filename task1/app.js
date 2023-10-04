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

let str = prompt('Введіть речення');
let word = prompt('Введіть слово для пошуку');

const s = new SearchWord(str, word);

s.find();
